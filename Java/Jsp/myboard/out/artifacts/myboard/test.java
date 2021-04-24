package mvjsp.chap20;

import java.io.IOException;

import java.io.PrintWriter;

import java.util.Date;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("hello")
public class test extends HttpServlet {

// NowServlet 클래스는 HttpServlet 클래스를 상속 받고 있으며, 따라서 NowServlet은 서블릿으로 동작할 수 있게 된다.



    @Override

    protected void doGet(HttpServletRequest request,

                         HttpServletResponse response) throws ServletException, IOException {

        response.setContentType("text/html; charset=euc-kr");



        PrintWriter out = response.getWriter();

        out.println("<html>");

        out.println("<head><title>현재시간</title></head>");

        out.println("<body>");

        out.println("현재 시간은");

        out.println(new Date());

        out.println("입니다.");

        out.println("</body></html>");

    }

}