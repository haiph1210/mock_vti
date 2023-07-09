package com.vti.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UnitUpdateForm {
    private Integer id;
    private String unitName;
    private Integer donationProgramId;
}
