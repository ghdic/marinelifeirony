package com.core.order;

import com.core.member.Grade;
import com.core.member.Member;
import com.core.member.MemberService;
import com.core.member.MemberServiceImpl;
import org.junit.jupiter.api.Test;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

public class OrderServiceTest {

    MemberService memberService;
    OrderService orderService;

    @Test
    void createOrder() {
        Long memberID = 1L;
        Member member = new Member(memberID, "memberA", Grade.VIP);
        memberService.join(member);

        Order order = orderService.createOrder(memberID, "itemA", 10000);
        assertThat(order.getDiscountPrice(), is(1000));
    }
}
