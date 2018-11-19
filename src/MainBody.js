import React ,{Component} from 'react'
import './MainBody.css'

class MainBody extends Component {
    render() {
        return (
        <div className="creditCardBody">
            <div className="mainInfos">
                <h1>5422</h1>
                <h1>CARD HOLDER</h1>
            </div>
            <div className="creationDate">
                    <div>
                        <h4>VALID</h4>
                        <h4> THRU</h4>
                    </div>
                    <div>
                        <p>MONTH/YEAR</p>
                        <h1>11/50</h1>
                    </div>
            </div>
            <div className="logos">
                <div>
                    <img src={require('./images/masterCard.png') }alt='mastercardLogo'></img>
                </div>
                <div>
                    <img src={require('./images/visa.png')} alt='visaLogo'></img>
                </div>
            </div>
        </div>
        )
    }
}
export default MainBody;