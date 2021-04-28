<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 2021-04-24
  Time: 오후 5:27
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="user.UserDAO" %>
<%@ page import="java.io.PrintWriter" %>
<jsp:useBean id="user" class="user.User" scope="page" />
<jsp:setProperty name="user" property="userID" />
<jsp:setProperty name="user" property="userPW" />
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport"
	      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Login</title>
</head>
<body>
	<%
		PrintWriter script = response.getWriter();
		script.println("<script>");
		String userID = null;
		if(session.getAttribute("userID") != null) {
		    userID = (String) session.getAttribute("userID");
		}
		if (userID != null) {
		    script.println("alert('이미 로그인이 되었습니다')");
		    script.println("location.href = 'index.jsp'");
		}
		UserDAO userDAO = new UserDAO();
		int result = userDAO.login(user.getUserID(), user.getUserPW());


		if (result == 1) {
		    session.setAttribute("userID", user.getUserID());
		    script.println("location.href = 'index.jsp'");
		} else if (result == 0) {
			script.println("alert('비밀번호가 틀립니다')");
			script.println("history.back()");
		} else if (result == -1) {
			script.println("alert('존재하지 않는 아이디입니다.')");
			script.println("history.back()");
		} else if (result == -2) {
			script.println("alert('데이터 베이스 오류가 발생했습니다.')");
			script.println("history.back()");
		}
		script.println("</script>");
	%>
</body>
</html>