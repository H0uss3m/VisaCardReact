import React, {Component} from "react"
import './Header.css'

class Header extends Component {
    render() {
        return (
        <div>
            <div className="title">
              <h1>CREDIT CARD</h1>
            </div>
            <div className="creditCardHeader">
            <div className="puce">
                <img src={require('./images/puce.png')} alt="puceLogo"/>
            </div>
            <div className="creditCardNumber">
                <p><mark>7253 3256 7895 1245</mark></p>
            </div>
            </div>
        </div>
        )
    }
}
export default Header;