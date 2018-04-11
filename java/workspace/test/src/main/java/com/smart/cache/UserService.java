package com.smart.cache;

import org.junit.Test;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

class User{
	
}

@Service(value="userServiceBean")
public class UserService {
	@Cacheable(cacheNames="users")
	public User getUserById(String userId) {
		System.out.println("no cache");
		return new User();
	}
	
	@CacheEvict(cacheNames="users")
	public void clear() {
		
		System.out.println("no cache");
	}
	
	
	@Test
	public void t() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("com/smart/beans.xml");
		UserService service = (UserService) ctx.getBean("userServiceBean");
		service.getUserById("123456");
		service.getUserById("123456");
		service.clear();
		service.getUserById("123456");
	}
}
