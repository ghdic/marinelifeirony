<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 2021-04-12
  Time: 오후 8:55
  To change this template use File | Settings | File Templates.
--%>
<%@ include file="templates/navbar.jsp" %>

    <form action="test" method="post">
	    id: <input type="text" name="id"></br>
	    password: <input type="password" name="pw"></br>
	    residence: <select name="select">
	    <option value="seoul" selected="selected">Seoul</option>
	    <option value="asan">asan</option>
	    <option value="busan">busan</option>
	    </select>

	    <input type="submit" value="sign">
    </form>
<%@ include file="templates/footer.jsp" %>
