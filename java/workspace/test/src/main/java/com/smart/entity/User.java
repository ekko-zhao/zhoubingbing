package com.smart.entity;

import javax.validation.constraints.Pattern;

public class User {
	private String userId;
	
	@Pattern(regexp = ".{6,32}",message="{Pattern.user.userName}")
	private String userName;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	
	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
}
