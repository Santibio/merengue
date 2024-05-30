export interface Column {
  label: string;
  renderCell: (item: Data) => React.ReactNode;
}

export interface Data {
  id: string;
  name: string;
  deadline: Date;
  type: string;
  isComplete: boolean;
  nodes: number;
}
