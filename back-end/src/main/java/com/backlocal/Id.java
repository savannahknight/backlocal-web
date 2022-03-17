package com.backlocal;

import java.util.UUID;

// value should not be null and should be 36 characters
public record Id(String value) {
  //todo Validate here

  public static Id generate() {
    return new Id(UUID.randomUUID().toString());
  }
}
