package springboot.repository;

import org.springframework.jdbc.datasource.DataSourceUtils;
import springboot.domain.Bbs;
import springboot.domain.Member;

import javax.sql.DataSource;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class JdbcBbsRepository implements BbsRepository {

    private final DataSource dataSource;

    public JdbcBbsRepository(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Override
    public int save(Bbs bbs) {
        String sql = "insert into bbs (userID, bbsTitle, bbsContent) values (?, ?, ?)";

        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            conn = getConnection();
            pstmt = conn.prepareStatement(sql);

            pstmt.setString(1, bbs.getUserID());
            pstmt.setString(2, bbs.getTitle());
            pstmt.setString(3, bbs.getContent());
            return pstmt.executeUpdate();
        } catch (Exception e) {
            throw new IllegalStateException(e);
        } finally {
            close(conn, pstmt, rs);
        }
    }

    @Override
    public List<Bbs> findAll() {
        String sql = "select * from bbs";
        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;
        try {
            conn = getConnection();
            pstmt = conn.prepareStatement(sql);
            rs = pstmt.executeQuery();
            List<Bbs> members = new ArrayList<>();
            while(rs.next()) {
                members.add(setBbs(rs));
            }
            return members;
        } catch (Exception e) {
            throw new IllegalStateException(e);
        } finally {
            close(conn, pstmt, rs);
        }
    }

    private Bbs setBbs(ResultSet rs) throws SQLException {
        Bbs bbs = new Bbs();
        bbs.setId(rs.getInt("bbsID"));
        bbs.setUserID(rs.getString("userID"));
        bbs.setDate(rs.getDate("bbsDate"));
        bbs.setTitle(rs.getString("bbsTitle"));
        bbs.setContent(rs.getString("bbsContent"));
        bbs.setView(rs.getInt("bbsView"));
        bbs.setRecommend(rs.getInt("bbsRecommend"));
        bbs.setAvailable(rs.getInt("bbsAvailable"));

        return bbs;
    }

    private Connection getConnection() {
        return DataSourceUtils.getConnection(dataSource);
    }

    private void close(Connection conn, PreparedStatement pstmt, ResultSet rs) {
        try{
            if(rs != null) {
                rs.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        try {
            if(pstmt != null) {
                pstmt.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        try {
            if(conn != null) {
                close(conn);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private void close(Connection conn) throws SQLException {
        DataSourceUtils.releaseConnection(conn, dataSource);
    }
}
