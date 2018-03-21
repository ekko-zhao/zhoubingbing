package com.smart.beanfactory;

import org.junit.Test;
import org.springframework.beans.factory.config.SingletonBeanRegistry;
import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.beans.factory.support.DefaultSingletonBeanRegistry;
import org.springframework.beans.factory.xml.XmlBeanDefinitionReader;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;


import com.smart.Car;

public class BeanFactory {
	@Test
	public void getBean() throws Throwable {
		ResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
		Resource res= resolver.getResource("classpath:com/smart/beanfactory/beans.xml");
		System.out.println(res.getURI());
		
		DefaultListableBeanFactory factory = new DefaultListableBeanFactory();
		XmlBeanDefinitionReader reader = new XmlBeanDefinitionReader(factory);
		reader.loadBeanDefinitions(res);
		
		
		
		System.out.println("init BeanFactory");
		Car car = factory.getBean("carId", Car.class);
		
		System.out.println("car bean is ready for use");
		
	}
}
