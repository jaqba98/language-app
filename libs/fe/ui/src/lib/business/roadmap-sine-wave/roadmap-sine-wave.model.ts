import { FontAwesomeType } from '../../infrastructure/font-awesome/font-awesome.type';
import { GridItemPositionType } from '../../layout/grid-item/grid-item.type';

export interface RoadmapSineWaveMarkerModel {
  type: string;
  fontAwesomeType: FontAwesomeType;
}

export interface RoadmapSineWaveModel {
  markers: RoadmapSineWaveMarkerModel[];
}

export interface RoadmapSineWaveMarkerViewModel extends RoadmapSineWaveMarkerModel {
  colStart: number;
  colEnd: number;
  rowStart: number;
  rowEnd: number;
  positionType: GridItemPositionType;
}
