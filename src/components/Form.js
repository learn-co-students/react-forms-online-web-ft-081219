import React from 'react';

class Form extends React.Component {
  handleSubmit = event => {
    event.preventDefault()
    const firstName = event.target.children[0].value
    const lastName = event.target.children[1].value
    this.sendFormDataSomewhere({ firstName, lastName })
  }

  render() {
    return (
      <form
        onSubmit = { event => this.handleSubmit(event) }
      >
        <input
          type = "text"
          name = "firstName"
          onChange = { event => this.props.handleChange(event) }
          value = { this.props.formData.firstName }
        />
        <input
          type = "text"
          name = "lastName"
          onChange = { event => this.props.handleChange(event) }
          value = { this.props.formData.lastName }
        />
      </form>
    )
  }
}

export default Form;