package springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import springboot.domain.Bbs;
import springboot.service.BbsService;

import java.util.List;

@Controller
public class BbsController {

    private final BbsService bbsService;

    @Autowired
    public BbsController(BbsService bbsService) {
        this.bbsService = bbsService;
    }

    @GetMapping("/bbs/list")
    public String list(Model model){
        List<Bbs> bbsList = bbsService.bbsAll();
        model.addAttribute("bbsList", bbsList);
        return "bbs/bbsList";
    }
}
