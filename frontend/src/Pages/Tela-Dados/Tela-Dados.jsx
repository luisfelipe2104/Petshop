import React, {useState} from 'react'
import './Tela-Dados.css'

import Header from '../../components/Header/Header'

export default function TelaDados() {
    const [changeContent, setChangeContent] = useState(0)

    return (
        <div>
            <Header />

            <div className="container-tela-dados">

                <div className="title-container-tela-dados">
                    <div className="title">Olá Nome Sobrenome!</div>
                </div>

                <div className="options-container">

                    <div className="option-1">
                        <button>
                            <h2>Carrinho</h2>
                        </button>
                    </div>

                    <div className="option-2">
                        <button>
                            <h2>Histórico de compras</h2>
                        </button>

                    </div>

                    <div className="option-3">
                        <button>
                            <h2>Agendados</h2>
                        </button>

                    </div>

                    <div className="option-4">
                        <button>
                            <h2>Meus dados</h2>
                        </button>
                    </div>

                </div>

                <div className="teste"></div>

            </div>
        </div>
    )
}