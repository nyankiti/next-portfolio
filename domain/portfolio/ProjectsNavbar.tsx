import { FunctionComponent } from "react";
import { Category } from "types/portfolio";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-green";
  // 選択されてい場合は色を変更する
  if (active === value) className += " text-green";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      {/* value, handleFilterCategory, active の3つのpropをそのまま渡してる */}
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="laravel" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
