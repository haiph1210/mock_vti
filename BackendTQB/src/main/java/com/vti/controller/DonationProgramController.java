package com.vti.controller;

import com.vti.dto.DonationProgramCreateForm;
import com.vti.dto.DonationProgramDTO;
import com.vti.dto.DonationProgramUpdateForm;
import com.vti.dto.filter.DonationProgramFilterForm;
import com.vti.entity.DonationProgram;
import com.vti.service.IDonationProgramService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
@RequestMapping("/api/v1/donationPrograms")
public class DonationProgramController {
    @Autowired
    private IDonationProgramService service;

    @Autowired
    private ModelMapper mapper;


    @GetMapping
    public Page<DonationProgramDTO> findAll(Pageable pageable, DonationProgramFilterForm form) {
        Page<DonationProgram> page = service.findAll(pageable, form);
        List<DonationProgram> donationPrograms = page.getContent();
        List<DonationProgramDTO> dtos = mapper.map(donationPrograms, new TypeToken<List<DonationProgramDTO>>() {
        }.getType());

        for (DonationProgramDTO dto : dtos) {
            dto.add(
                    linkTo(
                            methodOn(DonationProgramController.class).findById(dto.getId())
                    ).withSelfRel());
            for (DonationProgramDTO.UnitDTO unit : dto.getUnits()) {
                unit.add(linkTo(methodOn(UnitController.class).findById(unit.getId())).withSelfRel());
            }
        }
        return new PageImpl<>(dtos, pageable, page.getTotalElements());
    }

    @GetMapping("/{id}")
    public DonationProgramDTO findById(@PathVariable("id") Integer id) {
        DonationProgram donationProgram = service.findById(id);
        DonationProgramDTO dto = mapper.map(donationProgram, DonationProgramDTO.class);
        dto.add(
                linkTo(
                        methodOn(DonationProgramController.class).findById(id)
                ).withSelfRel()
        );
        return dto;
    }

    @GetMapping("/name/{name}")
    public DonationProgramDTO findByName(@PathVariable("name") String name) {
        DonationProgram donationProgram = service.findByName(name);
        DonationProgramDTO dto = mapper.map(donationProgram, DonationProgramDTO.class);
        dto.add(
                linkTo(
                        methodOn(DonationProgramController.class).findByName(name)
                ).withSelfRel()
        );
        return dto;
    }

    @PostMapping
    public String create(@RequestBody DonationProgramCreateForm form) {
      return  service.create(form);
    }

    @PutMapping("/{id}")
    public String update(@PathVariable("id") Integer id, @RequestBody DonationProgramUpdateForm form) {
        form.setId(id);
        service.update(form);
        return "Success";
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable("id") Integer id) {
        service.deleteById(id);
    }

    @Transactional
    @DeleteMapping("/name/{name}")
    public void deleteByName(@PathVariable("name") String name) {
        service.deleteByName(name);
    }

}
