import React, { useState, useContext } from 'react'
import Paws from '../../components/assets/patas.svg'
import Logo from '../../components/assets/logo.svg'
import './Login.css'
import api from '../../services/api'
import { toast } from 'react-toastify'
import { DataContext } from '../../contexts/dataContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setIsLoggedIn, setUserData } = useContext(DataContext)
    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            const { data } = await api.post('/login/', { email, password })
            console.log(data);
            toast(data.msg)
            const userData = data.user
            setUserData(userData)
            localStorage.setItem('userData', JSON.stringify(userData))
            localStorage.setItem('isLoggedIn', true)
            setIsLoggedIn(true)
            navigate('/')
        } catch (err) {
            const data = err.response.data.msg
            toast(data)
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
            <div className="navbar2">
                <Link className='link' to="/">
                    <p>Inicio</p>
                </Link>
                <Link className='link' to="/login">
                    <p>Login</p>
                </Link>
                <Link className='link' to="/register">
                    <p>Cadastro</p>
                </Link>
            </div>
            <form action="" className="form">
                <h2>Login</h2>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <button onClick={(e) => handleClick(e)}>Entrar</button>
            </form>
            <div />
        </div>
    </div>
  )
}

export default Login