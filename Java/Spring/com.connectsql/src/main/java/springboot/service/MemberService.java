package springboot.service;

import org.springframework.transaction.annotation.Transactional;
import springboot.domain.Member;
import springboot.repository.MemberRepositroy;

import java.util.List;
import java.util.Optional;

@Transactional
public class MemberService {
    private final MemberRepositroy memberRepositroy;

    public MemberService(MemberRepositroy memberRepositroy) {
        this.memberRepositroy = memberRepositroy;
    }

    public Long join(Member member) {
        validateDuplicateMember(member);
        memberRepositroy.save(member);
        return member.getId();
    }

    private void validateDuplicateMember(Member member) {
        memberRepositroy.findByName(member.getName())
                .ifPresent(m -> {
                    throw new IllegalStateException("이미 존재하는 회원입니다");
                });
    }

    public List<Member> findMembers() {
        return memberRepositroy.findAll();
    }

    public Optional<Member> findOne(Long memberID) {
        return memberRepositroy.findByID(memberID);
    }

    public List<Member> findLike(String name) {
        return memberRepositroy.findByLike(name);
    }

    public int delete(Long id) {
        if(memberRepositroy.findByID(id).isEmpty())
            return -1; // 해당 id의 회원이 존재하지 않음
        else
            return memberRepositroy.deleteByID(id);
    }

    public int edit(Member member) {
        if(memberRepositroy.findByID(member.getId()).isEmpty())
            return -1;
        else
            return memberRepositroy.editMember(member);
    }
}
