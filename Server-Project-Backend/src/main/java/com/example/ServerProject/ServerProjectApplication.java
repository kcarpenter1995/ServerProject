package com.example.ServerProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class ServerProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerProjectApplication.class, args);
	}

}
