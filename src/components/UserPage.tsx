import React, {FC, useEffect, useState} from 'react';
import axios from "axios";
import {IProduct} from "../types/types";
import ProductItem from "./ProductItem";
import List from "./List";

const UserPage: FC = () => {
    const [product, setProduct] = useState<IProduct[]>([])


    useEffect(()=>{
        fetchProduct()
    }, [])
    async function  fetchProduct(){
        try{

            const response = await axios.get<IProduct[]>('http://localhost:5000/product')
            setProduct(response.data)

        }catch (e){
            alert(e)
        }
    }

    return (
        <List
            items={product}
            renderItem={(product: IProduct)=> <ProductItem product={product} key={product.id}/>}
        />
    );
};

export default UserPage;