package com.wbw.echoblog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSON;
import com.wbw.echoblog.entity.Poems;
import com.wbw.echoblog.service.PoemService;

@RestController
@RequestMapping(value="/admin")
public class ArticleController extends BaseController{
	
	@Autowired
	private PoemService poemService;
	
	@RequestMapping(value = "/getPoems", method = RequestMethod.POST)
	public String getPoems() throws Exception {
		List<Poems> list = poemService.getPoems();
		String poems = JSON.toJSONString(list);
		System.out.println(list.get(0).getContent());
		return poems;
		
	}

}
