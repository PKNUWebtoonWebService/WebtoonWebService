package com.pknuwws.wws.config.swagger;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@OpenAPIDefinition(
        info = @io.swagger.v3.oas.annotations.info.Info(
                title = "WebtoonWebService App API",
                version = "v1",
                description = "WebtoonWebService App API Docs"
        )
)
@RequiredArgsConstructor
@Configuration
public class SwaggerConfiguration {

    @Bean
    public GroupedOpenApi publicApi() {

        String[] paths = {"/api/v1/**"};

        return GroupedOpenApi.builder()
                .group("public-api")
                .pathsToMatch(paths)
                .build();
    }

}