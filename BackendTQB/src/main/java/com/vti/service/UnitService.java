package com.vti.service;

import com.vti.dto.UnitCreateForm;
import com.vti.dto.UnitUpdateForm;
import com.vti.dto.filter.UnitFilterForm;
import com.vti.entity.Unit;
import com.vti.repository.IUnitRepository;
import com.vti.specification.UnitSpecification;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
public class UnitService implements IUnitService {
    @Autowired
    private IUnitRepository repository;

    @Autowired
    private ModelMapper mapper;

    @Override
    public Page<Unit> findAll(Pageable pageable, UnitFilterForm form) {
        Specification<Unit> spec = UnitSpecification.buildWhere(form);
        return repository.findAll(spec, pageable);
    }

    @Override
    public Unit findById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Unit findByName(String unitName) {
        return repository.findByUnitName(unitName);
    }

    @Override
    public void create(UnitCreateForm form) {
        Unit unit = mapper.map(form, Unit.class);
        repository.save(unit);
    }

    @Override
    public void update(UnitUpdateForm form) {
        Unit unit = mapper.map(form, Unit.class);
        repository.save(unit);
    }

    @Override
    public void deleteById(Integer id) {
        repository.deleteById(id);
    }
}
