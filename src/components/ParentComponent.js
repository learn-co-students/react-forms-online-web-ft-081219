import React, {Component} from 'react' 
import Form from './Form'
import DisplayData from './DisplayData'

export default class ParentComponent extends Component {

    state = {
        firstName: "",
        lastName: ""
    }

    //THESE TWO METHODS CAN BE REFACTORED TO BE MORE GENERIC,
    //SEE handleChange BELOW
    // handleFirstNameChange = event => {
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }

    // handleLastNameChange = event => {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
            //the fields on our 'input' have to match our form data keys
        })
    }

    render() {
        return(
            <div>
                <Form
                formData={this.state}
                // handleFirstNameChange={this.handleFirstNameChange}
                // handleLastNameChange={this.handleLastNameChange}
                handleChange={this.handleChange}
                />
                <DisplayData formData={this.state} />
            </div> 
        )
    }
}