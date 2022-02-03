package com.backlocal;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configurers.AbstractAuthenticationFilterConfigurer;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

@Configuration
@EnableWebSecurity
public class BasicConfiguration extends WebSecurityConfigurerAdapter {

  @Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    PasswordEncoder encoder =
            PasswordEncoderFactories.createDelegatingPasswordEncoder();
    auth
            .inMemoryAuthentication()
            .withUser("user")
            .password(encoder.encode("password"))
            .roles("USER")
            .and()
            .withUser("admin")
            .password(encoder.encode("admin"))
            .roles("USER", "ADMIN");
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.cors().and().csrf().disable();

    http
            .authorizeRequests()
            .anyRequest()
            .authenticated()
            .and()
            .formLogin();
//            .loginPage("/login")
//            .loginProcessingUrl("/api/perform_login")
//            .defaultSuccessUrl("/", true)
//            .failureUrl("/login.html?error=true")
//            //.failureHandler(authenticationFailureHandler())
//            .and()
//            .logout()
//            .logoutUrl("/perform_logout")
//            .deleteCookies("JSESSIONID");
            //.logoutSuccessHandler(logoutSuccessHandler());
  }


}
