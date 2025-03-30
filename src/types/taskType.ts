type ShoppingList = {
  totalItems: number;
  completedItems: number;
  items: {
    name: string;
    completed: boolean;
  }[];
};

type TaskProps = {
  title: string;
  timeSlots: {
    startDate: string;
    endDate: string;
  };
  shoppingList: ShoppingList;
};
export type { TaskProps };
