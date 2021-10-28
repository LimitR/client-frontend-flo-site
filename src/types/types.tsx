export  interface  IProduct {
    id: number;
    title: string;
    prise: string;
    img: string;
    description_product: string;
    using: number;
    light: number;
    watering_air: number;
    watering: number;
    endurance: number;
    wariness: number;
    available?: boolean | null;
    discount?: boolean | null;
    old_prise?: string | null;
    createdAt?: string;
    updatedAt?: string;

}