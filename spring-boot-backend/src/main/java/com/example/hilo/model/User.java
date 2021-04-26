package com.example.hilo.model;

import java.util.Random;
import java.util.UUID;

import lombok.Data;

@Data
public class User {
    private static final Random random = new Random();

    private UUID uuid;
    private int number;

    public User() {
        this.uuid = UUID.randomUUID();
        startNewGame();
    }

    public void startNewGame() {
        this.number = 1 + random.nextInt(10);
    }

}
