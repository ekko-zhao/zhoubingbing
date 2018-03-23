package com.smart.beanfactory;

import java.util.ArrayList;

import org.junit.Test;
import org.springframework.beans.factory.config.SingletonBeanRegistry;
import org.springframework.beans.factory.support.AbstractBeanFactory;
import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.beans.factory.support.DefaultSingletonBeanRegistry;
import org.springframework.beans.factory.xml.XmlBeanDefinitionReader;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.context.support.GenericGroovyApplicationContext;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;

import com.smart.Boss;
import com.smart.Car;
import com.smart.CarBeans;

import groovyjarjarantlr.collections.List;

public class BeanFactory {
	@Test
	public void getBean() throws Throwable {
		
		ArrayList<String> list = new ArrayList<String>();
		list.add("df");
		list.add("df");
		/*ApplicationContext ctx = new GenericGroovyApplicationContext("classpath:com/smart/groovy-beans.groovy");
		Car car = ctx.getBean("carId", Car.class);*/
		
		
		// ApplicationContext ctx = new AnnotationConfigApplicationContext(CarBeans.class);
		
		
		
		/*ApplicationContext ctx = new ClassPathXmlApplicationContext("com/smart/beanfactory/beans.xml");
		Car car = ctx.getBean("carId", Car.class);
		System.out.println(car.getBrand());*/
		
		
		/*ResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
		Resource res= resolver.getResource("classpath:com/smart/beanfactory/beans.xml");
		System.out.println(res.getURI());
		
		DefaultListableBeanFactory factory = new DefaultListableBeanFactory();
		XmlBeanDefinitionReader reader = new XmlBeanDefinitionReader(factory);
		reader.loadBeanDefinitions(res);
		
		
		
		System.out.println("init BeanFactory");
		Car car = factory.getBean("carId", Car.class);
		
		System.out.println("car bean is ready for use");*/
		
		
	}
}
