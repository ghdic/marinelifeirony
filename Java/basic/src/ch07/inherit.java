package ch07;

class Person {
    int age;
    String name;

    Person(int age, String name) {
        this.age = age;
        this.name = name;
    }

    @Override
    public String toString() {
        return "Person{" +
                "age=" + age +
                ", name=" + name +
                '}';
    }
}

class Student extends Person{
    String schoolName;
    int studentId;

    Student(int age, String name, String schoolName, int studentId) {
        super(age, name);
        this.schoolName = schoolName;
        this.studentId = studentId;
    }

    @Override
    public String toString() { // 오버라이딩
        return "Student{" +
                "age=" + age +
                ", name='" + name + '\'' +
                ", schoolName='" + schoolName + '\'' +
                ", studentId=" + studentId +
                '}';
    }
}


public class inherit {
    public static void main(String[] args) {
        Person person = new Person(20, "PersonA");
        System.out.println(person);
        Student student = new Student(20, "StudentA", "Hoseo", 20161607);
        System.out.println(student);

        // 상속을 활용하여 총, 칼, 수류탄 만들어보기
    }
}
