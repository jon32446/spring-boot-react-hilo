package com.example.hilo.service;

import java.util.UUID;

import com.example.hilo.dao.UserDAO;
import com.example.hilo.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserDAO userDAO;

    public User getUserByUserID(UUID userID) throws BadUserRequestException {
        var user = userDAO.getUserByUserID(userID);
        return user.orElseThrow(() -> new BadUserRequestException(userID));
    }

    public User createNewUser() {
        User newUser = new User();
        userDAO.addUser(newUser);
        return newUser;
    }
}