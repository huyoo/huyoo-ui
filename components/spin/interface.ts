import React from "react";

export interface SpinProps {
  className?: string
  size?: 'small' | 'default' | 'large';
  style?: React.CSSProperties;
  spinning?: boolean;
}
