import {Component} from 'react'
import {v4} from 'uuid'
import './App.css'

class App extends Component {
  state = {
    list: [],
    inputData: '',
  }

  onClickAdd = event => {
    event.preventDefault()
    const {inputData} = this.state
    const frequency = inputData.length
    if (frequency > 0) {
      const newData = {
        id: v4(),
        value: inputData,
        count: frequency,
      }
      this.setState(ps => ({list: [...ps.list, newData], inputData: ''}))
    }
  }

  inputDataChange = event => {
    this.setState({inputData: event.target.value})
  }

  render() {
    const {list, inputData} = this.state
    return (
      <div>
        <div>
          <h1>Character Counter</h1>
          <form onSubmit={this.onClickAdd}>
            <input
              placeholder="Enter the Characters here"
              type="term"
              onChange={this.inputDataChange}
              value={inputData}
            />
            <button type="button" onClick={this.onClickAdd}>
              Add
            </button>
          </form>
        </div>
        <div>
          <h1>Count the characters like a Boss</h1>

          {list.length === 0 ? (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            </div>
          ) : (
            <div>
              <ul>
                {list.map(each => (
                  <li key={each.id}>
                    <p>
                      {each.value}:{each.count}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default App
