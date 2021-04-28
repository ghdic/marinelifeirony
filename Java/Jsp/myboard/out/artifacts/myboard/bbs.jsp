<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 2021-04-24
  Time: 오후 5:27
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.io.PrintWriter" %>
<%@ page import="bbs.BBSDAO" %>
<%@ page import="bbs.Bbs" %>
<%@ page import="java.util.ArrayList" %>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport"
	      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="css/bootstrap.css">
	<title>메인 페이지</title>
	<style>
		a, a:hover {
			color: #000000;
			text-decoration: none;
		}
	</style>
</head>
<body>
<%
	String userID = null;
	if (session.getAttribute("userID") != null) {
		userID = (String) session.getAttribute("userID");
	}
	int pageNumber = 1;
	if (request.getParameter("pageNumber") != null) {
	    pageNumber = Integer.parseInt(request.getParameter("pageNumber"));
	}
%>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<a class="navbar-brand" href="index.jsp">게시판 구축</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarNavDropdown">
		<ul class="navbar-nav">
			<li class="nav-item active">
				<a class="nav-link" href="index.jsp">메인 <span class="sr-only">(current)</span></a>
			</li>
			<li class="nav-item">
				<a class="nav-link active" href="bbs.jsp">게시판</a>
			</li>

			<%
				if(userID == null) {
			%>
			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					접속 하기
				</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
					<a class="dropdown-item" href="login.jsp">로그인</a>
					<a class="dropdown-item" href="register.jsp">회원가입</a>
				</div>
			</li>
			<%
			} else {
			%>
			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					회원관리
				</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
					<a class="dropdown-item" href="logoutAction.jsp">로그아웃</a>
				</div>
			</li>
			<%
				}
			%>
		</ul>
	</div>
</nav>

<div class="container">
	<div class="row">
		<table class="table table-striped" style="text-align: center; border: 1px solid #dddddd">
			<thead>
				<tr>
					<th style="background-color: #eeeeee; text-align: center;">번호</th>
					<th style="background-color: #eeeeee; text-align: center;">제목</th>
					<th style="background-color: #eeeeee; text-align: center;">작성자</th>
					<th style="background-color: #eeeeee; text-align: center;">작성일</th>
				</tr>
			</thead>
			<tbody>
			<%
				BBSDAO bbsDAO = new BBSDAO();
				ArrayList<Bbs> list = bbsDAO.getList(pageNumber);
				for(int i = 0; i < list.size(); i++) {
			%>
			<tr>
				<td><%= list.get(i).getBbsID() %></td>
				<td><a href="view.jsp?bbsID=<%= list.get(i).getBbsID() %>"><%= list.get(i).getBbsTitle() %></a></td>
				<td><%= list.get(i).getUserID() %></td>
				<td><%= list.get(i).getBbsDate().substring(0, 11) + list.get(i).getBbsDate().substring(11, 13) + "시" + list.get(i).getBbsDate().substring(14, 16) + "분"%></td>
			</tr>
			<%
				}
			%>
			</tbody>
		</table>
		<%
			if(pageNumber != 1) {
		%>
			<a href="bbs.jsp?pageNumber=<%= pageNumber - 1 %>" class="btn btn-success btn-arrow-left">이전</a>
		<%
			}
			if(bbsDAO.nextPage(pageNumber + 1)) {
		%>
			<a href="bbs.jsp?pageNumber=<%= pageNumber + 1 %>" class="btn btn-success btn-arrow-right">다음</a>
		<%
			}
		%>
		<a href="write.jsp" class="btn btn-primary pull-right">글쓰기</a>
	</div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
<script src="js/bootstrap.js"></script>
</body>
</html>