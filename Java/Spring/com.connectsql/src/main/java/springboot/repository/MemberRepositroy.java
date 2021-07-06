package springboot.repository;

import springboot.domain.Member;

import java.util.List;
import java.util.Optional;

public interface MemberRepositroy {
    Member save(Member member);
    Optional<Member> findByID(Long id);
    Optional<Member> findByName(String name);
    List<Member> findAll();
    List<Member> findByLike(String part);
    int deleteByID(Long id);
    int editMember(Member member);
}
