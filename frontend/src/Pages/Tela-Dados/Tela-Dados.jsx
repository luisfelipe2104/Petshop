import React, { useContext, useState } from 'react'
import './Tela-Dados.css'

import Header from '../../components/Header/Header';
import ItemCart from '../../components/Item-Cart/ItemCart';
import Appointments from '../../components/Appointments/Appointments';

import { DataContext } from '../../contexts/dataContext'

import { Navigate } from 'react-router-dom'

import api from '../../services/api'
import { useEffect } from 'react';

export default function TelaDados() {
    const [changeContent, setChangeContent] = useState(0)
    const [appointments, setAppointments] = useState(null)
    const { isLoggedIn, userData } = useContext(DataContext)

    const getAppointments = async () => {
        const { data } = await api.get(`/get-appointments/${userData[0].id}`)
        setAppointments(data)
        console.log(data);
    }

    useEffect(() => {
        getAppointments()
    }, [])

    return (
        <div>
            {isLoggedIn ? (

                <div style={{backGroundColor: '#F5F5F5;'}}> 
                    <Header />

                    <div className="container-tela-dados">

                        <div className="title-container-tela-dados">
                            <div className="title">Olá {userData[0].name}!</div>
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
                    {appointments ? (
                        <Appointments data={appointments} />
                    ) : (
                        <div>
                            <p>loading...</p>
                        </div>
                    )}
                    </div>
                </div>
            ) : <Navigate to='/login' />}
        </div>
    )
}