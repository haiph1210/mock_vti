package com.vti.service;

import com.vti.dto.DonationProgramCreateForm;
import com.vti.dto.DonationProgramUpdateForm;
import com.vti.dto.filter.DonationProgramFilterForm;
import com.vti.entity.DonationProgram;
import com.vti.entity.Unit;
import com.vti.repository.IDonationProgramRepository;
import com.vti.repository.IUnitRepository;
import com.vti.specification.DonationProgramSpecification;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DonationProgramService implements IDonationProgramService {

    @Autowired
    private IDonationProgramRepository repository;
    @Autowired
    private IUnitRepository unitRepository;
    @Autowired
    private ModelMapper mapper;

    @Override
    public Page<DonationProgram> findAll(Pageable pageable, DonationProgramFilterForm form) {
        Specification<DonationProgram> spec = DonationProgramSpecification.buildWhere(form);
        return repository.findAll(spec, pageable);
    }

    @Override
    public DonationProgram findById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public DonationProgram findByName(String name) {
        return repository.findByName(name);
    }

    @Override
    @Transactional
    public String create(DonationProgramCreateForm form) {
        DonationProgram donationProgram = mapper.map(form, DonationProgram.class);
        DonationProgram saved = repository.save(donationProgram);
        if (saved != null) {
            List<Unit> units = donationProgram.getUnits();
            if (units != null) {
                for (Unit unit : units) {
                    unit.setDonationProgram(saved);
                }
            }
            repository.save(donationProgram);
            return "Success";
        } else {
            return "fail";
        }

    }

    @Override
    public String update(DonationProgramUpdateForm form) {
        DonationProgram donationProgram = mapper.map(form, DonationProgram.class);
        repository.save(donationProgram);
        return "success";
    }

    @Override
    public void deleteById(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public void deleteByName(String name) {
        repository.deleteByName(name);
    }

}
