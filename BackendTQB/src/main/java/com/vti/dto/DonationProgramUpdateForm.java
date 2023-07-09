package com.vti.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DonationProgramUpdateForm {
    private Integer id;
    private String name;
    private Integer totalNumberOfDonation;
}
