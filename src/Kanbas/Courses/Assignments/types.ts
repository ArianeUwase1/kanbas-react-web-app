export interface Assignment {
    _id: string;
    title: string;
    description: string;
    points: number;
    due: string;
    available: string;
    availableUntil: string;
    course: string;
  }
  
  export interface AssignmentsState {
    assignments: Assignment[];
  }