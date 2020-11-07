import React, {useState, useEffect, useContext } from 'react'
import { Page } from '../Page'
import { Button } from '../../components/Button'
import { validateEmail } from './../../utils/validateEmail'
import { UserContext} from './../../contexts/UserContext'
import { useHistory } from 'react-router-dom'
import { requestHttp } from '../../services/HTTPServer'

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isValidForm, setIsValidForm] = useState(false)
    const {user, setUser} = useContext(UserContext)
    const history = useHistory()

    useEffect(() => {
        setIsValidForm(validateEmail(email) && password !== '' )
    }, [email, password])

    const registerFormHandler = (e) => {
        e.preventDefault()
        const form = {
            email,
            password
        }
        console.log('formulario a enviar', form)
        validateUser(form)
    }

    const validateUser = async(data) => {
        try {
            const response = await requestHttp('post', 'users/login', data)
            setUser({isAuthenticated : true})
            localStorage.setItem('TOKEN', response.token)
            setTimeout(() => {
                history.push(`/`)
            }, 2000 )            
        } catch (error) {
            alert('Usuario no válido')
        }
    }
    /*
    const validateUserEjercicio = () => {
        const emailUser = email
        const passUser = password
        /*Todo: cambiar la variable del usuario (isAuthenticated)
        *a:true, Si y solo si
        *email ="pepito@gmail.com" y contraseña ="123456"
        * y lo redirija al home de la app
        *//*
        if (emailUser === "pepito@gmail.com" && password === "123456"){
            setUser({isAuthenticated : true})
            history.push(`/`)
        } else{
            alert('Login incorrecto')
            setPassword('')
        } 
    }
    */

    return (
        <Page>
            <h3>Formulario de Login</h3>
            <form onSubmit={registerFormHandler} className="form">
                <div>
                    <label>Email</label>
                    <input 
                        value={email} 
                        type="text" 
                        onChange={e =>setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Contraseña</label>
                    <input 
                        value={password} 
                        type="password" 
                        onChange={e =>setPassword(e.target.value)}
                    />
                </div>
                <Button disabled={!isValidForm} label="Enviar Registro" type="submit"/>
            </form>
        </Page>
    )
}

