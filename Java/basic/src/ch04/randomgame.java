package ch04;

import java.util.Random;
import java.util.Scanner;

public class randomgame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int result = new Random().nextInt(100) + 1;
        int input = -1;
        while (result != input) {
            System.out.println("업다운게임입니다. 1~100사이 숫자를 입력해주세요");
            input = scanner.nextInt();
            if(input > result) {
                System.out.println("down!");
            } else if(input < result) {
                System.out.println("up!");
            } else{
                System.out.println("Correct!!");
            }
        }
    }
}
