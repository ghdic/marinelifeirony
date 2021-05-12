<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
	request.setCharacterEncoding("utf-8");
	int filecounter = 0;
	if(request.getParameter("addcnt")!= null) {
	    filecounter = Integer.parseInt(request.getParameter("addcnt"));
	}
%>
<html>
<head>
	<title>여러개 파일을 업로드</title>
	<script>
		function addFile(formName) {
		    console.log(formName.value)
		    if(formName.value === "") {
		        alert("입력할 파일 갯수를 입력해주세요.")
			    formName.addcnt.focus();
		        return;
		    } else {}
		    let filecounter = parseInt(formName.value)
			let uploadfiles = document.querySelector("#uploadfiles")
			while(uploadfiles.firstChild) { // 자식을 다 지움
		        uploadfiles.removeChild(uploadfiles.firstChild)
			}
			for (let i = 0; i < filecounter; i++) {
			    let sf = document.createElement("input")
				let br = document.createElement("br")
				sf.type = "file"
				sf.size = "50"
				sf.name = "selectFile" + i.toString()
				uploadfiles.appendChild(sf)
				uploadfiles.appendChild(br)
			}
                <%--<input type="file" size="50" name="selectFile<%=i%>"><br>--%>
		}

	</script>
</head>
<body>
	<h2>여러개의 파일을 업로드하는 예제</h2>

	<form method="post" action="fileUploadPro.jsp" enctype="multipart/form-data">
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
				<td>업로드할 파일 수</td>
				<td><input type="text" name="addCnt"></td>
				<td><input type="button" value="확인" onclick="addFile(this.form.addCnt)"></td>
			</tr>
			<tr id="uploadfiles">

			</tr>
			<tr>
				<td><input type="submit" value="업로드"></td>
			</tr>
		</table>
	</form>
</body>
</html>
