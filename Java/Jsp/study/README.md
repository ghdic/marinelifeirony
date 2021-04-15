# JSP 공부


`web.xml`에 url 경로 추가
```
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
```
import javax.servlet.annotation.WebServlet;
@WebServlet("/test")
```

init -> service(doGet) -> destroy 단계를 통해 생명주기가 돌아간다

form 에서 get, pos 방식으로 데이터 받을때 이런식으로 받을 수 있음
```
String id = req.getParameter("id");
String pw = req.getParameter("pw");
String[] items = req.getParameterValues("items");
```

폼에서 날라온 데이터 id 보기
```
Enumeration<String> names = req.getParameterNames();
System.out.println(names);
while(names.hasMoreElements()) {
    System.out.println(names.nextElement());
}
```

스크립트 태그
```
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
<%@ taglib url="https://java.sun.com/jsp/jstl/core" refix="c"%>
```

리다이렉트
```

res.sendRedirect("index.jsp")  // response 객체가 해당 페이지로 리다이렉트 시켜줌
```

param
```
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

```
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
```
application.setAttribute("help", "nope");
application.getAttribute("help");
```

출력
```
<%
    out.print("<h1>hello world</h1>");
%>
```

에러페이지
```
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


Cookie
```

Cookie[] cookies = request.getCookies();
Cookie cookie = null;

for (Cookie c : cookies){
    System.out.println("c.getName() : "+c.getName()+", c.getValue() : "+c.getValue());

    if(c.getName().equals("userId")){
        cookie=c;
        break;
    }
}

if (cookie == null) {
    System.out.println("cookie is null");
    cookie = new Cookie("userId", uid);
}

response.addCookie(cookie);
cookie.setMaxAge(60*60);

response.sendRedirect("loginOk.jsp");
```

Session
```

//// login.jsp ////
<%
    if(session.getAttribute("uid") != null)
        response.sendRedirect("loginOk.jsp");
%>

<form action="login_confirm" method="post">
    ID: <input type="text" name="uid"><br>
    PW: <input type="password" name="upw"><br>
    <input type="submit" value="login">
</form>

//// login_confirm.java ////
HttpSession session = request.getSession();
session.setAttribute("uid", id);
response.sendRedirect("loginOk.jsp");


//// loginOk.jsp ////
<%
    session = request.getSession();
    out.print(session.getAttribute("uid") + <br>);
%>


//// logout.java ////
HttpSession session = request.getSession();
session.invalidate();

response.redirect("index.jsp")
```


한글처리
```

//// servlet ////
request.setCharacterEncoding("UTF-8"); // post 방식
response.setContentType("text/html; charset=UTF-8");


//// jsp ////
<% request.setCharacterEncoding("UTF-8"); %>
<% page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<Connector URIEncoding="UTF-8">


//// .xml ////
// get 방식
<Connector connectionTimeout="20000" port="8080" protocol="HTTP/1.1" redirectPort="8443" URIEncoding="UTF-8"/>


//// 필터 걸기 ////
// TempFilter.java
public class TempFilter implement Filter {
    
    @Override
    public void init(FilterConfig arg0) throws ServletException {
        System.out.println(" -- filter init() -- ");
    }

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) 
        throws IOException, ServletException {
       System.out.println(" -- filter doFilter() -- ");
       
       req.setCharacterEncoding("UTF-8");
    }
    
    @Override
    public void destroy() {
        System.out.println(" -- filter destroy() -- ");
    }
}


// web.xml
<filter>
    <filter-name>tempFilter</filter-name>
    <filter-class>filter.TempFilter</filter-class>
</filter>
<filter-mapping>
    <filter-name>tempFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```


DAO : Data Access Object

DTO : Data Transfer Object

```

//// BookDTO.java ////
package dto;

public class BookDTO {
    int bookId;
    String bookName;
    String bookLoc;
    
    public BookDTO(int bookId, String bookName,String bookLoc) {
        this.bookId = bookId;
        this.bookName = bookName;
        this.bookLoc = bookLoc;
    }
    
    public int getBookId() {
        return bookId;
    }
    
    public String getBookName() {
        return bookName;
    }
    
    public String getBookLoc() {
        return bookLoc;
    }
}


//// BookDAO.java ////
package dao;
import dto.BookDTO;

public class BookDAO {
    String driver = "driver path";
    String url = "jdbc:db url";
    String id = "admin";
    String pw = "1234";
    
    public BookDAO() {
        try {
            Class.forName(driver);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    
    public ArrayList<BookDTO> select() {
        ArrayList<BookDTO> list = new ArrayList<BookDTO>();
        
        Connection con = null;
        PreparedStatement pstmt = null;
        ResultSet res = null;
        
        try {
            con = DriverManager.getConnection(url, id, pw);
            String sql = "SELECT * FROM book";
            pstmt = con.prepareStatement(sql);
            res = pstmt.executeQuery();
            
            while(res.next()) {
                int bookId = res.getInt("book_id");
                String bookName = res.getString("book_name");
                String bookLoc = res.getString("book_loc");
                
                BookDTO bookDTO = new BookDTO(bookID, bookName, bookLoc);
                list.add(bookDTO);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if(res != null) res.close();
                if(pstmt != null) pstmt.close();
                if(con != null) con.close();
            } catch (Exception e2) {
                e2.printStackTrace();
            }
        } 
        return list;
    }    
}




//// BookServlet.java ////

import dao.BookDAO;
import dto.BookDTO;

@WebServlet("book")
public class BookServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html; charset=UTF-8");
        PrintWriter out = response.getWriter();
        
        BookDAO bookDAO = new BookDAO();
        ArrayList<BookDTO> list = bookDAO.select();
        
        for (int i = 0; i < list.size(); i++) {
            BookDTO dto = list.get(i);
            int bookId dto.getBookId();
            String bookName = dto.getBookName();
            String bookLoc = dto.getBookLoc();
            
            out.print("bookId : " + bookId + ", ");
            out.print("bookName : " + bookName + ", ");
            out.print("bookLoc : " + bookLoc + "<br>");
        }
    }
    
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(request, response);
    }
}
```


Connection Pool
```
//// context.xml ////
<Context>
    <Resource
        name="jdbc/mysqles"
        type="javax.sql.DataSrouce"
        auth="Container"
        maxActive="30"
        maxIdle="3"
        maxWait="3000"
        username="admin"
        password="1234"
        testonBorrow="true"
        driverClassName="com.mysql.jdbc.Driver"
        url="jdbc:mysql://localhost:3306/DB명?autoReconnect=true"
    />
</Context>


// lookup으로 사용
Context context = new InitialContext();
Context envContext = (Context)context.lookup("java:comp/env"); 
DataSource dataSource = (DataSource)envContext.lookup("jdbc/mysqles");

con = dataSource.getConnection();
```