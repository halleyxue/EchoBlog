package com.wbw.echoblog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.wbw.echoblog.entity.ConnUser;
import com.wbw.echoblog.service.ConnUserDaoService;

@RestController
@RequestMapping(value="/admin")
public class LoginController extends BaseController {

	@Autowired
	private ConnUserDaoService daoService;

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String login(@RequestParam(JSONSTR) String json) throws Exception {
		JSONObject jsonObject = JSONObject.parseObject(json);
		String account = jsonObject.getString("account");
		String password = jsonObject.getString("password");
		ConnUser user = new ConnUser();
		System.out.println(account);
		user.setUsername(account);
		user.setPassword(password);
		if (daoService.checkUser(user) != null) {
			return SUCCESS;
		}
		System.out.println("fail");
		return FAIL;

	}

	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public String test() {
		System.out.println("111111");
		return "success";

	}
}
