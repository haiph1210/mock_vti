package com.vti.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.util.List;

//! chương trình quyên góp
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "donation_program")
public class DonationProgram {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    private Integer id; //! id của chương trình

    @Column(name = "name", nullable = false, unique = true, length = 50)
    private String name; //! tên chương trình

    @Column(name = "total_number_of_donation", nullable = false, updatable = true)
    private Integer totalNumberOfDonation; //! tổng số lượt quyên góp

    @Column(name = "created_date", nullable = false, updatable = false)
    @CreationTimestamp
    private LocalDate createdDate; //! ngày tạo chương trình

    @OneToMany(mappedBy = "donationProgram", cascade ={CascadeType.REMOVE,CascadeType.MERGE})
    private List<Unit> units;



}
