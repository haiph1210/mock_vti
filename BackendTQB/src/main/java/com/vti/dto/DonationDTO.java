package com.vti.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
@AllArgsConstructor(staticName = "build")
@NoArgsConstructor
@Getter
@Setter
public class DonationDTO {
    private Integer id;
    private LocalDate createDate;
    private double donatePrice;
    private Integer countDonate;
    private String lastName;
}
