package start;

import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Repeatable(MyRepeatedAnnos.class)
public @interface MyAnno {
	String str();

	int val();
}

@Retention(RetentionPolicy.RUNTIME)
@interface MyRepeatedAnnos {
	MyAnno[] value();
}