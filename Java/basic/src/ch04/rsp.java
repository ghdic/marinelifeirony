package ch04;

import java.util.Random;
import java.util.Scanner;

public class rsp {
    public static void main(String[] args) {
        System.out.print("가위(0),바위(1), 보(2) 중 하나를 입력하세요.>");

        Scanner scanner = new Scanner(System.in);
        int input = scanner.nextInt();

        Random random = new Random();
        int com = random.nextInt(3); // 0 ~ 2

        System.out.println("당신은 "+ input +"입니다.");
        System.out.println("컴은  "+ com +"입니다.");

        switch(input-com) {
            case 2: case -1:
                System.out.println("당신은 졌습니다");
                break;
            case 1: case -2:
                System.out.println("당신은 이겼습니다");
                break;
            case 0:
                System.out.println("당신은 비겼습니다");
        }

        if(input == com) {
            System.out.println("당신은 비겼습니다");
        } else if((input + 1) % 3 == com) {
            System.out.println("당신은 졌습니다");
        } else {
            System.out.println("당신은 이겼습니다");
        }
    }
}
