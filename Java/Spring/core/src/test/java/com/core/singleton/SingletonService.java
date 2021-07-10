package com.core.singleton;

public class SingletonService {

    private static final SingletonService instance = new SingletonService();

    public static SingletonService getInstance() {
        return instance;
    }

    private SingletonService() {
        // 생성자를 private으로 선언해 외부에서 new 키워드를 사용해 객체 생성을 못하게 막는다
    }
}
