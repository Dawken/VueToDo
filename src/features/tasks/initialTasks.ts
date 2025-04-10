export const initialTasks = [
  {
    id: 1,
    title: "Christmas Shopping",
    timeSlots: {
      startDate: "2025-04-12T14:00:00",
      endDate: "2025-04-13T17:00:00",
    },
    subtasks: [
      {
        id: 1,
        name: "Margherita Pizza",
        completed: false,
      },
      { id: 2, name: "Peanut Butter", completed: false },
      {
        id: 3,
        name: "Burrata",
        completed: false,
      },
      { id: 4, name: "Cinnamon Rolls", completed: false },
    ],
  },
  {
    id: 2,
    title: "Gifts",
    timeSlots: {
      startDate: "2025-04-11T16:15:00",
      endDate: "2025-04-12T22:00:00",
    },
    subtasks: [
      {
        id: 1,
        name: "Car toy",
        completed: false,
      },
      { id: 2, name: "Chopper", completed: false },
      {
        id: 3,
        name: "Doll",
        completed: false,
      },
      { id: 4, name: "Sneakers", completed: false },
    ],
  },
];
