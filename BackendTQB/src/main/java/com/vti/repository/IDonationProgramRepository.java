package com.vti.repository;

import com.vti.entity.DonationProgram;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IDonationProgramRepository extends JpaRepository<DonationProgram, Integer>, JpaSpecificationExecutor<DonationProgram> {
    @Query("FROM DonationProgram where name =:name")
    DonationProgram findByName(@Param("name") String name); //! tìm bằng tên chương trình quyên góp
    @Modifying
    @Query("DELETE FROM DonationProgram WHERE name = :name")
    void deleteByName(@Param("name") String name); //! xóa chương trình quyên góp bằng tên

    boolean existsByName(String name);//! check tên tồn tại ko
}
