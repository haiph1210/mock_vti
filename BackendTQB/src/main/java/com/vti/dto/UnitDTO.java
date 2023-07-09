package com.vti.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.hateoas.RepresentationModel;

@Getter
@Setter
public class UnitDTO extends RepresentationModel<UnitDTO> {
    private Integer id;
    private String unitName;
}
