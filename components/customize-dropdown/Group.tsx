/**
 * @DECS: 下拉，已选择的群组
 * @AUTH: hy
 * @DATE: 2020-09-23
 */
import React from "react";
import {Avatar, List} from "antd";
import {CloseOutlined} from "@ant-design/icons/lib";
import DropdownBox from "./DropdownBox";

export interface GroupProp {
  selectedGroups: any[],
  onRemove: (id: string, item: any) => void;
  floatRight?: boolean;
  style?: React.CSSProperties;
  classname?: string
}

const Group: React.FC<GroupProp> = (
  {
    floatRight = true,
    selectedGroups,
    onRemove,
    style,
    classname
  }
) => {
  if (!selectedGroups.length) return null;

  const content: any = <List
    itemLayout="horizontal"
    dataSource={selectedGroups}
    renderItem={(item: any) => (
      <List.Item extra={<CloseOutlined className='fr' onClick={() => onRemove(item.id, item)}/>}>
        <List.Item.Meta
          style={{width: 350}}
          avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>}
          title={item.title}
          description={item.owner}
        />
      </List.Item>
    )}
  />

  return (
    <DropdownBox floatRight={floatRight}
                 content={content}
                 style={style}
                 classname={classname}>
      已选中群组：{selectedGroups.length}
    </DropdownBox>
  )
}

export default Group;
