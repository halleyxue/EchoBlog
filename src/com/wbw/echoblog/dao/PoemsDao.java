package com.wbw.echoblog.dao;

import java.util.List;

import com.wbw.echoblog.entity.Poems;

public interface PoemsDao {

	public List<Poems> getPoems();

	public void addPoem(Poems itemPoem);

	public List<String> getCatalog();

}
