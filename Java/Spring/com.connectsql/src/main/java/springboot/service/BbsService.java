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
}
