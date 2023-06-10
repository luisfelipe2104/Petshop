import React, { useState } from 'react'
import Paws from '../../components/assets/patas.svg'
import Logo from '../../components/assets/logo.svg'
import './Register.css'
import api from '../../services/api'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleClick = async (e) => {
        e.preventDefault()
        console.log(email, password);
        if (password === confirmPassword) {
            try {
                const { data }  = await api.post('/create-user/', { name, email, password })
                console.log(data);
                toast(data.msg)
            } catch (err) {
                const data = err.response.data.msg
                const array = Object.values(data)
                for (let i = 0; i < array.length; i++) {
                    const errMessage = array[i][0]
                    toast(errMessage)
                }
            }
        } else {
            alert('As senhas não coincidem!')
        }
    }

  return (
    <div className='login-container'>
        <div className="welcome-container">
            <div className="logo-container">
                <img className='logo' src={Logo} />
            </div>

            <div className="impact-phrase">
                <p>Seu <p className='yellow-word'> mundo animal</p> em <p className='yellow-word'>um lugar só</p></p>
            </div>

            <div className="paws-container">
                <img className='paws' src={Paws} />
            </div>
        </div>

        <div className="form-container">
            <div className="navbar">
                <p>Inicio</p>
                <p>Login</p>
                <p>Cadastro</p>
            </div>
            <form action="" className="form">
                <h2>Cadastro</h2>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nome" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha" />
                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Repetir senha" />
                <button onClick={(e) => handleClick(e)}>Cadastrar</button>
            </form>
            <div />
        </div>
        
    </div>
  )
}

export default Register