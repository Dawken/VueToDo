type SubtaskType = {
  name: string;
  completed: boolean;
};

type TaskProps = {
  id: number;
  title: string;
  timeSlots: {
    startDate: string;
    endDate: string;
  };
  subtasks: SubtaskType[];
};
export type { TaskProps, SubtaskType };
