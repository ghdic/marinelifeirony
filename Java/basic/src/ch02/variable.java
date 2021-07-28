package ch02;

public class variable {
    public static void main(String[] args) {
        int i = 10;
        int ii = 0b11; // 2진수
        int iii = 0777; // 8진수
        int iiii = 0xFFF; // 16진수
        short s = 10;
        long l = 10L;
        float f = 12.41f;
        double d = 1232d;
        char c = 'a';
        byte bt = 127; // 이런식으로 형식에 따른 변수가 있음
        String a = new String("abc");
        boolean b = true; // false

        int ten = 10;
        byte bb = (byte)ten; // 강제형변환, 캐스팅이라고함

        System.out.printf("%d -> 0x%02X\n", ten, bb);

        System.out.printf("bt = %d\n", bt);
        bt = (byte) (bt + 1);
        System.out.printf("bt = %d\n", bt); // 오버 플로우


    }
}
