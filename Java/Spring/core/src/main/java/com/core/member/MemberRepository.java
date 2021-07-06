package com.core.member;

public interface MemberRepository {

    void save(Member member);

    Member findByID(Long memberId);
}
