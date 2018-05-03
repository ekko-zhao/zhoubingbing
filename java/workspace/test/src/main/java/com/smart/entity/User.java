package com.smart.entity;

import javax.validation.constraints.Pattern;

public class User {
	private String name;
	
	@Pattern(regexp = ".{6,32}",message="{Pattern.user.userName}")
	private String password;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
