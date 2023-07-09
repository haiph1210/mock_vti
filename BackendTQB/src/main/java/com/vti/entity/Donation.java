package com.vti.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;

@Data
@AllArgsConstructor(staticName = "build")
@NoArgsConstructor
@Entity
@Table(name = "donation")
public class Donation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "user_id", nullable = false)
    private Integer userId;

    @Column(name = "donate_price", nullable = false)
    private Double donatePrice;

    @Column(name = "count_donate", nullable = false)
    private Integer countDonate;

    @CreationTimestamp
    private LocalDate createDate;


    public Donation(Integer userId, Double donatePrice, Integer countDonate) {
        this.userId = userId;
        this.donatePrice = donatePrice;
        this.countDonate = countDonate;
    }
}
