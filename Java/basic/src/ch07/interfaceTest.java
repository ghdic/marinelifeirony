package ch07;

class SonaTa implements Car {
    private int speed = 0;

    @Override
    public void printCarName() {
        System.out.println("Sonata");
    }

    @Override
    public void accelerating() {
        speed += 10;
    }

    @Override
    public void breaking() {
        speed -= 10;
    }

    @Override
    public void printCurSpeed() {
        System.out.println("현재 속도 : " + speed);
    }
}

class BMW implements Car {
    private int speed = 0;

    @Override
    public void printCarName() {
        System.out.println("BMW");
    }

    @Override
    public void accelerating() {
        speed += 20;
    }

    @Override
    public void breaking() {
        speed -= 20;
    }

    @Override
    public void printCurSpeed() {
        System.out.println("현재 속도 : " + speed);
    }

    public void somethingNew() { // 이렇게 해도 인터페이스론 접근 x
        System.out.println("some function");
    }
}

public class interfaceTest {
    public static void main(String[] args) {
        Car car = new SonaTa();
        car.accelerating();
        car.accelerating();
        car.printCarName();
        car.printCurSpeed();

        // 구현해야 되는 기능은 다 똑같으나 세부내역이 다를대 interface씀
        // 예를 들어 카카오뱅크, KB, IBK 등등에서 결제 할 수 있게 interface기반으로 구현해야함
        // 자동차 같은 경우는 상속이 더 유리
    }
}
