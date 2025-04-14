import type { TaskType } from "./TaskType";

export type DayType = {
  date: Date;
  formatted: string;
  tasks: TaskType[];
};
