package com.smart;

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
		
		ExpressionParser parser = new SpelExpressionParser();
		int[] array = (int[])parser.parseExpression("new int[]{1,2,3}").getValue();
		
		
		System.out.println(array.length);
		/*
		System.out.println(message);*/
	}
}
