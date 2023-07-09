package com.vti.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor(staticName = "buildUser")
@NoArgsConstructor
public class UserDTOv2 {
    private int id;
    private String userName;
    private String email;
    private String firstName;
    private String lastName;
}
