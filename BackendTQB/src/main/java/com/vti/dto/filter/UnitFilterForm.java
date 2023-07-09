package com.vti.dto.filter;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UnitFilterForm {
    private String search;
    private Integer minId;
    private Integer maxId;
}
