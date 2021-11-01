import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import ProductList from "./components/ProductList";
import {IProduct} from "./types/types";
import axios from "axios";
import List from "./components/List";
import ProductItem from "./components/ProductItem";
import {BrowserRouter, Route, Router} from 'react-router-dom'
import UserPage from "./components/UserPage";
import UbautPage from "./components/ubautPage";
import ProductPage from "./components/ProductPage";
import CreateProductPage from "./components/CreateProductPage";

const App = () => {
    const [product, setProduct] = useState<IProduct[]>([])



  return (
      <BrowserRouter>
          <div>
              <div>
                  <Card variant={CardVariant.primary} width='100%' height='50px'>
                  </Card>
              </div>


              <Route path={'/'} exact>
                    <UserPage></UserPage>
              </Route>
              <Route path={'/ubaut'} exact>
                    <UbautPage></UbautPage>
              </Route>
              <Route path={'/product/:id'} exact>
                <ProductPage></ProductPage>
              </Route>
              <Route path={'/add'}>
                  <CreateProductPage></CreateProductPage>
              </Route>
          </div>
      </BrowserRouter>

  )
}

export  default  App;