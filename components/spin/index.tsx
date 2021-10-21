/**
 * @DECS:
 * @AUTH: hy
 * @DATE: 2021-10-21
 */
import Roll from "./components/Roll";

type Spin = {
  Roll: typeof Roll
}

const Spin: Spin = {} as any;

Spin.Roll = Roll;

export default Spin;
