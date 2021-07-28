package ch07;

import java.util.Scanner;

enum Property {
    WATER, FIRE, WIND, SOIL // 물 불 바람 흑
}

class Weapon {
    double speed;
    Property property;
    int power;

    Weapon(double speed, Property property, int power) {
        this.speed = speed;
        this.property = property;
        this.power = power;
    }

    void attack() throws InterruptedException {
        System.out.printf("%f의 공격속도로 %d의 %s 데미지를 주었습니다", speed, power, property);
        Thread.sleep((long) speed*1000);
    }
}

class Gun extends Weapon{
    Gun(){
        super(0.5, Property.FIRE, 20);
    }
}

class Knife extends Weapon {
    Knife() {
        super(1, Property.SOIL, 10);
    }
}

public class Game {
    public static void main(String[] args) throws InterruptedException {
        Weapon weapon = new Knife();
        Scanner scanner = new Scanner(System.in);
        while (true) {
            scanner.nextLine();
            weapon.attack();
            scanner = new Scanner(System.in);
        }
    }
}
