package com.learnspringboot.__spring_boot_overview.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LandingPage {
    @GetMapping("/")
    public String HelloWorld() {
        return "Hello World";
    }
}
