<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 2021-04-24
  Time: 오후 5:27
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<% request.setCharacterEncoding("UTF-8"); %>
<%@ page import="user.UserDAO" %>
<%@ page import="java.io.PrintWriter" %>
<jsp:useBean id="user" class="user.User" scope="page"/>
<jsp:setProperty name="user" property="userID"/>
<jsp:setProperty name="user" property="userPW"/>
<jsp:setProperty name="user" property="userName"/>
<jsp:setProperty name="user" property="userGender"/>
<jsp:setProperty name="user" property="userEmail"/>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport"
	      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Register</title>
</head>
<body>
<%
	PrintWriter script = response.getWriter();
	script.println("<script>");
	String userID = null;
	if (session.getAttribute("userID") != null) {
		userID = (String) session.getAttribute("userID");
	}
	if (userID != null) {
		script.println("alert('이미 로그인이 되었습니다')");
		script.println("location.href = 'index.jsp'");
	}

	if (user.getUserID() == null || user.getUserPW() == null || user.getUserName() == null
			|| user.getUserGender() == null || user.getUserEmail() == null) {
		script.println("alert('입력이 안 된 사항이 있습니다')");
		script.println("history.back()");
	} else {
		UserDAO userDAO = new UserDAO();
		int result = userDAO.register(user);
		if (result == -1) {
			script.println("alert('이미 존재하는 아이디입니다')");
			script.println("history.back()");
		} else {
			session.setAttribute("userID", user.getUserID());
			script.println("location.href = 'index.jsp'");
		}
	}
	script.println("</script>");
%>
</body>
</html>