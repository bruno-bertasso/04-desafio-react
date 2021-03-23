export interface TFood {
  id: number;
  available: boolean;
  image: string;
  name: string;
  description: string;
  price: number;
}

export interface TModal {
  isOpen: boolean;
  setIsOpen: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
}
