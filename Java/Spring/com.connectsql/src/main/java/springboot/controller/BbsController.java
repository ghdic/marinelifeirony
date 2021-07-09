package springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import springboot.domain.Bbs;
import springboot.service.BbsService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class BbsController {

    private final BbsService bbsService;

    @Autowired
    public BbsController(BbsService bbsService) {
        this.bbsService = bbsService;
    }

    @GetMapping("/bbs")
    public String list(Model model, HttpServletRequest req){
        int page = 1;
        if (req.getParameter("page") != null)
            page = Integer.parseInt(req.getParameter("page"));
        if(page < 1)
            page = 1;
        List<Bbs> bbsList = bbsService.bbsPagination(page, 10);
        model.addAttribute("bbsList", bbsList);
        model.addAttribute("page", page);
        return "bbs/bbsList";
    }

    @GetMapping("/bbs/new")
    public String write() {
        return "bbs/bbsWrite";
    }

    @PostMapping("/bbs/new")
    public String writeAction(BbsForm bbsForm, HttpServletRequest req) {
        HttpSession session = req.getSession();
        if(session.getAttribute("member") == null){
            String referer = req.getHeader("Referer");
            return "redirect:"+ referer;
        }
        Bbs bbs = new Bbs();
        bbs.setTitle(bbsForm.getTitle());
        bbs.setContent(bbsForm.getContent());
        bbs.setUserID((String) session.getAttribute("member"));
        bbsService.write(bbs);
        return "redirect:/bbs";
    }

    @GetMapping("/bbs/{id}")
    public String bbsView(@PathVariable int id, Model model) {
        Bbs bbs = bbsService.bbsOne(id);
        bbsService.bbsViewIncrease(id);
        bbs.setView(bbs.getView() + 1);
        model.addAttribute("bbs", bbs);
        return "/bbs/bbsView";
    }

    @GetMapping("/bbs/{id}/edit")
    public String edit(@PathVariable int id, Model model) {
        Bbs bbs = bbsService.bbsOne(id);
        model.addAttribute("bbs", bbs);
        return "/bbs/bbsEdit";
    }

    @PostMapping("/bbs/{id}/edit")
    public String editAction(@PathVariable int id, BbsForm bbsForm) {
        Bbs bbs = bbsService.bbsOne(id);
        bbs.setTitle(bbsForm.getTitle());
        bbs.setContent(bbsForm.getContent());
        bbsService.bbsEdit(bbs);
        return "redirect:/bbs/" + id;
    }

    @GetMapping("/bbs/{id}/delete")
    public String delete(@PathVariable int id) {
        bbsService.bbsDelete(id);
        return "redirect:/bbs";
    }
}
