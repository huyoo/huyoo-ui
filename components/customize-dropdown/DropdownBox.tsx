/**
 * @DECS: 下拉菜单-容器
 * @AUTH: hy
 * @DATE: 2020-09-23
 */
import React from "react";
import {Button, Popover} from "antd";
import {CaretDownOutlined} from "@ant-design/icons/lib"

export interface DropdownBoxProp {
  floatRight?: boolean;
  content: React.ReactNode | string | number;
  style?: React.CSSProperties;
  classname?: string
}

const DropdownBox: React.FC<DropdownBoxProp> = (
  {
    floatRight = true,
    content,
    children,
    style,
    classname
  }
) => {
  return (
    <Popover placement="bottom" content={content} trigger='click'>
      <Button className={'member-list-btn ' + classname} style={style}>
        {children}<CaretDownOutlined/>
      </Button>
    </Popover>
  )
}

export default DropdownBox;
