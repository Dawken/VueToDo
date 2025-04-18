type SubtaskType = {
  id: string;
  name: string;
  completed: boolean;
};

type TaskType = {
  id: string;
  title: string;
  timeSlots: {
    startDate: string;
    endDate: string;
  };
  subtasks: SubtaskType[];
};
export type { TaskType, SubtaskType };
