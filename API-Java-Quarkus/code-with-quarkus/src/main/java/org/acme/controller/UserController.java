package org.acme.controller;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.acme.dto.UserDto;
import org.acme.entity.User;
import org.acme.service.UserService;

@Path("users")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class UserController {
    @Inject
    UserService service;

    @GET
    public Response listUsers(){
        List<User> users = service.listUsers();

        return Response.ok(users).build();
    }

    @POST
    public Response saveUser(UserDto dto){
        User user = service.saveUser(dto);

        return Response.ok(user).status(201).build();
    }

    @PUT
    @Path("{id}")
    public Response updateUser(@PathParam("id") Long id, UserDto dto){
        service.updateUser(id, dto);
        
        return Response.status(204).build();
    }

    @DELETE
    @Path("{id}")
    public Response removerUser(@PathParam("id") Long id){
        service.removerUser(id);

        return Response.status(204).build();
    }
}
