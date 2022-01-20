import React, { Component } from 'react'
import CardList from '../cardList/cardList'
import './card.css'

export default class Card extends Component {

    constructor(props){
        super()
    }

    render() {
        return (
            <div className="cards">
                {
                    (this.props.monsters.length === 0) && 
                               <div>No Monsters FOund</div>
  
                }
                {
                    this.props.monsters.map((item, id) => {
                        return(
                            <CardList key={id} monster = {item} ></CardList>
                        )
                    })
                    
                }

            </div>
        )
    }
}
