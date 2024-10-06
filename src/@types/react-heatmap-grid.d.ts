declare module "react-heatmap-grid" {
  import React from "react";

  export interface HeatMapGridProps {
    data: number[][];
    xLabels: string[];
    yLabels: string[];
    cellStyle?: (x: number, y: number, value: number) => React.CSSProperties;
    cellRender?: (value: number) => React.ReactNode;
  }

  export class HeatMapGrid extends React.Component<HeatMapGridProps> {}
}
