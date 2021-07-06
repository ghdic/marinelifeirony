package springboot.service;


import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Bean;
import springboot.domain.Member;
import springboot.repository.JdbcMemberRepository;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

import java.util.List;
import java.util.logging.Logger;

@SpringBootTest
public class MemberServiceTest {

    private static Logger log = Logger.getLogger(String.valueOf(MemberServiceTest.class));

    @Autowired
    MemberService memberService;

    @Autowired
    public MemberServiceTest(MemberService memberService) {
        this.memberService = memberService;
    }


    @Test
    void Like() {
        List<Member> members = memberService.findLike("인생");
        for(Member m : members) {
            Assertions.assertTrue(m.getName().contains("인생"));
        }
    }
}
