<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 2021-04-24
  Time: 오후 5:27
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.io.PrintWriter" %>
<%@ page import="bbs.Bbs" %>
<%@ page import="bbs.BBSDAO" %>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport"
	      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="css/bootstrap.css">
	<title>메인 페이지</title>
</head>
<body>
<%
	String userID = null;
	if (session.getAttribute("userID") != null) {
		userID = (String) session.getAttribute("userID");
	}
	int bbsID = 0;
	if (request.getParameter("bbsID") != null) {
	    bbsID = Integer.parseInt(request.getParameter("bbsID"));
	}
	if (bbsID == 0) {
	    PrintWriter script = response.getWriter();
	    script.println("<script>");
	    script.println("alert('유효하지 않은 글입니다')");
	    script.println("location.href = 'bbs.jsp'");
	    script.println("</script>");
	}
	Bbs bbs = new BBSDAO().getBbs(bbsID);
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
				<th colspan="3" style="background-color: #eeeeee; text-align: center;">게시판 글 보기</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td style="width: 20%;">글제목</td>
				<td colspan="2"><%= bbs.getBbsTitle() %></td>
			</tr>
			<tr>
				<td>작성자</td>
				<td colspan="2"><%= bbs.getUserID() %></td>
			</tr>
			<tr>
				<td>작성일자</td>
				<td colspan="2"><%= bbs.getBbsDate().substring(0, 11) + bbs.getBbsDate().substring(11, 13) + "시" + bbs.getBbsDate().substring(14, 16) + "분"%></td>
			</tr>
			<tr>
				<td>내용</td>
				<td colspan="2" style="min-height: 200px; text-align: left;"><%= bbs.getBbsContent().replaceAll(" ", "&nbsp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\n", "<br>") %></td>
			</tr>
			</tbody>
		</table>
		<a href="bbs.jsp" class="btn btn-primary">목록</a>
		<%
			if(userID != null && userID.equals(bbs.getUserID())) {
		%>
		<a href="update.jsp?bbsID=<%= bbsID %>" class="btn btn-primary">수정</a>
		<a onclick="return confirm('정말로 삭제하시겠습니까?')" href="deleteAction.jsp?bbsID=<%= bbsID %>" class="btn btn-primary">삭제</a>
		<%
			}
		%>
	</div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
<script src="js/bootstrap.js"></script>
</body>
</html>