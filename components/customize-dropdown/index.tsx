/**
 * @DECS: 下拉菜单集合
 * @AUTH: hy
 * @DATE: 2020-09-23
 */
import DropdownBox from "./DropdownBox";
import Group from "./Group";

type CustomizeDropdownType = typeof DropdownBox;

interface CustomizeDropdownInterface extends CustomizeDropdownType{
  Group: typeof Group;
}

const CustomizeDropdown = DropdownBox as CustomizeDropdownInterface;

CustomizeDropdown.Group = Group;

export default CustomizeDropdown;
// export const GroupListDrop = Group;
