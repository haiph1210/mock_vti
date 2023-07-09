package com.vti.specification;

import com.vti.dto.filter.DonationProgramFilterForm;
import com.vti.entity.DonationProgram;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;

import java.time.LocalDate;

public class DonationProgramSpecification {
    public static Specification<DonationProgram> buildWhere(DonationProgramFilterForm form) {
        if (form == null){
            return null;
        }
        return hasCreatedDateEqual(form.getCreatedDate())
                .and(hasCreatedDateGreaterThanOrEqualTo(form.getMinCreatedDate())
                        .and(hasCreatedDateLessThanOrEqualTo(form.getMaxCreatedDate())));
    }

    private static Specification<DonationProgram> hasCreatedDateEqual(LocalDate createdDate) {
        return new Specification<DonationProgram>() {
            @Override
            public Predicate toPredicate(Root<DonationProgram> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
                if (createdDate == null) {
                    return null;
                }
                return builder.equal(root.get("createdDate").as(LocalDate.class), createdDate);
            }
        };
    }

    private static Specification<DonationProgram> hasCreatedDateGreaterThanOrEqualTo(LocalDate minCreatedDate) {
        return new Specification<DonationProgram>() {
            @Override
            public Predicate toPredicate(Root<DonationProgram> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
                if (minCreatedDate == null) {
                    return null;
                }
                return builder.greaterThanOrEqualTo(root.get("createdDate").as(LocalDate.class), minCreatedDate);
            }
        };
    }

    private static Specification<DonationProgram> hasCreatedDateLessThanOrEqualTo(LocalDate maxCreatedDate) {
        return new Specification<DonationProgram>() {
            @Override
            public Predicate toPredicate(Root<DonationProgram> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
                if (maxCreatedDate == null) {
                    return null;
                }
                return builder.lessThanOrEqualTo(root.get("createdDate").as(LocalDate.class), maxCreatedDate);
            }
        };
    }
}
