package com.core.order;

import com.core.discount.DiscountPolicy;
import com.core.discount.FixDiscountPolicy;
import com.core.discount.RateDiscountPolicy;
import com.core.member.Member;
import com.core.member.MemberRepository;
import com.core.member.MemoryMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class OrderServiceImpl implements OrderService {

    private final MemberRepository memberRepository;
    private final DiscountPolicy discountPolicy;

    @Autowired
    public OrderServiceImpl(MemberRepository memberRepository, DiscountPolicy discountPolicy) {
        this.memberRepository = memberRepository;
        this.discountPolicy = discountPolicy;
    }

    @Override
    public Order createOrder(Long memberID, String itemName, int itemPrice) {
        Member member = memberRepository.findByID(memberID);
        int discountPrice = discountPolicy.discount(member, itemPrice);
        return new Order(memberID, itemName, itemPrice, discountPrice);
    }

    // 테스트 용도도
   public MemberRepository getMemberRepository() {
        return memberRepository;
    }
}
