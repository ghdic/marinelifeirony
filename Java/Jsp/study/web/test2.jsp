<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 2021-04-16
  Time: 오후 1:55
  To change this template use File | Settings | File Templates.
--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="EUC-KR" errorPage="errorPage.jsp" %>

<html>
<head>
	<title>Title</title>
</head>
<body>

<%
	out.print("<h1>hello world!</h1>");
	int aa = 10;
%>
<c:out value="Hello World" /><br>
<h1><%= aa %></h1>

<%

	int n = 10;
	for(int i = 0; i < n; i++) {
%>
	<tr><td><%=i%></td></tr>
<%
	}
%>

<table>
	<tr>
		<th>Value</th>
		<th>Square</th>
	</tr>
	<c:forEach var="x" begin="0" end="10" step="2">
		<tr>
			<td><c:out value="${x}"/></td>
			<td><c:out value="${x * x}"/></td>
		</tr>
	</c:forEach>
</table>

<%-- 망할 주석 --%>
</body>
</html>
