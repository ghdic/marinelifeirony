package ch01;


import java.util.Scanner;

public class io {
    public static void main(String[] args) {
        System.out.println("Hello World");

        Scanner scanner = new Scanner(System.in);

        System.out.println("숫자를 입력 >");
        int num = scanner.nextInt();

        System.out.println("입력받은 숫자 > " + num);

        System.out.println("문자열을 입력 > ");
        // scanner.nextLine(); // 버퍼를 비워줌.. 임시방편 flush가 스캐너에 따로 없음
        String str = scanner.nextLine();
        System.out.println("입력받은 문자열 > " + str); // 입력하지도 않았는데?
    }
}
