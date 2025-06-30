import Input from "@/app/components/Input";
import styles from "./FilterForm.module.scss";
import Link from "next/link";

const {
	["menu-filter-box"]: menuFilterBox,
	["search-form"]: searchForm,
	["category-menu"]: categoryMenu,
	["category-list"]: categoryList,
	active
} = styles;

const FilterForm = () => {
	return (
		<div className={menuFilterBox}>
			<section className={searchForm}>
				<h1 className="d:none">Menu Filter Panel</h1>
				<h2>NCafe Menu</h2>
				<form action="/menus" method="get">
					<Input />
					<button type="button" className="n-icon n-icon:search">
						검색
					</button>
				</form>
			</section>
			<section className={categoryMenu}>
				<h1>카테고리 메뉴</h1>
				<ul className={categoryList}>
					<li className={active}>
						<Link href="menus">전체</Link>
					</li>
					<li>
						<Link href="menus?c=1">카테고리A</Link>
					</li>
					<li>
						<Link href="menus?c=2">카테고리B</Link>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default FilterForm;
