package com.smart;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CarBeans {
	@Bean(name = "carId")
	public Car buildCar() {
		Car car = new Car();
		car.setBrand("红旗H7");
		return car;
	}
}
