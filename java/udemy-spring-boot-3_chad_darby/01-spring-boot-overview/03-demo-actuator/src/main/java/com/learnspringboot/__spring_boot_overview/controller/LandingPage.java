package com.learnspringboot.__spring_boot_overview.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LandingPage {
    //Added new endpoint for hello world
    @GetMapping("/")
    public String helloWorld() {
        return "Hello World";
    }

    @GetMapping("/workout")
    public String getDailyWorkout() {
        return "At least do a single workout";
    }

    @GetMapping("/fortune")
    public String getFortune() {
        return "Today is your lucky day.";
    }
}
