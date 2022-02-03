package com.backlocal;

public record POSCredential(
        Id id,
        String userUsername,
        POSCredentialType type,
        String posUsername,
        String posPassword
) {
}

//database...pos username, password, and pos type