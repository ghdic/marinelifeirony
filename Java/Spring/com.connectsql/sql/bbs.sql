create table bbs (
     bbsID int auto_increment primary key,
     userID varchar(20) not null,
     bbsDate datetime default now(),
     bbsTitle varchar(255),
     bbsContent varchar(1000),
     bbsView int default 0,
     bbsRecommend int default 0,
     bbsAvailable int default 1
)

select * from bbs where bbsID = ? // 특정 bbsID를 가진 테이블
select * from bbs where bbsAvailable = 1 order by bbsID desc limit 몇번째부터, 몇개 // (pageNumber - 1) * require, require
update bbs set bbsAvailable = 0 where bbsID = ? // 해당 게시판을 삭제처리한다
insert into bbs (userID, bbsTitle, bbsContent) values ("유저아이디", "제목", "컨텐츠");
