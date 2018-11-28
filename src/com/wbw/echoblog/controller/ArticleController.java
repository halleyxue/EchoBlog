package com.wbw.echoblog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
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
	
	@RequestMapping(value = "/uploadPoems", method = RequestMethod.POST)
	public String uploadPoems(@RequestParam(JSONSTR) String json) throws Exception {
		JSONObject jsonObject = JSON.parseObject(json);
		String title = jsonObject.getString("title");
		System.out.println(title);
		String poem = jsonObject.getString("poem");
		String remark = jsonObject.getString("remark");
		Poems itemPoem = new Poems();
		itemPoem.setTitle(title);
		itemPoem.setContent(poem);
		itemPoem.setRemark(remark);
		poemService.addPoem(itemPoem);
		return SUCCESS;
	}

	@RequestMapping(value = "/getCatalog", method = RequestMethod.POST)
	public String getCatalog() throws Exception {
		List<String> catalogList = poemService.getCatalog();
		String catalog = JSON.toJSONString(catalogList);
		return catalog;	
	}
	
	@RequestMapping(value = "/getPoemByName", method = RequestMethod.POST)
	public String getPoemByName(@RequestParam(JSONSTR) String json) throws Exception {
		JSONObject jsonObject = JSON.parseObject(json);
		String name = jsonObject.getString("name");
		Poems poem = poemService.getPoemByName(name);
		System.out.println(poem.getTitle());
		return JSON.toJSONString(poem);	
	}
}
