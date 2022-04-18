package com.sinerji.user;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import java.util.Date;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    //[a-zA-záÁàÀéÉíÍóÓãõẽâôê]
    @Pattern(regexp = "^[a-zA-Z0-9]{6,30}@[a-zA-Z0-9]{3,6}\\.[a-zA-Z0-9]{3,4}(\\.[a-zA-Z0-9]{2,4})?$")
    @Column(nullable = false, unique = true, length = 45)
    private String email;

    @Pattern(regexp = "^[\d]{11}$")
    @Column(nullable = false, unique = true, length = 45)
    private String cpf;

    @Column(nullable = false, length = 255)
    private String name;

    @Column(nullable = true, length = 255)
    private String password;

    @Column(nullable=true)
    private Date birthdate;

    public User() {
    }

    public User(String email, String cpf, String name, String password, Date birthdate) {
        this.email = email;
        this.cpf = cpf;
        this.name = name;
        this.password = password;
        this.birthdate = birthdate;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public Integer getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getCpf() {
        return cpf;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", cpf='" + cpf + '\'' +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", birthdate=" + birthdate +
                '}';
    }
}
