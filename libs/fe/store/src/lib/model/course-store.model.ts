type CourseStoreTaskType = 'blocked' | 'active' | 'done';

interface CourseStoreTaskModel {
  type: CourseStoreTaskType;
}

export interface CourseStoreModel {
  tasks: CourseStoreTaskModel[];
}
