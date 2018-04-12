package com.smart.job;

import java.util.Map;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.context.ApplicationContext;

public class SimpleJob implements Job {

	@Override
	public void execute(JobExecutionContext jctx) throws JobExecutionException {
		// TODO Auto-generated method stub
		System.out.println("job");
		/*Map dataMap = jctx.getJobDetail().getJobDataMap();
		ApplicationContext ctx = (ApplicationContext)dataMap.get("applicationContext");*/
		
		
	}

}
