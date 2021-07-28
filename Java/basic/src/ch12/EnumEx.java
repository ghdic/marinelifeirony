package ch12;

public class EnumEx {
    public static void main(String[] args) {
        System.out.println(Level.EASY + " " + Level.NORMAL + " " + Level.HARD);
        System.out.println(Level.EASY.ordinal() + " " + Level.NORMAL.ordinal() + " " + Level.HARD.ordinal());
    }
}
