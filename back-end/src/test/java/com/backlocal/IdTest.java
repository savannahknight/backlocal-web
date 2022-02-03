package com.backlocal;

import org.junit.jupiter.api.Test;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

class IdTest {

  @Test
  public void testId() {
    System.out.println("UUID.randomUUID().toString(): "+ UUID.randomUUID().toString());
  }
}