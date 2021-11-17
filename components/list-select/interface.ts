import React from "react";

export type SelectedValueType = string | number;

export type MergedValue = SelectedValueType | undefined

export interface OptionData {
  name: string;
  code: string;
  extra?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;

  [key: string]: any;
}

export type SizeType = 'small' | 'default' | 'large' | undefined;
