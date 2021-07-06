package springboot.controller;

import org.dom4j.rule.Mode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import springboot.domain.Member;
import springboot.service.MemberService;

import java.util.List;

@Controller
public class MemberController {
    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping("/members/new")
    public String createForm() {
        return "members/createMemberForm";
    }

    @PostMapping("/members/new")
    public String create(MemberForm form) {
        Member member = new Member();
        member.setName(form.getName());
        memberService.join(member);

        return "redirect:/";
    }

    @GetMapping("/members")
    public String list(Model model) {
        List<Member> members = memberService.findMembers();
        model.addAttribute("members", members);
        return "members/memberList";
    }

    @GetMapping("/members/search")
    public String searchForm() {
        return "members/searchMemberForm";
    }

    @PostMapping("/members/search")
    public String search(MemberForm form, Model model) {
        List<Member> members = memberService.findLike(form.getName());
        model.addAttribute("members", members);
        return "members/memberList";
    }

    @PostMapping("/members/like")
    @ResponseBody
    public List<Member> like(MemberForm form) {
        List<Member> members = memberService.findLike(form.getName());
        return members;
    }

    @PostMapping("/members/delete")
    @ResponseBody
    public int delete(@RequestParam("id") long id) {
        return memberService.delete(id);
    }

    @PostMapping("/members/edit")
    public String edit(@RequestParam("id") long id, @RequestParam("name") String name, Model model) {
        Member member = new Member();
        member.setName(name);
        member.setId(id);
        model.addAttribute("result", memberService.edit(member));
        return "members/editAction";
    }

    @GetMapping("/members/editMember")
    public String editMember() {
        return "/members/editMember";
    }
}
