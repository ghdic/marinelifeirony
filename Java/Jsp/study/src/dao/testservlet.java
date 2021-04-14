package dao;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Enumeration;

@WebServlet("/test")
public class testservlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String id = req.getParameter("id");
        String pw = req.getParameter("pw");
        String[] items = req.getParameterValues("items");
        String residence = req.getParameter("select");

        System.out.println(id);
        System.out.println(pw);
        System.out.println(residence);

        Enumeration<String> names = req.getParameterNames();
        System.out.println(names);
        while(names.hasMoreElements()) {
            System.out.println(names.nextElement());
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("start post");
        doGet(req, resp);
    }

    @Override
    public void init() throws ServletException {
        System.out.println("init");
    }

    @Override
    public void destroy() {
        System.out.println("destroy");
    }
}