package com.vti.controller;

import com.vti.dto.UnitCreateForm;
import com.vti.dto.UnitDTO;
import com.vti.dto.UnitUpdateForm;
import com.vti.dto.filter.UnitFilterForm;
import com.vti.entity.Unit;
import com.vti.service.IUnitService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/units")
public class UnitController {

    @Autowired
    private IUnitService service;
    @Autowired
    private ModelMapper mapper;

    @GetMapping
    public Page<UnitDTO> findAll(Pageable pageable, UnitFilterForm form) {
        Page<Unit> page = service.findAll(pageable, form);
        List<Unit> units = page.getContent();
        List<UnitDTO> dtos = mapper.map(units, new TypeToken<List<UnitDTO>>() {
        }.getType());
        return new PageImpl<>(dtos, pageable, page.getTotalElements());
    }

    @GetMapping("/{id}")
    public UnitDTO findById(@PathVariable("id") Integer id) {
        Unit unit = service.findById(id);
        return mapper.map(unit, UnitDTO.class);
    }

    @PostMapping
    public void create(@RequestBody UnitCreateForm form) {
        service.create(form);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable("id") Integer id, @RequestBody UnitUpdateForm form) {
        form.setId(id);
        service.update(form);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable("id") Integer id) {
        service.deleteById(id);
    }
}
