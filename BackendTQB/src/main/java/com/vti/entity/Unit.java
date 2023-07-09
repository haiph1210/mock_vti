package com.vti.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//! đơn vị quyên góp
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "unit")
public class Unit {
    @Id
    @Column(name = "id", nullable = false, unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "unit_name", nullable = false, unique = true, length = 50)
    private String unitName; //! tên đơn vị quyên góp

    @ManyToOne
    @JoinColumn(name = "donation_program_id", referencedColumnName = "id", nullable = false)
    private DonationProgram donationProgram;
}
