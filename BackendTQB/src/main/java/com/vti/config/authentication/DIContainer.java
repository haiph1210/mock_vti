package com.vti.config.authentication;

import com.vti.dto.UnitCreateForm;
import com.vti.entity.Unit;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class DIContainer {
    @Bean
    public ModelMapper provideModelMapper() {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.typeMap(UnitCreateForm.class, Unit.class)
                .addMappings(mapper -> mapper.skip(Unit::setId));
        return modelMapper;
    }

}
