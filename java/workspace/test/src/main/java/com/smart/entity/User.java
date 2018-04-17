package com.smart.entity;

import javax.validation.constraints.Pattern;

public class User {
	private int userId;
	
	@Pattern(regexp = ".{6,32}")
	private String userName;

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	
	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
}
