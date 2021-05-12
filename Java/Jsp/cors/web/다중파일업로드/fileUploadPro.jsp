<%@page contentType="text/html;charset=utf-8" %>
<%@page import="com.oreilly.servlet.MultipartRequest" %>
<%@page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy" %>
<%@page import="java.util.*" %>
<%@page import="java.net.*" %>


<%
	String realPath = "";
	String savePath = "fileSave";
	String type = "utf-8";
	int maxSize = 10*1024*1024; // 10mb

	ServletContext context = request.getServletContext();
	realPath = context.getRealPath(savePath);
	ArrayList saveFiles = new ArrayList();
	ArrayList origFiles = new ArrayList();

	String user = "";
	String title = "";
	String content = "";

	try {
	    MultipartRequest multi = new MultipartRequest(request, realPath, maxSize, type, new DefaultFileRenamePolicy());

	    user = multi.getParameter("user");
	    title = multi.getParameter("title");
	    content = multi.getParameter("content");

	    Enumeration files = multi.getFileNames();
	    while(files.hasMoreElements()) {
			String name = (String)files.nextElement();
			saveFiles.add(multi.getFilesystemName(name));
			origFiles.add(multi.getOriginalFileName(name));
	    }
	}catch (Exception e){
		e.printStackTrace();
	}
%>

<!doctype html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport"
	      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>여러 파일을 업로드하는 예제</title>
</head>
<body>
	<table border="1px">
		<tr>
			<td>작성자</td>
			<td><%= user %></td>
		</tr>
		<tr>
			<td>제목</td>
			<td><%=title%></td>
		</tr>
		<tr>
			<td>콘텐츠</td>
			<td><%=content%></td>
		</tr>
		<tr>업르된 파일 리스트</tr>
		<% for(int i =0; i < saveFiles.size(); i++) { %>
		<tr>
			<td>
				<%
					String y = (String) saveFiles.get(i);
					String x = request.getContextPath() + "/" + savePath + "/" + URLEncoder.encode(y, "utf-8");
				%>
				<%= i+1 %>.<a href="<%=x %>"><%=origFiles.get(i) %></a>
			</td>
		</tr>
		<% } %>
	</table>
</body>
</html>
