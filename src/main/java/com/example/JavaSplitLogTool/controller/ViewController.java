package com.example.JavaSplitLogTool.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ViewController {
    @GetMapping("/")
    public String showForm(){
        return "index";
    }
    @PostMapping("show")
    public String handleForm(@RequestParam("inputText") String inputText, Model model){
        // Chuyển \n thành <br> để hiển thị đúng | sẽ không bị mất dấu xuống dòng
        String formattedText = inputText.replaceAll("(\r\n|\n)", "<br>");
        model.addAttribute("outputText", inputText);
        return "index";
    }
}
