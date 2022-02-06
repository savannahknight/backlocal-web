package com.backlocal;

import org.junit.jupiter.api.Test;

import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

class RainTest {

  @Test
  public void testRainIntegration() {
    Set<Product> products = new Rain(new POSCredential(Id.generate(), "fake", POSCredentialType.RAIN, "Ted", "yarn4you")).getProducts();
    System.out.println("products.size(): " + products.size());
    for (Product product : products)
      System.out.println("\tproduct: " + product);
  }

}