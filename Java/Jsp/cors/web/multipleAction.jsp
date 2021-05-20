<%@page contentType="text/html;charset=utf-8" %>
<%@page import="java.util.*" %>
<%@page import="org.apache.commons.fileupload.FileItem" %>
<%@ page import="org.apache.commons.fileupload.servlet.ServletFileUpload" %>
<%@ page import="org.apache.commons.fileupload.disk.DiskFileItemFactory" %>
<%@ page import="java.io.File" %>
<%@ page import="org.apache.commons.fileupload.FileUploadException" %>

<%
	request.setCharacterEncoding("utf-8");
	String realPath = "";
	String savePath = "fileSave";
	String type = "utf-8";
	int maxSize = 10*1024*1024; // 10mb
	ServletContext context = request.getServletContext();
	realPath = context.getRealPath(savePath);
	ArrayList saveFiles = new ArrayList();
	ArrayList origFiles = new ArrayList();


		try {
			DiskFileItemFactory diskFileItemFactory = new DiskFileItemFactory();
			diskFileItemFactory.setRepository(new File(realPath));
			diskFileItemFactory.setSizeThreshold(maxSize);
			diskFileItemFactory.setDefaultCharset("utf-8");
			ServletFileUpload fileUpload = new ServletFileUpload(diskFileItemFactory);


			List<FileItem> items = fileUpload.parseRequest(request);
			for (FileItem item : items) {
				if (item.isFormField()) {
					out.print(String.format("[파일형식이 아닌 파라미터] 파라미터명: %s, 파일 명: %s, 파일크기: %s bytes <br>", item.getFieldName(), item.getString(), item.getSize()));
				} else {
					out.print(String.format("[파일형식 파라미터] 파라미터명: %s, 파일 명: %s, 파일 크기: %s bytes <br>", item.getFieldName(), item.getName(), item.getSize()));
					if (item.getSize() > 0) {
						String separator = File.separator;
						int index = item.getName().lastIndexOf(separator);
						String fileName = item.getName().substring(index + 1);
						File uploadFile = new File(realPath + separator + fileName);
						item.write(uploadFile);
					}
				}

			}
		} catch (FileUploadException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}



%>