export interface Item {
  count: number;
  description: string;
  name: string;
}
export interface State {
  items: Item[];
  addItemModalOpen: boolean;
}