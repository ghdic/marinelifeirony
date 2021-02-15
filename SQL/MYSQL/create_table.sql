/* INT : 자연수
DECIMAL(소수 포함 총 실수 자리수:int, 소수점점 자리수:int) 고정된 자릿수인 소수(총 자리수 최대 65)
FLOAT(정밀도에 필요한 최소 비트 수:int) 기본 4bytes
DOUBLE(정밀도에 필요한 최소 비트 수:int) 기본 8bytes
VARCHAR(l)
BLOB
DATE
TIMESTAMP */

CREATE DATABASE test;
USE test;
CREATE TABLE student (
    student_id INT,
    name VARCHAR(20),
    major VARCHAR(20),
    PRIMARY KEY(student_id)
);

DESCRIBE student;

DROP TABLE student;

ALTER TABLE student ADD gpa DECIMAL(3,2);

ALTER TABLE student DROP COLUMN gpa;
DESCRIBE student;