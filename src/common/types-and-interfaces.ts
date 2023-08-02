export interface OneCardProps {
    poster?: string;
    index: number;
    basket: boolean;
    id: number;
    title: string;
    age: number;
    name?: string;
}

export interface HeaderProps {
    openCart: () => void;
}

export interface SnackProps {
    addSnack: boolean;
    setAddSnack: (value: boolean) => void;
}

export interface BasketContainerProps {
    cartOpen: boolean;
    closeCart: () => void;
}