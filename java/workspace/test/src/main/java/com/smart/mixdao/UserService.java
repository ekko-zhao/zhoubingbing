package com.smart.mixdao;


import com.smart.User;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Types;

import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.CallableStatementCallback;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.jdbc.support.incrementer.AbstractDataFieldMaxValueIncrementer;
import org.springframework.jdbc.support.incrementer.DataFieldMaxValueIncrementer;
import org.springframework.jdbc.support.incrementer.MySQLMaxValueIncrementer;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Service;

/**
 * @author 陈雄华
 * @version 1.0
 */

@Service("userService")
public class UserService extends BaseService{

	private HibernateTemplate hibernateTemplate;
	private ScoreService scoreService;
	
	@Autowired
	public static DataFieldMaxValueIncrementer incre;
	
	
	@Autowired
	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}

	@Autowired
	public void setScoreService(ScoreService scoreService) {
		this.scoreService = scoreService;
	}

	public void logon(String userName) throws SQLException {
		System.out.println("before userService.updateLastLogonTime()..");
		updateLastLogonTime(userName);
		System.out.println("end userService.updateLastLogonTime()..");
		
		System.out.println("before scoreService.addScore()..");
		scoreService.addScore(userName, 20);
		System.out.println("end scoreService.addScore()..");
		/*
			默认在 logon() 方法返回前才同步到数据库中
		*/
	}

	public void updateLastLogonTime(String userName) {
		User user = hibernateTemplate.get(User.class,userName);
		user.setLastLogonTime(System.currentTimeMillis());
		hibernateTemplate.update(user);
		hibernateTemplate.flush();
		/*
			logon() 方法中同时采用了 Hibernate 和 JDBC 数据访问技术，而Spring JDBC 无法感知Hibernate一级缓存；
			所以需要及时调用 flush() 方法将 Hibernate 记录数据更改的一级缓存同步到数据库中，否则 通过JDBC 的数据更改将被 Hibernate一级缓存 覆盖。Hibernate一级缓存要等待logon() 方法返回前才同步到数据库中
			
			如果没有调用 flush() 方法， 分数是 10
		*/
	}

	 public static void main(String[] args) throws SQLException {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("com/smart/beans.xml");
		UserService service = (UserService) ctx.getBean("userService");
		JdbcTemplate jdbcTemplate = (JdbcTemplate) ctx.getBean("jdbcTemplate");
		//插入一条记录，初始分数为10
		// jdbcTemplate.execute("INSERT INTO t_user(user_name,password,score,last_logon_time) VALUES('tom','123456',20,"+System.currentTimeMillis()+")");
		// jdbcTemplate.update("INSERT INTO t_user(user_name,password,score,last_logon_time) VALUES('tom','123456',20,"+System.currentTimeMillis()+")");
		
		String sql = "SELECT user_id,password FROM t_user WHERE user_name='tom'";
		
		System.out.println(jdbcTemplate.queryForRowSet(sql).getString("password"));
		
	}
}
































