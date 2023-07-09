package com.vti.service;

import java.io.IOException;
import java.util.Collections;
import java.util.Date;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.vti.dto.LoginInfoUser;
import com.vti.entity.User;
import com.vti.entity.UserStatus;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JWTTokenService {
	
    private static final long EXPIRATION_TIME = 864000000; // 10 days
    private static final String SECRET = "123456";
    private static final String PREFIX_TOKEN = "Bearer";
    private static final String AUTHORIZATION = "Authorization";

    public static void addJWTTokenAndUserInfoToBody(HttpServletResponse response, User user) throws IOException {
        String JWT = Jwts.builder()
                .setSubject(user.getUserName())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
        
        // convert user entity to user dto
        LoginInfoUser userDto = new LoginInfoUser(
        		user.getStatus().equals(UserStatus.ACTIVE) ? JWT : null,
                user.getId(),
        		user.getUserName(), 
        		user.getEmail(), 
        		user.getFirstName(), 
        		user.getLastName(),
        		user.getRole(), 
        		user.getStatus().toString());
        
        // convert object to json
        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
        String json = ow.writeValueAsString(userDto);
        
        // return json
        response.setContentType("application/json;charset=UTF-8");
        response.getWriter().write(json);
    }

    public static Authentication parseTokenToUserInformation(HttpServletRequest request) {
        String token = request.getHeader(AUTHORIZATION);
        
        if (token == null) {
        	return null;
        }
        
        // parse the token
        String username = Jwts.parser()
                .setSigningKey(SECRET)
                .parseClaimsJws(token.replace(PREFIX_TOKEN, ""))
                .getBody()
                .getSubject();

        return username != null ?
                new UsernamePasswordAuthenticationToken(username, null, Collections.emptyList()) :
                null;
    }
}