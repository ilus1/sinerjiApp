package com.sinerji.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {
    @Autowired private UserRepository repo;
    @Autowired private UserService service;
    @GetMapping("/users")
    public List<User> showUserList(Model model) {
        List<User> listUsers = service.listaAll();
        model.addAttribute("listUsers", listUsers);

        return listUsers;
    }

    @GetMapping("/users/{id}")
    public User showUserList(@PathVariable("id") Integer id) throws UserNotFoundException {
        User user = service.get(id);
        if (user.getId() != null) {
            return user;
        }
        throw  new UserNotFoundException("Usuário não foi encontrado");
    }


    @PostMapping("/users/new")
    public String newUser(@RequestBody User user) {
        repo.save(user);
        return "Usuário cadastrado com sucesso.";
    }

    @PutMapping("/users/edit/{id}")
    public String showEditForm(@PathVariable("id") Integer id, @RequestBody User modifiedUser) {
        System.out.println("erro");
        try {
            User user = service.get(id);
            if (user != modifiedUser) {
                modifiedUser.setId(id);
                repo.save(modifiedUser);
                return "Edição efetuada com sucesso.";
            }
            return "Edição efetuada com sucesso.";
        } catch (UserNotFoundException e) {
            return "Usuário não encontrado.";
        }

   }

    @DeleteMapping("/users/delete/{id}")
    public String deleteUser(@PathVariable("id") Integer id) {
        try {
            service.delete(id);
            return "Usuário deletado com sucesso.";
        } catch (UserNotFoundException e) {
            return "Usuário não encontrado.";
        }

    }

}
