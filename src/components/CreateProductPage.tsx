import React, {FC, useState} from 'react';
import {IProduct} from "../types/types";
import axios from "axios";
import {createDeflateRaw} from "zlib";

const CreateProductPage: FC = () => {
    const [title, setTitle] = React.useState<string>('');
    const [prise, setPrise] = React.useState<string>('');
    const [img, setImg] = React.useState('');
    const [description_product, setDescription_product] = React.useState<string>('');

    const submBtn = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
    }
    const submBtn1 = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setPrise(e.target.value)
    }
    const submBtn2 = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setImg(e.target.value)
    }
    const submBtn3 = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setDescription_product(e.target.value)
    }

    const clickBtn = async (e: React.MouseEvent<HTMLInputElement>)=>{
        await axios.post('http://localhost:5000/product/add', {
            title: title,
            prise: prise,
            description_product: description_product,
        },{
          headers: {
              'Content-Type': 'multipart/form-data'
          }
            })
    }

    return (
        <div className={'productAddForm'}>
            <form>
                <input onChange={submBtn} type="text" name="title" value={title} placeholder="Название" />
                <input onChange={submBtn1} type="text" name="prise" value={prise} placeholder="Стоимость" />
                <input onChange={submBtn3} type="text" name="description_product" value={description_product} placeholder="Описание" />
                <input onClick={clickBtn} type="submit" value="Отправить" />
            </form>
        </div>
    );
};

export default CreateProductPage;