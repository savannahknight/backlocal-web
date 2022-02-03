package com.backlocal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling //run at regular intervals
public class BacklocalBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BacklocalBackendApplication.class, args);
	}
//have spring convert to JSON
	//write test to login and then store in database
}
