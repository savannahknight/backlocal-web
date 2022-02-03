package com.backlocal;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

public class POSCredentialDAOMemory implements POSCredentialDAO {

  private ConcurrentMap<String ,POSCredential> credentialsByUser;
  private ConcurrentMap<Id ,POSCredential> credentialsById;

  public POSCredentialDAOMemory() {
    this.credentialsByUser = new ConcurrentHashMap<>();
    this.credentialsById = new ConcurrentHashMap<>();
  }


  @Override
  public POSCredential getPOSCredentialByUsername(String userUsername) {
    return credentialsByUser.get(userUsername);
  }

  @Override
  public POSCredential getPOSCredentialById(Id id) {
    return credentialsById.get(id);
  }

  @Override
  public POSCredential save(POSCredential posCredential) {
    credentialsById.put(posCredential.id(), posCredential);
    credentialsByUser.put(posCredential.userUsername(), posCredential);
    return posCredential;
  }
}
