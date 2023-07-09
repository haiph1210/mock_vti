package com.vti.repository;

import com.vti.entity.DonationProgram;
import com.vti.entity.Unit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IUnitRepository extends JpaRepository<Unit, Integer>, JpaSpecificationExecutor<Unit> {
    @Query("FROM Unit where unitName =:name")
    Unit findByUnitName(@Param("name") String name); //! tìm bằng tên đơn vị quyên góp
}
