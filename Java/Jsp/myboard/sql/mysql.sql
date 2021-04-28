
CREATE database bbs;
use bbs;
/* user 테이블 생성 */
create table user (
    userID varchar (20),
    userPW varchar (20),
    userName varchar (20),
    userGender varchar (20),
    userEmail varchar (50),
    primary key (userID)
);

insert into user values('gildong', '1234', '홍길동', '남자', 'gildong@gildong.com');

use bbs;
create table bbs
(
    bbsID        int,
    bbsTitle     varchar(50),
    userID       varchar(20),
    bbsDate      datetime,
    bbsContent   varchar(2048),
    bbsAvailable int,
    primary key (bbsID)
);