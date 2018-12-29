package com.niit.dao;

import java.util.List;

import com.niit.models.User;

public interface FriendDao {
List<User> getAllSuggestedUsers(String email);
}
