package user;

import java.sql.*;

public class UserDAO {
    private Connection conn;
    private PreparedStatement pstmt;
    private ResultSet rs;

    public UserDAO() {
        try{
            String dbURL = "jdbc:mysql://localhost:3306/bbs";
            String dbID = "root";
            String dbPW = "root";
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(dbURL, dbID, dbPW);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public int login(String userID, String userPW) {
        String SQL = "select userPW from user where userID = ?";
        try {
            pstmt = conn.prepareStatement(SQL);
            pstmt.setString(1, userID);
            rs = pstmt.executeQuery();
            if(rs.next()) {
                if(rs.getString(1).equals(userPW)) {
                    return 1; // 로그인 성공
                }
                else
                    return 0; // 비밀번호 불일치
            }
            return -1; // 아이디가 없음
        } catch (Exception e) {
            e.printStackTrace();
        }
        return -2; // 데이터베이스 오류
    }

    public int register(User user) {
        String SQL = "insert into user values (?, ?, ?, ?, ?)";
        try {
            pstmt = conn.prepareStatement(SQL);
            pstmt.setString(1, user.getUserID());
            pstmt.setString(2, user.getUserPW());
            pstmt.setString(3, user.getUserName());
            pstmt.setString(4, user.getUserGender());
            pstmt.setString(5, user.getUserEmail());
            return pstmt.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return -1;
    }
}


