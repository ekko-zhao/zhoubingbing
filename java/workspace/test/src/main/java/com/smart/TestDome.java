package com.smart;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.Test;
import org.springframework.expression.EvaluationContext;
import org.springframework.expression.Expression;
import org.springframework.expression.ExpressionParser;
import org.springframework.expression.spel.SpelCompilerMode;
import org.springframework.expression.spel.SpelParserConfiguration;
import org.springframework.expression.spel.standard.SpelExpressionParser;
import org.springframework.expression.spel.support.StandardEvaluationContext;


public class TestDome {
	@Test
	public void script(){
		User uesr = new User();
		ExpressionParser parser = new SpelExpressionParser();
		
		EvaluationContext context = new StandardEvaluationContext(uesr);
		
		List<Integer> credits = new ArrayList<Integer>();
		credits.addAll(Arrays.asList(150,100,90,100,130,70));
		context.setVariable("credits", credits);
		
		Expression exp = parser.parseExpression("function f(){return 100;}");
		
		
		System.out.println(exp);
		
		/*
		System.out.println(message);*/
	}
}
