import React from 'react'
import { Adventure } from './Adventure'

const experiences=[
    {   
        id: 1,
        image: 'https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/US-597853_4722_R.jpg',
        name: 'Senderismo',
        place: 'Envigado',
        price: '89.000',
        stars: 2,
        users: '209'
    },
    {
        id: 2,
        image: 'https://www.justcheckin.com.mx/wp-content/uploads/2018/10/escalada-actividad-aventura-turismo-aventuras-empresas-exploramas-1.jpg',
        name: 'Escala las montañas del oriente',
        place: 'San Carlos',
        price: '509.000',
        stars: 4,
        users: '259'
    },
    {
        id: 3,
        image: 'https://noticiasleticia.co/wp-content/uploads/2020/07/img_79e2f081fb4234c8bbd92fe2e3de33ca.jpg',
        name: 'Mirador de Palmas',
        place: 'Medellin',
        price: '99.000',
        stars: 5,
        users: '434'
    },
    {
        id: 4,
        image: 'https://elpais.com/elpais/imagenes/2019/03/01/viajero_astuto/1551460921_336112_1551693736_noticia_grande.jpg',
        name: 'Kayak en corrientes rápidas',
        place: 'San Rafael',
        price: '499.000',
        stars: 1,
        users: '256'
    },
    {
        id: 5,
        image: 'https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/US-597853_4722_R.jpg',
        name: 'Senderismo',
        place: 'Envigado',
        price: '90.000',
        stars: 3,
        users: '189'
    },
    {
        id: 6,
        image: 'https://www.justcheckin.com.mx/wp-content/uploads/2018/10/escalada-actividad-aventura-turismo-aventuras-empresas-exploramas-1.jpg',
        name: 'Escala las montañas del oriente',
        place: 'San Carlos',
        price: '509.000',
        stars: 0,
        users: '209'
    },
    {
        id: 7,
        image: 'https://noticiasleticia.co/wp-content/uploads/2020/07/img_79e2f081fb4234c8bbd92fe2e3de33ca.jpg',
        name: 'Mirador de Palmas',
        place: 'Medellin',
        price: '99.000',
        stars: 4,
        users: '109'
    },
    {
        id: 8,
        image: 'https://elpais.com/elpais/imagenes/2019/03/01/viajero_astuto/1551460921_336112_1551693736_noticia_grande.jpg',
        name: 'Kayak en corrientes rápidas',
        place: 'San Rafael',
        price: '499.000',
        stars: 3,
        users: '439'
    }
]

export const Experiences = () => (
    <section className="experiences-container">
        {
            experiences.map(item => <Adventure { ...item } />)
        }
    </section>
)
