package com.vti.dto;

import com.vti.entity.Unit;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class DonationProgramCreateForm {
    private String name;
    private Integer totalNumberOfDonation;
}
