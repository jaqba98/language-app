import { RoadmapMarkerType } from '../roadmap-marker/roadmap-marker.type';

export interface RoadmapMarkerModel {
  type: RoadmapMarkerType;
  // TODO: I am here
}

export interface RoadmapModel {
  markers: RoadmapMarkerModel[];
}
