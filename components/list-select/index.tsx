import React from "react";
import Container from "./Container";
import {basePrefixCls} from "../utils/util";
import OptionList from "./OptionList";
import {MergedValue, OptionData, SizeType} from "./interface";
import Trigger from "./Trigger";
import SizeContext from "antd/lib/config-provider/SizeContext";

const prefixCls = `${basePrefixCls}-list-select`;

export interface ListSelectProp<OptionsType> {
  /**
   * @description 支持清除
   * @default false
   */
  allowClear?: boolean;

  /**
   * @description 选择器类名
   */
  className?: string;

  /**
   * @description 数据化配置选项内容
   */
  options: Array<OptionsType>;

  /**
   * @description 指定默认选中的条目
   */
  defaultValue?: string | number;

  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * @description 唯一键
   * @default name
   */
  itemKey?: string;

  /**
   * @description 设置弹窗滚动高度
   * @default 256
   */
  listHeight?: number;

  /**
   * @description 行高，用于列表虚拟化，非必要勿用
   * @default 69
   */
  listItemHeight?: number;

  /**
   * @description 加载中
   */
  loading?: boolean;

  /**
   * @description 选中 option 的回调
   */
  onChange?: (value: string | number, record?: OptionsType) => void;

  /**
   * @description 选择框默认文本
   */
  placeholder?: string;

  /**
   * @description
   * @default default
   */
  size?: 'small' | 'default' | 'large'

  /**
   * @description 样式
   */
  style?: React.CSSProperties;

  /**
   * @description 指定当前选中的条目
   */
  value?: string | number;

  /**
   * @description 是否开启虚拟化
   * @default true
   */
  virtual?: boolean
}

export default function ListSelect<OptionsType extends OptionData>(props: ListSelectProp<OptionsType>) {
  const {
    options,
    className,
    style,
    onChange,
    value,
    defaultValue,
    disabled,
    loading,
    allowClear,
    placeholder,

    itemKey = "name",
    listHeight = 256,
    listItemHeight = 69,
    virtual = true,
    size: customizedSize
  } = props;
  const size = React.useContext(SizeContext);
  const mergedSize = (customizedSize || size) as SizeType;

  // ============================== OptionList ==============================
  const [mergedValue, setMergedValue] = React.useState<MergedValue>(value || defaultValue);

  const valueSet = React.useMemo(() => new Set(mergedValue === undefined ? undefined : [mergedValue]), [mergedValue])

  const isMount = React.useRef(false);

  React.useEffect(() => {
    if (!isMount.current) {
      isMount.current = true
      return;
    }

    if (value !== undefined) {
      setMergedValue(value);
    }
  }, [value]);

  // ============================== OptionList ==============================
  const [open, setOpen] = React.useState(false);


  const handleSelect = (option?: OptionsType) => {
    let newSelectedValue = undefined;

    // TODO refactor this branch
    if (option !== undefined) {
      if (option.hasOwnProperty(itemKey)) {
        newSelectedValue = option[itemKey];
      }
    }

    onChange && onChange(newSelectedValue, option);
    setMergedValue(newSelectedValue);
    setOpen(false)
  }

  const newPopupNode = (
    <OptionList<OptionsType>
      height={listHeight}
      itemHeight={listItemHeight}
      itemKey={itemKey}
      data={options as any}
      prefixCls={prefixCls}
      onSelect={handleSelect}
      values={valueSet}
      open={open}
      virtual={virtual}
    />
  )

  return (
    <Container
      prefixCls={prefixCls}
      popupNode={newPopupNode}
      visible={open}
      onToggleOpen={setOpen}
    >
      <Trigger
        prefixCls={prefixCls}
        disabled={disabled}
        value={mergedValue}
        className={className}
        style={style}
        size={mergedSize}
        loading={loading}
        allowClear={allowClear}
        placeholder={placeholder}
        onClean={() => handleSelect(undefined)}
      />
    </Container>
  )
}
