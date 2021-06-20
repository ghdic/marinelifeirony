<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
	request.setCharacterEncoding("utf-8");
%>

<html>
<head>
	<title>여러개 파일을 업로드</title>
</head>
<body>
<h2>여러개의 파일을 업로드하는 예제</h2>

<form method="post" action="multipleAction.jsp" enctype="multipart/form-data">
	<table border="1px">
		<tr>
			<td>작성자</td>
			<td><input type="text" name="user"></td>
		</tr>
		<tr>
			<td>제목</td>
			<td><input type="text" name="title"></td>
		</tr>
		<tr>
			<td>내용</td>
			<td><input type="text" name="content"></td>
		</tr>
		<tr>
			<td>파일업로드</td>
			<td><input type="file" name="files" multiple></td>
		</tr>
		<tr>
			<td><input type="file" name="files"><input type="file" name="files"></td>
		</tr>
		<tr>
			<td><input type="submit" value="업로드"></td>
		</tr>
	</table>
</form>
</body>
</html>
