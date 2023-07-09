package com.vti.service;

import com.vti.dto.DonationDTO;
import com.vti.entity.Donation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IDonationService {
    Page<Donation> findAll(Pageable pageable);

    List<DonationDTO> findAll();

    Donation findById(Integer id);

    String create(Donation donation);

    String update(Integer id,Donation donation);

    String deleteById(Integer id);

    long count();

    Double totalPrice();

    String getUserDonate();
}
