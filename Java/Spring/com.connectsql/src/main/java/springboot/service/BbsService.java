package springboot.service;

import springboot.domain.Bbs;
import springboot.repository.BbsRepository;

import java.util.List;

public class BbsService {

    private final BbsRepository bbsRepository;
    public BbsService(BbsRepository bbsRepository) {
        this.bbsRepository = bbsRepository;
    }

    public int write(Bbs bbs) {
        return bbsRepository.save(bbs);
    }

    public List<Bbs> bbsAll() {
        return bbsRepository.findAll();
    }

    public List<Bbs> bbsPagination(int page, int require) {
        return bbsRepository.findAvailable(page, require);
    }

    public Bbs bbsOne(int bbsID) {
        return bbsRepository.findOne(bbsID);
    }

    public int bbsEdit(Bbs bbs) {
        return bbsRepository.edit(bbs);
    }

    public int bbsDelete(int bbsID) {
        return bbsRepository.delete(bbsID);
    }

    public void bbsViewIncrease(int bbsID) {
        bbsRepository.viewIncrease(bbsID);
    }
}
