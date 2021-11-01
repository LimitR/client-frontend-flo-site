import React, {FC} from 'react';
import {IProduct} from "../types/types";
import "./styles/ProductItem.css"
import {useHistory} from "react-router-dom";

interface ProductItemsProps {
    product: IProduct;
}

const ProductItem: FC<ProductItemsProps> = ({product}) => {
    const dragEvent = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('Перетаскиваешь? ')
    }
    const history = useHistory();
    return (

        <div onDrag={dragEvent} draggable className='product_card_class' key={product.id} >
            <a onClick={()=>history.push('product/' + product.id)}>
            <img className='img_card_style' src={'http://localhost:5000/' + product.img}/>
           <p>Название: {product.title}</p>
            <p>Цена: {product.prise} рублей</p>
            <p>Описание:</p>
            <p>{product.description_product}</p>
            <p></p>
            </a>
        </div>
    );
};

export default ProductItem;