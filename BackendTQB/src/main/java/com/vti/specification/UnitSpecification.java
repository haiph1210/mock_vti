package com.vti.specification;

import com.vti.dto.filter.UnitFilterForm;
import com.vti.entity.Unit;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;

public class UnitSpecification {
    public static Specification<Unit> buildWhere(UnitFilterForm form) {

        if (form == null) {
            return null;
        }
        return hasUnitNameLike(form.getSearch())
                .and(hasDonationProgramNameLike(form.getSearch())
                        .and(hasIdGreaterThanOrEqual(form.getMinId()))
                        .and(hasIdLessThanOrEqual(form.getMaxId())));
    }

    private static Specification<Unit> hasUnitNameLike(String search) {
        return new Specification<Unit>() {
            @Override
            public Predicate toPredicate(Root<Unit> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
                if (!StringUtils.hasText(search)) {
                    return null;
                }
                return builder.like(root.get("unit_name"), "%" + search.trim() + "%");
            }
        };
    }

    private static Specification<Unit> hasDonationProgramNameLike(String search) {
        return new Specification<Unit>() {
            @Override
            public Predicate toPredicate(Root<Unit> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
                if (!StringUtils.hasText(search)) {
                    return null;
                }
                return builder.like(root.get("donation_program").get("name"), "%" + search.trim() + "%");
            }
        };
    }

    private static Specification<Unit> hasIdGreaterThanOrEqual(Integer minId) {
        return new Specification<Unit>() {
            @Override
            public Predicate toPredicate(Root<Unit> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
                if (minId == null) {
                    return null;
                }
                return builder.greaterThanOrEqualTo(root.get("id"), minId);
            }
        };
    }

    private static Specification<Unit> hasIdLessThanOrEqual(Integer maxId) {
        return new Specification<Unit>() {
            @Override
            public Predicate toPredicate(Root<Unit> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
                if (maxId == null) {
                    return null;
                }
                return builder.lessThanOrEqualTo(root.get("id"), maxId);
            }
        };
    }
}
