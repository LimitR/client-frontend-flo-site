import React from "react";


export  enum  CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}


interface  CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
}

const Card: React.FC<CardProps> = ({
        width,
        height,
        children,
        variant,

}) => {
    return (
        <div style={{width, height,
            border: variant === CardVariant.outlined ? '1px solid grey' : 'none',
            background: variant === CardVariant.primary ? 'lightgray': ''
        }}>
            <a href={'/'}>Главная</a>
            <a href={'/add'}>Создать товар</a>
            {children}
        </div>
    )
}

export  default  Card;