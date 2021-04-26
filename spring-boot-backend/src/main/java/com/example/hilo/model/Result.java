package com.example.hilo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NonNull;

@Data
@AllArgsConstructor
public class Result {

    @NonNull
    private final HiLo result;

    public static enum HiLo {
        HIGH, LOW, CORRECT
    }

}
