import * as React from "react"

interface State {
  value: string
}

export default class NameForm extends React.Component<{}, State> {
  state: State = {
    value: "",
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    alert("A name was submitted: " + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {" "}
          Name:{" "}
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />{" "}
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
