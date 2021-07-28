package ch06;

class Person {
    private String name;
    private int age;
    private int score = 0;
    private static int totalScore = 0;

    // 생성자
    Person(String name, int age, int score) {
        this.name = name;
        this.age = age;
        this.score = score;

        totalScore += score;
    }

    Person(String name, int age) { // 오버로딩
        this.name = name;
        this.age = age;
    }

    Person(String name) {
        this.name = name;
        this.age = 0;
    }

    Person() {
        this.name = "";
        this.age = 0;
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", score=" + score +
                '}';
    }

    public int getTotalScore() {
        return totalScore;
    }

    public void printSomething(String something) {
        System.out.println("hello " + something);
    }

    public void printSomething() {
        printSomething("default");
    }
}


public class myclass {
    public static void main(String[] args) {
        Person person1 = new Person();
        Person person2 = new Person("진호", 20);
        System.out.println(person1);
        System.out.println(person2);

        Person person3 = new Person("personA", 20, 100);
        Person person4 = new Person("personB", 20, 50);
        Person person5 = new Person("personC", 20, 60);
        System.out.println(person1.getTotalScore());

    }
}
