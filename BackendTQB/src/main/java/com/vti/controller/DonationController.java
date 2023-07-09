package com.vti.controller;

import com.vti.dto.DonationDTO;
import com.vti.entity.Donation;
import com.vti.service.IDonationService;
import com.vti.service.IUserService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/donations")
public class DonationController {
    @Autowired
    private IDonationService service;
    @Autowired
    private ModelMapper mapper;


    @GetMapping
    public Page<DonationDTO> findAll(Pageable pageable) {
        Page<Donation> page = service.findAll(pageable);
        List<Donation> donations = page.getContent();
        List<DonationDTO> dtos = mapper.map(donations, new TypeToken<List<DonationDTO>>() {
        }.getType());
        return new PageImpl<>(dtos, pageable, page.getTotalElements());
    }

    @GetMapping("/findAll")
    public List<DonationDTO> findAll() {
        List<DonationDTO> donationDTOS = service.findAll();
        return donationDTOS;
    }

    @GetMapping("/{id}")
    public DonationDTO findById(@PathVariable("id") Integer id) {
        Donation donation = service.findById(id);
        DonationDTO dto = mapper.map(donation, DonationDTO.class);
        return dto;
    }

    @PostMapping
    public String create(@RequestBody Donation donation) {
        return service.create(donation);
    }

    @PutMapping("/{id}")
    public String update(@PathVariable("id") Integer id, @RequestBody Donation donation) {
        return service.update(id, donation);

    }

    @DeleteMapping("/{id}")
    public String deleteById(@PathVariable("id") Integer id) {
        return service.deleteById(id);
    }

    @GetMapping("/count")
    public long count() {
        return service.count();
    }

    @GetMapping("/totalPrices")
    public Double totalPrice() {
        return service.totalPrice();
    }

    @GetMapping("/userDonate")
    public String userDonate() {
        return service.getUserDonate();
    }
}
