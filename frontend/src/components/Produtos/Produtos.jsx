import React from "react";
import './Produtos.css';

import comprar from './img/comprar.svg'

export default function Produtos(props) {
    return (
        <div className="produto">

            <div className="container-img">
                {/* <img src="" alt="" />             */}
            </div>

            <div className="container-text">

                <div className="produto-name">
                    {props.productName}
                </div>

                <div className="produto-price">
                    {props.productPrice}
                </div>
            </div>

            <button className="produto-button">
                <img src={comprar} />
                <p>Adicionar</p>
            </button>

        </div>
    )
}

