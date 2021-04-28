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
<%@ page import="bbs.Bbs" %>
<%@ page import="java.io.PrintWriter" %>

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
	}
	int bbsID = 0;
	if (request.getParameter("bbsID") != null) {
		bbsID = Integer.parseInt(request.getParameter("bbsID"));
	}
	if (bbsID == 0) {
		script.println("alert('유효하지 않은 글입니다.')");
		script.println("location.href = 'bbs.jsp' ");
	}
	Bbs bbs = new BBSDAO().getBbs(bbsID);
	if (!userID.equals(bbs.getUserID())) {
		script.println("alert('권한이 없습니다')");
		script.println("location.href = 'bbs.jsp'");
	} else {
	    if (request.getParameter("bbsTitle") == null || request.getParameter("bbsContent") == null
	    || request.getParameter("bbsTitle").equals("") || request.getParameter("bbsContent").equals("")) {
	        script.println("alert('입력 안 된 사항이 있습니다')");
	        script.println("history.back()");
	    } else {
	        BBSDAO bbsDAO = new BBSDAO();
	        int result = bbsDAO.update(bbsID, request.getParameter("bbsTitle"), request.getParameter("bbsContent"));
	        if (result  == -1) {
	            script.println("alert('글쓰기에 실패하였습니다')");
	            script.println("history.back()");
	        } else {
	            script.println(String.format("location.href = 'view.jsp?bbsID=%d'", bbsID));
			}
	    }
	}

	script.println("</script>");
%>
</body>
</html>