import Roll from "./components/Roll";
import CubeGrid from "./components/CubeGrid";
import CubeFill from "./components/CubeFill";

type Spin = {
  Roll: typeof Roll,
  CubeGrid: typeof CubeGrid,
  CubeFill: typeof CubeFill
}

const Spin: Spin = {} as any;

Spin.Roll = Roll;
Spin.CubeGrid = CubeGrid;
Spin.CubeFill = CubeFill;

export default Spin;
