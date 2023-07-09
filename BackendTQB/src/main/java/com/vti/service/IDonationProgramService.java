package com.vti.service;

import com.vti.dto.DonationProgramCreateForm;
import com.vti.dto.DonationProgramUpdateForm;
import com.vti.dto.filter.DonationProgramFilterForm;
import com.vti.entity.DonationProgram;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IDonationProgramService {
    Page<DonationProgram> findAll(Pageable pageable, DonationProgramFilterForm form);

    DonationProgram findById(Integer id);

    DonationProgram findByName(String name);

    String create(DonationProgramCreateForm form);

    String update(DonationProgramUpdateForm form);

    void deleteById(Integer id);

    void deleteByName(String name);
}
