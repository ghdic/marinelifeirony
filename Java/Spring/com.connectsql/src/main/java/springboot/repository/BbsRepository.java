package springboot.repository;

import springboot.domain.Bbs;

import java.util.List;

public interface BbsRepository {
    int save(Bbs bbs);
    List<Bbs> findAll();
    List<Bbs> findAvailable(int page, int require);
    int delete(int bbsID);
    Bbs findOne(int bbsID);
    int edit(Bbs bbs);
    void viewIncrease(int bbsID);
    int recommendAdd(int bbsID, String userID);
    int recommendRemove(int bbsID, String userID);
    List<String> recommendList(int bbsID);
}
