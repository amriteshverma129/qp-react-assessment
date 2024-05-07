export interface Task {
  id: number;
  description: string;
  completed: boolean;
}

export interface TaskListProps {
  tasks: Task[];
}
