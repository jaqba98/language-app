import { FontAwesomeType } from '../../infrastructure/font-awesome/font-awesome.type';
import { GridItemPositionType } from '../../layout/grid-item/grid-item.type';
import { RoadmapMarkerType } from '../roadmap-marker/roadmap-marker.type';

export interface RoadmapSineWaveMarkerModel {
  type: RoadmapMarkerType;
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
