export interface ITodo {
  id: string;
  title: string;
  description: string;
  status: string;
  who: {
    id: string;
    name: string;
  };
  dueDate: string;
}
