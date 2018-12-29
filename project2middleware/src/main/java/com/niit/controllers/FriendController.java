package com.niit.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.niit.dao.FriendDao;
import com.niit.models.ErrorClazz;
import com.niit.models.User;

@RestController
public class FriendController {
	@Autowired
private FriendDao friendDao;
	@RequestMapping(value="/suggestedusers",method=RequestMethod.GET)
public ResponseEntity<?> getAllSuggestedUsers(HttpSession session)
{
	//CHECK IF THE HTTP REQUEST IS FROM AN AUTHENTICATED USER OR NOT
	String email=(String)session.getAttribute("email");
	if(email==null){
		ErrorClazz errorClazz=new ErrorClazz(6,"Please login...");
		return new ResponseEntity<ErrorClazz>(errorClazz,HttpStatus.UNAUTHORIZED);//login.html
	}
	List<User> suggestedUsers=friendDao.getAllSuggestedUsers(email);
	return new ResponseEntity<List<User>>(suggestedUsers,HttpStatus.OK);
}
}
