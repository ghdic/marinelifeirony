package ch04;

public class ifelse {
    public static void main(String[] args) {
        int i = 10;

        if(i > 100) { // || i < 50
            System.out.println("i > 100");
        } else if(i > 50) {
            System.out.println("i > 50");
        } else if(i > 5) {
            System.out.println("i > 5");
        } else {
            System.out.println("i <= 5");
        }
    }
}
