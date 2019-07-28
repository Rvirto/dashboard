
import { GridsterConfigS } from 'angular-gridster2/lib/gridsterConfigS.interface';

export class PropriedadesDashboard implements GridsterConfigS {
  [propName: string]: any;
  gridType: import ('angular-gridster2/lib/gridsterConfig.interface').gridTypes;
  fixedColWidth: number;
  fixedRowHeight: number;
  keepFixedHeightInMobile: boolean;
  keepFixedWidthInMobile: boolean;
  setGridSize: boolean;
  compactType: import ('angular-gridster2/lib/gridsterConfig.interface').compactTypes;
  mobileBreakpoint: number;
  minCols: number;
  maxCols: number;
  minRows: number;
  maxRows: number;
  defaultItemCols: number;
  defaultItemRows: number;
  maxItemCols: number;
  maxItemRows: number;
  minItemCols: number;
  minItemRows: number;
  minItemArea: number;
  maxItemArea: number;
  margin: number;
  outerMargin: boolean;
  outerMarginTop: number;
  outerMarginRight: number;
  outerMarginBottom: number;
  outerMarginLeft: number;
  useTransformPositioning: boolean;
  scrollSensitivity: number;
  scrollSpeed: number;
  draggable: import ('angular-gridster2/lib/gridsterConfigS.interface').Draggable;
  resizable: import ('angular-gridster2/lib/gridsterConfigS.interface').Resizable;
  swap: boolean;
  pushItems: boolean;
  disablePushOnDrag: boolean;
  disablePushOnResize: boolean;
  disableAutoPositionOnConflict: boolean;
  pushDirections: import ('angular-gridster2/lib/gridsterConfigS.interface').PushDirections;
  pushResizeItems: boolean;
  displayGrid: import ('angular-gridster2/lib/gridsterConfig.interface').displayGrids;
  disableWindowResize: boolean;
  disableWarnings: boolean;
  scrollToNewItems: boolean;
  disableScrollHorizontal?: boolean;
  disableScrollVertical?: boolean;
  enableEmptyCellClick: boolean;
  enableEmptyCellContextMenu: boolean;
  enableEmptyCellDrop: boolean;
  enableEmptyCellDrag: boolean;
  emptyCellDragMaxCols: number;
  emptyCellDragMaxRows: number;
  ignoreMarginInRow: boolean;
  api: {
    resize: () => void;
    optionsChanged: () => void;
    getNextPossiblePosition: (
      newItem: import ('angular-gridster2').GridsterItem
    ) => boolean;
    getFirstPossiblePosition: (
      item: import ('angular-gridster2').GridsterItem
    ) => import ('angular-gridster2').GridsterItem;
    getLastPossiblePosition: (
      item: import ('angular-gridster2').GridsterItem
    ) => import ('angular-gridster2').GridsterItem;
  };
}
