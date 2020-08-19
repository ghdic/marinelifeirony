USE test;
CREATE TABLE student (
    student_id INT,
    name VARCHAR(20), NOT NULL -- 필수 입력
    major VARCHAR(20),
    PRIMARY KEY(student_id)
);

INSERT INTO student VALUES(1, "james", "student");
INSERT INTO student(student_id, name) VALUES(2, "jack"); -- major == null


UPDATE student
SET major = "CS"
WHERE major = "student";

SELECT student.name, student.major
FROM student
ORDER BY student_id DESC
LIMIT 2;

SELECT *
FROMT student
WHERE major IN ('Biology', 'Chemistry') AND student_id > 2;