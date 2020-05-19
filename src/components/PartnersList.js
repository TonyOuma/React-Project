import React, { Component } from 'react'
import {Link, Grid, Cell} from 'react-foundation'
import { ProductConsumer} from './context'

export class PartnersList extends Component {
    render() {
        const {id, caption, img} = this.props.item;
        return (
            
             
              <Cell medium={3} small={12}>
                <div className="card">
                  <div className="card-image">
                    <img
                      src={img}
                      alt="partnerLogo"
                    ></img>
                  </div>
                  <div className="card-section">
                    <p>{caption}</p>
                  </div>
                </div>
              </Cell>
            
            
        )
    }
}

export default PartnersList

