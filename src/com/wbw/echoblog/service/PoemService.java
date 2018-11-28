package com.wbw.echoblog.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wbw.echoblog.dao.PoemsDao;
import com.wbw.echoblog.entity.Poems;

@Service
public class PoemService implements PoemsDao{
	@Autowired
	private PoemsDao poemsDao;

	public List<Poems> getPoems() {
		return poemsDao.getPoems();
	}

	public void addPoem(Poems itemPoem) {
		poemsDao.addPoem(itemPoem);	
		
	}

	public List<String> getCatalog() {
		return poemsDao.getCatalog();
	}

	public Poems getPoemByName(String name) {
		return poemsDao.getPoemByName(name);
	}

}
