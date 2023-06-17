import React, { useContext, useState } from 'react'
import './Tela-Dados.css'

import Header from '../../components/Header/Header';
import ItemCart from '../../components/Item-Cart/ItemCart';

import { DataContext } from '../../contexts/dataContext'

import { Navigate } from 'react-router-dom'

export default function TelaDados() {
    const [changeContent, setChangeContent] = useState(0)
    const { isLoggedIn } = useContext(DataContext)

    return (
        <div>
            {isLoggedIn ? (

                <div>
                    <Header />

                    <div className="container-tela-dados">

                        <div className="title-container-tela-dados">
                            <div className="title">Olá Nome Sobrenome!</div>
                        </div>

                        <div className="options-container">

                            <div className="option-1">
                                <button>
                                    <h2 className='no-scroll'>Carrinho</h2>
                                </button>
                            </div>

                            <div className="option-2">
                                <button>
                                    <h2 className='no-scroll'>Histórico de compras</h2>
                                </button>

                            </div>

                            <div className="option-3">
                                <button>
                                    <h2 className='no-scroll'>Agendados</h2>
                                </button>

                            </div>

                            <div className="option-4">
                                <button>
                                    <h2 className='no-scroll'>Meus dados</h2>
                                </button>
                            </div>

                        </div>

                        <div className="item-cart">
                            <ItemCart />

                            <div className="finish-purchase" >
                                <div className="finish-purchase-values">
                                    <h3>Total: </h3>
                                    <h2 className='no-scroll3'>R$ 100,00</h2>
                                </div>

                                <button>Finalizar Compra</button>
                            </div>

                        </div>

                    </div>
                </div>
            ) : <Navigate to='/login' />}
        </div>
    )
}