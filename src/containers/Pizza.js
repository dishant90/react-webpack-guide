import React, {Component} from 'React'

import PizzaImage from '../components/PizzaImage/PizzaImage'

class Pizza extends Component {
    render() {
        return (
            <div>
                <div>
                    The Pizza
                </div>
                <div>
                    <PizzaImage />
                </div>
            </div>
            
        )
    }
}

export default Pizza;