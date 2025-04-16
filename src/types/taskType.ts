type SubtaskType = {
  id: number;
  name: string;
  completed: boolean;
};

type TaskType = {
  id?: number;
  title: string;
  timeSlots: {
    startDate: string;
    endDate: string;
  };
  subtasks: SubtaskType[];
};
export type { TaskType, SubtaskType };
