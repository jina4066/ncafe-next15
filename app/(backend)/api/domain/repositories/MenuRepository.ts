import { MenuSearchCriteria } from "./criteria/MenuSearchCriteria";
import { Menu } from "../entities/Menu";
import { MenuView } from "../entities/MenuView";

export interface MenuRepository {
	// 조회 메소드들
	findAll(criteria: MenuSearchCriteria): Promise<Menu[]>;
	findViewAll(criteria: MenuSearchCriteria): Promise<MenuView[]>;
	findById(id: number): Promise<Menu | null>;
	count(criteria: MenuSearchCriteria): Promise<number>;

	// 조작 메소드들
	save(menu: Menu): Promise<Menu>;
	update(menu: Menu): Promise<Menu>;
}
