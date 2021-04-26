package com.example.hilo.service;

import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST)
public class BadUserRequestException extends RuntimeException {
    public BadUserRequestException(UUID uuid) {
        super(String.format("user %s does not exist", uuid));
    }
}
