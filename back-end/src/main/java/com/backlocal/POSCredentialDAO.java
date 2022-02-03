package com.backlocal;

public interface POSCredentialDAO {
  POSCredential getPOSCredentialByUsername(String username);
  POSCredential getPOSCredentialById(Id id);
  POSCredential save(POSCredential posCredential);
}
