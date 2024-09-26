import { FontAwesomeType } from '../../infrastructure/font-awesome/font-awesome.type';
import { RoadmapMarkerType } from '../roadmap-marker/roadmap-marker.type';

export interface RoadmapMarkerModel {
  type: RoadmapMarkerType;
  fontAwesomeType: FontAwesomeType;
}

export interface RoadmapModel {
  markers: RoadmapMarkerModel[];
}

export interface RoadmapMarkerViewModel extends RoadmapMarkerModel {
  colStart: number;
  colEnd: number;
  rowStart: number;
  rowEnd: number;
}
