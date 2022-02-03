package com.backlocal;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class WebHandler {
  @GetMapping("/api/greeting")
  public String greeting(Principal obj) {
    System.out.println(obj); return "Hello " + obj.getName();
  }
  //enablesch
}
