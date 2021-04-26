package com.example.hilo.controller;

import java.util.UUID;

import com.example.hilo.model.Result;
import com.example.hilo.model.Result.HiLo;
import com.example.hilo.model.User;
import com.example.hilo.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HiLoController {

    @Autowired
    private UserService userService;

    @GetMapping("/guess")
    @CrossOrigin
    public Result guess(@RequestParam("number") int guess, @RequestParam("userID") UUID userID) {
        User user = userService.getUserByUserID(userID);
        int number = user.getNumber();

        System.out.println("Someone guessed: " + guess + "; their user ID is: " + user.getUuid());

        if (guess < number) {
            return new Result(HiLo.LOW);
        }
        if (guess > number) {
            return new Result(HiLo.HIGH);
        }
        return new Result(HiLo.CORRECT);
    }

    @PostMapping("/new-user")
    @CrossOrigin
    public UUID newUser() {
        User user = userService.createNewUser();
        System.out.println(String.format("created new user %s, their number is %s.", user, user.getNumber()));
        return user.getUuid();
    }

    @PostMapping("/new-game")
    @CrossOrigin
    public void newGame(@RequestParam(name = "userID") UUID userID) {
        User user = userService.getUserByUserID(userID);
        user.startNewGame();
        System.out.println(String.format("started new game for %s, their number is %s.", user, user.getNumber()));
    }

    @GetMapping("/random")
    @CrossOrigin
    public String rand() {
        return "4"; // determined by fair dice roll
    }

    @GetMapping("/")
    @CrossOrigin
    public String help() {
        return "Try /guess?number=X. Where X is a number from 1 to 10.";
    }

}
