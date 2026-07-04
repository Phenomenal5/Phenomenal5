// Define interface for a Todo item
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Define possible filters with a union type
export type Filter = 'all' | 'active' | 'completed';