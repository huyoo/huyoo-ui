import Roll from "./components/Roll";
import CubeGrid from "./components/CubeGrid";

type Spin = {
  Roll: typeof Roll,
  CubeGrid: typeof CubeGrid
}

const Spin: Spin = {} as any;

Spin.Roll = Roll;
Spin.CubeGrid = CubeGrid;

export default Spin;
