package com.vti.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.hateoas.RepresentationModel;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
public class DonationProgramDTO extends RepresentationModel<DonationProgramDTO> {
    private Integer id;
    private String name;
    private String unitName;
    private Integer totalNumberOfDonation;
    private LocalDate createdDate;
    private List<UnitDTO> units;

    @Setter
    @Getter
    public static class UnitDTO extends RepresentationModel<UnitDTO> {
        @JsonProperty("UnitId")
        private Integer id;
        private String unitName;
    }
}
