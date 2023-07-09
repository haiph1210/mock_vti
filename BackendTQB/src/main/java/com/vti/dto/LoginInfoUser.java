package com.vti.dto;

public class LoginInfoUser {

    private String token;
    private Integer id;

    private String userName;

    private String email;

    private String firstName;

    private String lastName;

    private String role;

    private String status;

    public LoginInfoUser(String token, Integer id, String userName, String email, String firstName, String lastName, String role,
                         String status) {
        this.token = token;
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.status = status;
    }

    public String getToken() {
        return token;
    }

    public String getUserName() {
        return userName;
    }

    public String getEmail() {
        return email;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getRole() {
        return role;
    }

    public String getStatus() {
        return status;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
