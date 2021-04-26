package com.example.hilo.dao;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import com.example.hilo.model.User;

import org.springframework.stereotype.Repository;

@Repository
public class UserDAO {
    /** Map: The classic in-memory key-value store. */
    private Map<UUID, User> users;

    public UserDAO() {
        users = new HashMap<>();
    }

    public Optional<User> getUserByUserID(UUID uuid) {
        User user = users.get(uuid);
        return Optional.ofNullable(user);
    }

    public void addUser(User newUser) {
        users.put(newUser.getUuid(), newUser);
    }
}
