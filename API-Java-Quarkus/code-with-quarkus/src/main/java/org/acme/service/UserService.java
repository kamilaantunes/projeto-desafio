package org.acme.service;

import java.util.List;
import java.util.Optional;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;

import org.acme.dto.UserDto;
import org.acme.entity.User;

@ApplicationScoped
public class UserService {
    public List<User> listUsers(){
        return User.listAll();
    }

    @Transactional      // Persistência do CURD
    public User saveUser(UserDto dto){
        User user = new User();

        user.setNome(dto.getNome());
        user.setLastNome(dto.getLastNome());
        user.setIdade(dto.getIdade());
        user.setCidade(dto.getCidade());
        user.setEstado(dto.getEstado());
        user.setEscolaridade(dto.getEscolaridade());
        user.setIdade(dto.getIdade());

        user.persist();

        return user;
    }

        // Update
    @Transactional
    public void updateUser(Long id, UserDto dto){
        User user = new User();

        Optional<User> userOp = User.findByIdOptional(id);
        
        if (userOp.isEmpty()){
            throw new NullPointerException("Usuário não encontrado!");
        }

        user = userOp.get();

        user.setNome(dto.getNome());
        user.setLastNome(dto.getLastNome());
        user.setIdade(dto.getIdade());
        user.setCidade(dto.getCidade());
        user.setEstado(dto.getEstado());
        user.setEscolaridade(dto.getEscolaridade());
        user.setIdade(dto.getIdade());

        user.persist();
    }

    @Transactional
    public void removerUser(Long id){
        Optional<User> userOp = User.findByIdOptional(id);

        if (userOp.isEmpty()){
            throw new NullPointerException("Usuário não encontrado");
        }

        User user = userOp.get();

        user.delete();
    }
}
