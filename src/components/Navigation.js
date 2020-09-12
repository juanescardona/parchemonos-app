import React from 'react'
import { MENU_OPTIONS } from './../data/MenuOptions'

const ItemMenu = (props) => (
    <>
        {
            props.title == 'Inicio'
            ?
            <li className="active">
                <a href="#">
                    <ion-icon name={props.icon}></ion-icon>
                </a>
            </li>
            :
            <li>
                <a href="#">
                    <ion-icon name={props.icon}></ion-icon>
                </a>
            </li>
        }
    </>
)

export const Navigation = () => (
    <nav className="navigation">
        <ul>
            {
                MENU_OPTIONS.map( (el, key) => <ItemMenu key={key} {...el} />)
            }
        </ul>
    </nav>
)