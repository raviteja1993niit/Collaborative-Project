package com.niit.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.niit.dao.NotificationDao;
import com.niit.models.ErrorClazz;
import com.niit.models.Notification;

@RestController
public class NotificationController {
	@Autowired
private NotificationDao notificationDao;
   @RequestMapping(value="/notificationsnotviewed",method=RequestMethod.GET)
	public ResponseEntity<?> getAllNotificationsNotViewed(HttpSession session){
		String email=(String)session.getAttribute("email");
		if(email==null){
			ErrorClazz errorClazz=new ErrorClazz(6,"Please login...");
    		return new ResponseEntity<ErrorClazz>(errorClazz,HttpStatus.UNAUTHORIZED);//login.html
		}
		List<Notification> notificationsNotViewed= notificationDao.getAllNotificationsNotViewed(email);
		return new ResponseEntity<List>(notificationsNotViewed,HttpStatus.OK);
	}
}