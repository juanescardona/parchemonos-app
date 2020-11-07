import React, {useEffect, useState, useContext} from 'react'
import { Page } from '../Page'
import { Header } from './../../components/Header'
import { CardDetail } from './components/CardDetail'
import { useParams,useHistory } from 'react-router-dom'
import { requestHttp } from '../../services/HTTPServer'
import { Button } from '../../components/Button'
import {UserContext} from './../../contexts/UserContext'

export const Detail = () => {
    
    const { id } = useParams()
    const history = useHistory()
    const [adventure, setAdventure] = useState(null)
    const  {user} = useContext(UserContext)

    //constructor / component did mount 
    useEffect(() => {
        loadDetail()
    }, [id])

    const goToBookingHandler = () => {
        if(user.isAuthenticated){
            history.push(`/booking/${id}`)
        }else{
            history.push(`/login`)
        }
    }

    const loadDetail = async() =>{
        try {
            const response = await requestHttp('get', `experiences/detail/${id}`)
            console.log('response', response)
            setAdventure(response.experience)
        } catch (error) {
            console.log('Error', error)   
        }
    }

    //retorna el jsx
    return(
        <Page>
            {
                adventure !== null
                ?
                <>
                    <Header title={adventure.title} />
                    <CardDetail {...adventure} />
                    <Button onPress={goToBookingHandler} label="¡Reserva tu parche!"/>
                    {user.name}                    
                </>
                :
                <p>Experience no encontrada</p>
            }          
        </Page>
    )
}