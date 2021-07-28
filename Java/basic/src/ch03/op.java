package ch03;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;

public class op {
    public static void main(String[] args) {
        int i = 10;
        System.out.println(i++);
        System.out.println(++i);

        // + - * / % << >> <= >= < > == != & ^ | ~ && || ! ?: =

        int a, b, c = 10;
        a = b = c; // 작동원리는? 평가

        System.out.println(a + " " + b + " " + c);

        a += 10; // a = a + 10
        a -= 10;
        a /= 10;
        a %= 10;
        a >>= 2;
        a <<= 2;

        a = a < 0 ? -a:a; // 삼항연산자
    }
}
