<%@page import="java.io.File"%>
<%@page import="javax.imageio.ImageIO"%>
<%@page import="java.awt.Graphics2D"%>
<%@page import="java.awt.image.BufferedImage"%>
<%@page import="javax.media.jai.JAI"%>
<%@page import="javax.media.jai.RenderedOp"%>
<%@page import="java.awt.image.renderable.ParameterBlock"%>
<%@page import="java.util.Enumeration"%>
<%@page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy"%>
<%@page import="com.oreilly.servlet.MultipartRequest"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%
	request.setCharacterEncoding("utf-8");
	ServletContext context = request.getServletContext(); // 업로드할 경로
	String uploadPath = context.getRealPath("upload");
	int size = 10 * 1024 * 1024; // 업로드 사이즈 제한 10M 이하

	String fileName = "";

	try{
		// MultipartRequest 클래스를 생성하여 reqest을 통해 Form에서 업로드한 파일을 uploadPath 변수에 지정한 경로에 저장합니다.
		MultipartRequest multi = new MultipartRequest(request, uploadPath, size, "utf-8", new DefaultFileRenamePolicy());

		// Enumeration 타입을 통해 저장된 파일명을 files 변수에 담습니다.
		Enumeration files = multi.getFileNames();

		// 첫번째 파일명을 가져옵니다.
		String file = (String)files.nextElement();
		// getFilesystemName("파일 값") 통해 파일명을 통해 실제 업로드된 파일명을 가져옵니다.
		fileName = multi.getFilesystemName(file);

	}catch(Exception e){
		e.printStackTrace();
	}

	// 이 클래스에 변환할 이미지를 담습니다. ( 이미지는 ParameterBlock 통해서만 담을 수 있습니다. )
	ParameterBlock pd = new ParameterBlock();
	pd.add(uploadPath + "\\" + fileName );
	RenderedOp rOp = JAI.create("fileload", pd);

	BufferedImage bi = rOp.getAsBufferedImage(); // 불러올 이미지를 BufferedImage에 담습니다.
	// thumb라는 이미지 버퍼를 생성합니다. 이미지 버퍼 사이즈는 100 * 100 으로 설정합니다.
	BufferedImage thumb = new BufferedImage(100, 100, BufferedImage.TYPE_INT_RGB);

	// thumb라는 이미지 버퍼에 원본 이미지를 정해진 버퍼 사이즈인 100 * 100 사이즈에 담아 그립니다.
	Graphics2D g = thumb.createGraphics();
	g.drawImage(bi, 0, 0, 100, 100, null);

	// 출력할 위치와 파일 이름을 설정한 후 썸네일 이미지를 생성합니다. ( 확장자는 jpg입니다. )
	File file = new File(uploadPath + "/sm_"+fileName);
	ImageIO.write(thumb, "jpg", file);


%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>FileUploadAction</title>
</head>
<body>
원본 이미지<br />
<img src="upload/<%=fileName %>" /><br /><br />
썸네일 이미지<br />
<img src="upload/sm_<%=fileName %>" /><br /><br />

</body>
</html>