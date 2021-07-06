package springboot;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springboot.repository.BbsRepository;
import springboot.repository.JdbcBbsRepository;
import springboot.repository.JdbcMemberRepository;
import springboot.repository.MemberRepositroy;
import springboot.service.BbsService;
import springboot.service.MemberService;

import javax.sql.DataSource;

@Configuration
public class SpringConfig {

    private DataSource dataSource;

    public SpringConfig(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Bean
    public MemberService memberService() {
        return new MemberService(memberRepositroy());
    }

    @Bean
    public MemberRepositroy memberRepositroy() {
        return new JdbcMemberRepository(dataSource);
    }

    @Bean
    public BbsService bbsService() {
        return new BbsService(bbsRepository());
    }

    @Bean
    public BbsRepository bbsRepository() {
        return new JdbcBbsRepository(dataSource);
    }
}
