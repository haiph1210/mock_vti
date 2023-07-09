package com.vti.service;

import com.vti.dto.DonationDTO;
import com.vti.entity.Donation;
import com.vti.repository.IDonationRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DonationService implements IDonationService {
    @Autowired
    private IDonationRepository repository;
    @Autowired
    private ModelMapper mapper;
    @Autowired
    private UserService UserService;

    @Override
    public Page<Donation> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    @Override
    public List<DonationDTO> findAll() {
        List<Donation> donations = repository.findAll();
        List<DonationDTO> dtos = new ArrayList<>();
        for (Donation donation : donations) {
            DonationDTO dto = DonationDTO
                    .build(donation.getId(),
                            donation.getCreateDate(),
                            donation.getDonatePrice(),
                            donation.getCountDonate(),
                            findLastNameByUserId(donation.getUserId())

                    );
            dtos.add(dto);
        }

        return dtos;

    }

    private String findLastNameByUserId(Integer userId) {
        return UserService.findById(userId).getLastName();
    }

    @Override
    public Donation findById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public String create(Donation donation) {
        Donation newDonation = new Donation(donation.getUserId(), donation.getDonatePrice(), returnCountByUserId(donation.getUserId()));
        repository.save(newDonation);
        return "Success";
    }

    @Override
    public String update(Integer id, Donation donation) {
        Donation updateDonation = findById(id);
        if (updateDonation != null) {
            Donation update = Donation.build(id, updateDonation.getUserId(), donation.getDonatePrice(), updateDonation.getCountDonate(), updateDonation.getCreateDate());
            repository.save(update);
            return "update success";
        } else {
            return "Cannot find Id: " + id;

        }
    }

    @Override
    public String deleteById(Integer id) {
        Donation delDonation = findById(id);
        if (delDonation != null) {
            repository.deleteById(id);
            return "Delete Success";
        } else {
            return "Cannot find Id: " + id;
        }
    }

    @Override
    public long count() {
        return repository.count();
    }

    @Override
    public Double totalPrice() {
        return repository.totalPrice();
    }

    @Override
    public String getUserDonate() {
        return repository.findUserDonate();
    }

    private Integer returnCountByUserId(Integer userId) {
        Integer countBefore = 0;
        List<Donation> findByUserId = repository.findByUserId(userId);
        if (!findByUserId.isEmpty()) {
            for (Donation donation : findByUserId) {
                countBefore = donation.getCountDonate();
                countBefore++;
            }
        } else {
            countBefore = 1;
        }
        return countBefore;
    }
}
