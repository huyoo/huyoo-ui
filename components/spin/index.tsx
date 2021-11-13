import Roll from "./components/Roll";
import CubeGrid from "./components/CubeGrid";
import CubeFill from "./components/CubeFill";
import DotBound from "./components/DotBound";

type Spin = {
  Roll: typeof Roll,
  CubeGrid: typeof CubeGrid,
  CubeFill: typeof CubeFill,
  DotBound: typeof DotBound;
}

const Spin: Spin = {} as any;

Spin.Roll = Roll;
Spin.CubeGrid = CubeGrid;
Spin.CubeFill = CubeFill;
Spin.DotBound = DotBound;

export default Spin;
