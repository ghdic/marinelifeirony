package ch04;

public class forwhile {

    public static void deep(int depth) {
        if(depth == 10) return;
        System.out.println(depth);
        deep(depth + 1);
        System.out.println(depth);
    }

    public static void main(String[] args) {
        for(int i = 0; i < 10; i++) { // 초기값; 조건식; 표현식
            System.out.println(i);
        }

        int i = 0;
        while(i < 10) {
            System.out.println(i);
            i++;
            // if(i == 5) break; // continue
        }

        deep(0); // 재귀까지~ 디버깅 ㄱㄱ
    }

}
