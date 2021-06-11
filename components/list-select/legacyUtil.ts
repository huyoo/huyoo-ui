import type {CSSMotionProps} from 'rc-motion';
// import type {AnimationType, TransitionNameType} from '../interface';

interface GetMotionProps {
  motion: CSSMotionProps;
  animation?: string;// AnimationType;
  transitionName?: string; //TransitionNameType;
  prefixCls: string;
}

export function getMotion(
  {
    prefixCls,
    motion,
    animation,
    transitionName,
  }: GetMotionProps
): CSSMotionProps {
  if (motion) {
    return motion;
  }

  if (animation) {
    return {
      motionName: `${prefixCls}-${animation}`,
    };
  }

  if (transitionName) {
    return {
      motionName: transitionName,
    };
  }

  return null;
}
