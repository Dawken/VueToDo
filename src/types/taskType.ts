type SubtaskType = {
  name: string;
  completed: boolean;
};

type TaskProps = {
  title: string;
  timeSlots: {
    startDate: string;
    endDate: string;
  };
  subtasks: SubtaskType[];
};
export type { TaskProps, SubtaskType };
