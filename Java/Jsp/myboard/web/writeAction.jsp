<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 2021-04-24
  Time: 오후 5:27
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<% request.setCharacterEncoding("UTF-8"); %>
<%@ page import="bbs.BBSDAO" %>
<%@ page import="java.io.PrintWriter" %>
<jsp:useBean id="bbs" class="bbs.Bbs" scope="page"/>
<jsp:setProperty name="bbs" property="bbsTitle"/>
<jsp:setProperty name="bbs" property="bbsContent"/>

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
	if (userID == null) {
		script.println("alert('로그인이 필요합니다')");
		script.println("location.href = 'login.jsp'");
	} else {
	    if(bbs.getBbsTitle() == null || bbs.getBbsContent() == null) {
		    script.println("alert('입력이 안 된 사항이 있습니다')");
		    script.println("history.back()");
	    } else {
	        BBSDAO bbsDAO = new BBSDAO();
	        int result = bbsDAO.write(bbs.getBbsTitle(), userID, bbs.getBbsContent());
	        if (result == -1) {
	            script.println("alert('글쓰기에 실패했습니다')");
	            script.println("history.back()");
	        } else{
	          script.println("location.href = 'bbs.jsp'");
	        }
	    }
	}

	script.println("</script>");
%>
</body>
</html>