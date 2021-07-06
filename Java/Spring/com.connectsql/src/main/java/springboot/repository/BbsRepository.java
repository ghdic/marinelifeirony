package springboot.repository;

import springboot.domain.Bbs;

import java.util.List;

public interface BbsRepository {
    int save(Bbs bbs);
    List<Bbs> findAll();
}
