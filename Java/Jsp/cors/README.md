MultiRequest (javax.servlet.http.HttpServletRequst request,
        java.lang.String saveDirectory,
        int maxPostSize,
        java.lang.String encoding,
        FileRenamePolicy policy)

* Enumteration getParameterNames() : 전송된 파라미터들의 이름을 Enumeration 타입으로 리턴
* String getParameter(String name) : 해당하는 이름의 파라미터 값을 리턴
* String getFilesystemName(String name) : 실제 파일이 업로드된 위치
* String getOriginalFileName(String name) : 사용자가 폼에서 직접 지정한 파일명 리턴
* String getContentType(String name) : 업로드 된 파일의 타입
* File getFile(name) :업로드된 파일 객체를 얻어낼 때 사용