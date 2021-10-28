import  {IProduct} from "../types/types";
import {FC} from "react";
import React from "react";
import ProductItem from "./ProductItem";

interface ProductListProps {
    product: IProduct[]
}

const ProductList: FC<ProductListProps> = ({product}) => {
    return (
        <div>
            {product.map(product =>
                <ProductItem key={product.id} product={product}/>
            )}
        </div>
    );
};

export  default  ProductList