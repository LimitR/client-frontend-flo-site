import React, {FC, useEffect, useState} from 'react';
import {IProduct} from "../types/types";
import axios from "axios";
import List from "./List";
import ProductItem from "./ProductItem";
import {useParams} from "react-router-dom";

interface PriductParametrPage{
    id: string
}

const ProductPage: FC = () => {
    const [product, setProduct] = useState<IProduct | null> (null)

    const parame = useParams<PriductParametrPage>()

    useEffect(()=>{
        fetchProduct()
    }, [])
    async function  fetchProduct(){
        try{

            const response = await axios.get<IProduct>('http://localhost:5000/product/path/' + parame.id)
            setProduct(response.data)

        }catch (e){
            alert(e)
        }
    }

    console.log(product)
    return (
        <div key={product?.id} >
            <img className='img_card_style' src={'http://localhost:5000/' + product?.img}/>
            <p>Название: {product?.title}</p>
            <p>Цена: {product?.prise} рублей</p>
            <p>Описание:</p>
            <p>{product?.description_product}</p>
        </div>
    );

};

export default ProductPage;