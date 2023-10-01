import "./category-menu.styles.scss";
import CategoryItem from "../directory-item/directory-item.component";
const CategoryMenu = ({ categories }) => {
  return (
    <div className="categories-menu">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};
export default CategoryMenu;
