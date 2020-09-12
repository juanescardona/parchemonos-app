import React, {useEffect, useState} from 'react'
import { Page } from '../Page'
import { Header } from './../../components/Header'
import { CardDetail } from './components/CardDetail'
import { useParams } from 'react-router-dom'
import {EXPERIENCES_DATA} from './../../data/Experiences.Data'
import { Adventure } from '../Home/components/Adventure'
import { Button } from '../../components/Button'

export const Detail = () => {
    
    const { id } = useParams()
    const [adventure, setAdventure] = useState(null)

    //constructor / component did mount 
    useEffect(() => {
        const experience = EXPERIENCES_DATA.find(elemento => elemento.id === Number(id))
        if(experience) setAdventure(experience)
    }, [])

    const clickButton = () => {
        alert('El boton fue presionado ....')
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
                    <Button onPress={clickButton} label="¡Reserva tu parche!"/>
                </>
                :
                <p>Experience no encontrada</p>
            }          
        </Page>
    )
}