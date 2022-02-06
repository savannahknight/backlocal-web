package com.backlocal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.*;

@RestController
public class POSHandler {

  private final POSCredentialDAO dao;

  @Autowired
  public POSHandler() {
    dao = new POSCredentialDAOMemory();
    dao.save(new POSCredential(Id.generate(), "user", POSCredentialType.RAIN, "posusername", "pospassword"));
  }

  //for user that is logged in
  @GetMapping("/api/getPOSCredential")
  public POSCredential getPOSCredential(Principal principal) {
    if (principal instanceof UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken) {
      if (usernamePasswordAuthenticationToken.getPrincipal() instanceof User user) {
        if (user == null)
          return null;
        return dao.getPOSCredentialByUsername(user.getUsername());
      }
    }
    return null;
  }

  @PostMapping("/api/savePOSCredential")
  public POSCredential savePOSCredential(Principal principal, @RequestParam POSCredentialType type, @RequestParam String posUsername, @RequestParam String posPassword) {
    if (principal instanceof UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken) {
      if (usernamePasswordAuthenticationToken.getPrincipal() instanceof User user) {
        if (user == null)
          return null;
        return dao.save(new POSCredential(Id.generate(), user.getUsername(), type, posUsername, posPassword));
      }
    }
    return null;
  }

  @GetMapping("/api/syncProducts")
  public String syncProducts(Principal principal) {
    if (principal instanceof UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken) {
      if (usernamePasswordAuthenticationToken.getPrincipal() instanceof User user) {

        if (user == null)
          return null;

        POSCredential posCredential = dao.getPOSCredentialByUsername(user.getUsername());
        if (posCredential.type() == POSCredentialType.RAIN) {
          Set<Product> products = new Rain(posCredential).getProducts();
          for (Product product : products)
            System.out.println("\tproduct: " + product);
        }
      }
    }
    return null;
  }

  //save pos system/ import inventory
  //refresh items
  //create a map of key: username and value: POSCredential obj
}
