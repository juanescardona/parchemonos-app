import React, {useState, useEffect } from 'react'
import { Page } from '../Page'
import { Button } from '../../components/Button'
import { validateEmail } from './../../utils/validateEmail'
import { useHistory } from 'react-router-dom'
import { requestHttp } from '../../services/HTTPServer'

export const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [document, setDocument] = useState('')
    const [password, setPassword] = useState('')
    const [isValidForm, setIsValidForm] = useState(false)
    const history = useHistory()

    useEffect(() => {
        setIsValidForm(name !== '' && validateEmail(email) && document !== '' && password !== '' && phone !== '')
    }, [name, email, document, password, phone])

    const registerFormHandler = (e) => {
        e.preventDefault()
        const form = {
            name,
            email,
            phone,
            document,
            password
        }
        console.log('formulario a enviar', form)
        registerUser(form)
    }

    const registerUser = async(data) => {
        try {
            const response = await requestHttp('post', 'users/signup', data)
            console.log('user:', response.user)
            setTimeout(() => {
                history.push(`/`)
            }, 2000 )       
        } catch (error) {
            alert('Usuario no registrado')
        }
    }

    return (
        <Page>
            <h3>Formulario de Registro</h3>
            <form onSubmit={registerFormHandler} className="form">
                <div>
                    <label>Nombre completo</label>
                    <input 
                        value={name} 
                        type="text" 
                        onChange={e =>setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input 
                        value={email} 
                        type="text" 
                        onChange={e =>setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Teléfono/Celular</label>
                    <input 
                        value={phone} 
                        type="text" 
                        onChange={e =>setPhone(e.target.value)}
                    />
                </div>
                <div>
                    <label>Cédula</label>
                    <input 
                        value={document} 
                        type="text" 
                        onChange={e =>setDocument(e.target.value)}
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

