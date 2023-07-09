package com.vti.service;

import com.vti.dto.UnitCreateForm;
import com.vti.dto.UnitUpdateForm;
import com.vti.dto.filter.UnitFilterForm;
import com.vti.entity.Unit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IUnitService {
    Page<Unit> findAll(Pageable pageable, UnitFilterForm form);

    Unit findById(Integer id);

    Unit findByName(String unitName);

    void create(UnitCreateForm form);

    void update(UnitUpdateForm form);

    void deleteById(Integer id);
}
