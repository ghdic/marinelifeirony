create table member
(
    id bigint AUTO_INCREMENT,
    name varchar(255),
    primary key (id)
);

select * from member;

insert into member(name) values('spring')