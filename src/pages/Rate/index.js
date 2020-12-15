import React, { useState, useEffect } from 'react'
import { Page } from '../Page'
import { Button } from '../../components/Button'
import { useParams, useHistory } from 'react-router-dom'
import { requestHttp } from '../../services/HTTPServer'

export const Rate = () =>{

    const{ id } = useParams()
    const [stars, setStars] = useState(0)
    const [comment, setComment] = useState('')
    const [isValidForm, setIsValidForm] = useState(false)
    const size = "32px"
    const history = useHistory()

    const StarEmpty = ({ size, idStar }) => (
        <ion-icon onClick={() => setStars(idStar)} style={{fontSize: size}} name="star-outline"></ion-icon>
    )

    const  StarFill = ({ size, idStar }) => (
        <ion-icon onClick={() => setStars(idStar)} style={{fontSize: size}} name="star"></ion-icon>
    )

    useEffect(() => {
        setIsValidForm(stars > 0 && comment !== '')
    }, [stars, comment])

    const rateFormHandler = (e) => {
        e.preventDefault()
        const form = {
            rate: {
                score: stars,
                comment: comment
            }
        }
        console.log('formulario a enviar', form)
        rateExperience(form)
    }

    const rateExperience = async(data) =>{
        try {
            const response = await requestHttp('post', `booking/rate/${id}`, data)
            alert('Calificación realizada')
            history.push(`/`)
        } catch (error) {
            alert('No se realizó la calificación')
        }
    }

    return (
        <Page>
            <h3>Calificar experiencia</h3>
            <br />
            <div>
                <form onSubmit={rateFormHandler} className="form">                
                    <section className="score">
                        <div>
                            {
                                [1,2,3,4,5].map((el, key) => el <= stars ? <StarFill key={key} size={size} idStar={el} /> : <StarEmpty key={key} size={size} idStar={el} />)
                            }
                        </div>
                    </section>
                    <br />
                    <br />
                    <textarea name="CommentExperience" rows="10" cols="50" onChange={e =>setComment(e.target.value)}>Comenta tu experiencia</textarea>                    
                    <Button disabled={!isValidForm} label="Calificar" type="submit"/>                
                </form>
            </div>
        </Page>
    )
}