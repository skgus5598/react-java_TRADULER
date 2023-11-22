/*
package com.raina.traduler.auth;

import io.jsonwebtoken.*;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

@Slf4j
@Component
@RequiredArgsConstructor
public class JwtConfig {

    private static final long ACCESS_TOKEN_EXPIRE_TIME = 1000 * 60 * 30; // 30mins
    private final UserDetailsService userDetailsService;



    @Value("${jwt.secretKey}")
    private String secretKey;

    //Generate Access Token
    public String createToken(String userId, java.util.Collection<? extends GrantedAuthority> authorities){
        Claims claims = Jwts.claims().setSubject(userId);
        claims.put("roles", authorities);
        Date now = new Date();
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + ACCESS_TOKEN_EXPIRE_TIME))
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }
    // JWT 토큰에서 인증 정보 조회
    public Authentication getAuthentication(String token){
        String userId = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
        UserDetails userDetails = userDetailsService.loadUserByUsername(userId);
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }

//   request의 Header에서 token 값을 가져옵니다. "X-AUTH-TOKEN" : "TOKEN값'
//    public String resolveToken(HttpServletRequest request) {
//        return request.getHeader("X-AUTH-TOKEN");
//    }
//
    // 토큰의 유효성 + 만료일자 확인
    public boolean validateToken(String jwtToken) {
        try {
            Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(jwtToken);
            return claims.getBody().getExpiration().before(new Date()) == false;
        } catch (SecurityException | MalformedJwtException e) {
            log.info("Invalid JWT Token", e);
        } catch (ExpiredJwtException e){
            log.info("Expired JJWT Token", e);
        } catch (UnsupportedJwtException e){
            log.info("Unsupported JWT Token", e);
        } catch (IllegalArgumentException e){
            log.info("JWT claims string is empty", e);
        }
        return false;
    }


}
*/