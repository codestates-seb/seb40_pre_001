package team001_be.stackoverflowCloneDemo.user.dto;

import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
public class UserLoginDto {
        private String email;
        private String password;

        public UserLoginDto(String email, String password) {
                this.email = email;
                this.password = password;
        }
}