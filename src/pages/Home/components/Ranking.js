import React, { useEffect, useState } from 'react'
import { requestHttp } from '../../../services/HTTPServer'
import {Card} from './Card'

export const Ranking = () => {

    const [experiences, setExperiences] = useState([])

    useEffect(() => {
        loadExperiences()
    }, [] ) // Se va a ejecutar solo 1 vez

    const loadExperiences = async() =>{
        try {
            const response = await requestHttp('get', 'experiences/ranking')
            console.log('response', response)
            setExperiences(response.ranking)
        } catch (error) {
            console.log('Error', error)   
        }
    }

    return(
        <section className="ranking-container">
            {
                experiences.map((item, index) => <Card key ={ index} { ...item } />)
            }
        </section>
    )
}