package start;

import java.lang.reflect.Constructor;
import start.reflect.*;

import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;


public class Test {
	public static void main(String[] agrs) throws Throwable {
		ResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
		
		DefaultResourceLoader d = new DefaultResourceLoader();
		// System.out.println(loader);
		// System.out.println();
	}
}
