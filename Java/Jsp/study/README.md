# JSP 공부


`web.xml`에 url 경로 추가
```xml
<servlet>
        <servlet-name>servletEx</servlet-name>
        <servlet-class>dao.testservlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>servletEx</servlet-name>
        <url-pattern>/xmltest</url-pattern>
    </servlet-mapping>
```

어노테이션 `@WebServlet`으로 url 경로 추가
```java
import javax.servlet.annotation.WebServlet;
@WebServlet("/test")
```

init -> service(doGet) -> destroy 단계를 통해 생명주기가 돌아간다

form에서 get, pos 방식으로 데이터 받을때 이런식으로 받을 수 있음
```java
String id = req.getParameter("id");
String pw = req.getParameter("pw");
String[] items = req.getParameterValues("items");
```

폼에서 날라온 데이터 id 보기
```java
Enumeration<String> names = req.getParameterNames();
System.out.println(names);
while(names.hasMoreElements()) {
    System.out.println(names.nextElement());
}
```

스크립트 태그
```java
<%!
    int num 10;
    String str = "jsp";
    ArrayList<String> list = new ArrayList<String>();
    
    public void func() {
        System.out.println(" print Something() ");
    }
%>  // java의 멤버 변수 또는 메서드 선언

<%=-- 주석 내용 -- %>  // 주석 작성

<%  // 스크립트릿 태그
    if(num > 0) {
%>
    <p> num > 0 </p> // html 코드 중간에 작성 ok
<%
    } else{
%>
    <p> num<=0</p>
<%
    }
%>

num is <%= num %> // 값 출력

// page 기본 설정
<%@ page language="java" contentType="text/html; charset="EUC-KR" pageEncoding="EUC-KR"%>
<%@ page import="java.util.ArrayList"%>

// 파일 include
<%@ include file="header.jsp"%>

// 외부 라이브러리 태그 설정
<%@ taglib url="http://java.sun.com/jsp/jstl/core" refix="c"%>
```

리다이렉트
```java

res.sendRedirect("index.jsp")  // response 객체가 해당 페이지로 리다이렉트 시켜줌
```

param
```java
//// web.xml파일에서 ////

<servlet>
    <init-param>
        <param-name>adminId</param-name>
        <param-value>admin</param-value>
    </init-param>
    <init-param>
        <param-name>adminPw</param-name>
        <param-value>1234</param-value>
    </init-param>
</servlet>

//// jsp 파일에서 ////

<%!
    String adminId;
    String adminPw;
%>

<%
    adminId = config.getInitParameter("adminId");
    adminPw = config.getInitParameter("adminPw");
%>

<p><%= adminId %></p>
<p><%= adminPw %></p>
```

```java
// 공통으로 쓰는 param
//// web.xml ////

<context-param>
    <param-name>imgDir</param-name>
    <param-value>/static/img</param-value>
</context-param>

//// jsp 파일에서 ////

<%!
        String imgDir;
%>

<%
        imgDir = application.getInitParameter("imgDir");
%>

<p><%= imgDir %></p>
```

attribute
```java
application.setAttribute("help", "nope");
application.getAttribute("help");
```

출력
```java
<%
    out.print("<h1>hello world</h1>");
%>
```

에러페이지
```java
//// some.jsp ////
<%@ page errorPage="errorPage.jsp" %>

<%
    out.print(str.toString()); // 의도적으로 에러 발생 시키기
%>

//// errorPage.jsp ////
<%@ page isErrorPage="true" %>

<%
    response.setStatus(200);
    String msg = exception.getMessage();
%>

<h1> error message : <%= msg %> </h1>

```