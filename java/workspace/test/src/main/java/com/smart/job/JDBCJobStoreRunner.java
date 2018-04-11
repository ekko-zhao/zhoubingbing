package com.smart.job;

import java.util.Date;

import org.quartz.JobDetail;
import org.quartz.Scheduler;
import org.quartz.SchedulerFactory;
import org.quartz.SimpleTrigger;
import org.quartz.Trigger;
import org.quartz.impl.StdSchedulerFactory;

public class JDBCJobStoreRunner {
	public static void main(String agrs[]) {
		try {
			SchedulerFactory schedulerFactory = new StdSchedulerFactory();
			Scheduler scheduler = schedulerFactory.getScheduler();
			String[] triggerGroups = scheduler.getTriggerGroupNames();
			
			for(int i=0; i < triggerGroups.length; i++) {
				String[] triggers = scheduler.getTriggerNames(triggerGroups[i]);
				for(int j = 0; j< triggers.length; j++) {
					Trigger tg = scheduler.getTrigger(triggers[j], triggerGroups[i]);
					
					if(tg instanceof SimpleTrigger && tg.getFullName().equals("tgroup1.grigger1_1")) {
						scheduler.rescheduleJob(triggers[j], triggerGroups[i], tg);
					}
				}
			}
			scheduler.start();
		}catch(Exception e) {}
	}
}
