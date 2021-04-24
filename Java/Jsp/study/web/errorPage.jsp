<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 2021-04-16
  Time: 오후 2:51
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isErrorPage="true" %>
<html>
<head>
	<title>Title</title>
</head>
<body>
	<h2>처리 중 문제 발생!!!</h2>

	<table>
		<tr bgcolor="pink">
			<td>관리자에게 문의해주세요<br>
				빠른 시일내에 복구하겠습니다.</td>
		</tr>

		<tr>
			<td>
				<%
					response.setStatus(200);
					String msg = exception.getMessage();
				%>

				<h1> error message : <%= msg %> </h1>
			</td>
		</tr>
	</table>
</body>
</html>
