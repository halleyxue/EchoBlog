package com.wbw.echoblog.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wbw.echoblog.dao.UserDao;
import com.wbw.echoblog.entity.ConnUser;

@Service
public class ConnUserDaoService implements UserDao{
	
	@Autowired
	private UserDao userDao;

	public ConnUser checkUser(ConnUser user) {
		return userDao.checkUser(user);
	}

}
