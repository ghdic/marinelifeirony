package ch11;

import java.util.ArrayList;
import java.util.Collections;

public class ArrayListEx {
    public static void main(String[] args) {
        ArrayList list = new ArrayList(10);
        for(int i = 0; i < 10; i++)
            list.add(-i);
        System.out.println(list.size());
        Collections.sort(list);
        list.set(5, 10);
        list.remove(4);
        list.forEach((e) -> {
            System.out.println(e);
        });
        System.out.println(list.contains(10));
    }
}
