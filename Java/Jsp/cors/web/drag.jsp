<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
	request.setCharacterEncoding("utf-8");
%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>aksFileUpload Draggable File Upload Component Example</title>
	<link type="text/css" rel="stylesheet" href="dist/aksFileUpload.min.css">
	<link href="https://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css">
	<style>
        body,
        html {
            margin: 0;
            padding: 0;
        }
        html {
            font-size: 1em;
        }
        body {
            background: aliceblue;
            color: #4c4e53;
            line-height: 1.5;
            font-weight: 400;
            font-size: 0.875em;
            font-family: Gilroy-Medium;
        }
        aks-file-upload {
            width: 310px;
            display: block;
            margin: 0 auto;
            margin-top: 4rem;
        }
        #uploadfile{
            width: 80%;
            margin: 0 auto;
            color: #002c7b;
            line-height:1.5;
            margin-top: 2rem;
            margin-bottom: 2rem;
        }
        h1, .lead { text-align: center; }
        h1 { margin: 150px auto 30px auto; }
	</style>
</head>
<body>
<h1>aksFileUpload Draggable File Upload Component Example</h1>
<p class="lead">A jQuery plugin to help create a nice-looking, drag-and-drop file upload zone that provides an easy to select, preview, and upload files to your server.</p>
<form method="post" action="multipleAction.jsp" enctype="multipart/form-data">
	<aks-file-upload></aks-file-upload>
	<p id="uploadfile" type="json"></p>
	<input type="submit" value="업로드">
</form>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" integrity="sha512-bnIvzh6FU75ZKxp0GXLH9bewza/OIw6dLVh9ICg0gogclmYGguQJWl8U30WpbsGTqbIiAwxTsbe76DErLq5EDQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src='https://unpkg.com/aksfileupload@1.0.0/dist/aksFileUpload.min.js'></script>
<script>
    $(function () {
        $("aks-file-upload").aksFileUpload({
            fileUpload: "#uploadfile",
            dragDrop: true,
            maxSize: "10 MB",
            multiple: true,
	        label: "드래그 앤 드랍으로 파일은 업로드 해주세요!",
            enctype:"multipart/form-data"
        });
    });
</script>
</body>
</html>
