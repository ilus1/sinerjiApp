package com.sinerji;


import com.sinerji.user.User;
import com.sinerji.user.UserRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.Date;
import java.util.Optional;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class UserRepositoryTests {
    @Autowired private UserRepository repo;

    @Test
    public void testAddUser() {
        User user = new User();
        user.setEmail("teste.newUser@gmail.com");
        user.setPassword("12345");
        user.setBirthdate(new Date());
        user.setCpf("12312313216");
        user.setName("Teste");

        User savedUser = repo.save(user);

        Assertions.assertThat(savedUser).isNotNull();
        Assertions.assertThat(savedUser.getId()).isGreaterThan(0);
    }

    @Test
    public void testListAllUsers() {
        Iterable<User> users = repo.findAll();
        Assertions.assertThat(users).hasSizeGreaterThan(0);

        for (User user : users) {
            System.out.println(user);
        }
    }

    @Test
    public void testUpdateUser() {
        Integer userId = 1;
        Optional<User> optionalUser = repo.findById(userId);

        User user = optionalUser.get();
        user.setPassword("5555");
        repo.save(user);

        User updateUser = repo.findById(userId).get();
        Assertions.assertThat(updateUser.getPassword()).isEqualTo("5555");
    }

    @Test
    public void testGetUser() {
        Integer userId = 1;
        Optional<User> optionalUser = repo.findById(userId);

        Assertions.assertThat(optionalUser).isPresent();
    }

    @Test
    public void testDeleteUser() {
        Integer userId = 1;
        repo.deleteAll();

        Iterable optionalUser = repo.findAll();
        Assertions.assertThat(optionalUser).hasSize(0);
    }
}
