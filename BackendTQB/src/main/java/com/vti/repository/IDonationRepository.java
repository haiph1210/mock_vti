package com.vti.repository;

import com.vti.dto.DonationDTO;
import com.vti.entity.Donation;
import org.hibernate.query.NativeQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface IDonationRepository extends JpaRepository<Donation, Integer> {

    @Query(nativeQuery = true, value = "SELECT COUNT(d.count_donate)\n" +
            " FROM donation d")
    long count();  //! số lần donate


    @Query(nativeQuery = true,value = "SELECT * FROM donation d WHERE user_id = ?1")
    List<Donation> findByUserId(Integer userId);

    @Query(nativeQuery = true,value = "SELECT NEW path.to.DonationDTO(d.*, u.lastName)\n" +
            "FROM testingsystem.donation d\n" +
            "JOIN `user` u \n" +
            "ON d.user_id = u.id")

    List<DonationDTO> findAllDonation();
    @Query(nativeQuery = true, value = "SELECT SUM(d.donate_price)\n" +
            " FROM donation d")
    Double totalPrice(); //! tổng số tiền donate

    @Query(nativeQuery = true,value = "SELECT u.username\n" +
            "FROM testingsystem.donation d\n" +
            "JOIN `user` u \n" +
            "ON d.user_id = u.id")
    String findUserDonate(); //! tài khoản đã donate
}
