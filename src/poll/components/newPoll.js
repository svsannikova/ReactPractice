import React, {Component} from 'react'
import {observer} from 'mobx-react'
import css from './newPoll.css'
import {savePoll} from '../../actions/createNewPoll'
import {Link} from 'react-router-dom'
import {Colors, Button} from 'react-foundation'

@observer
export class NewPoll extends Component {
  constructor(){
    super()
    this.state = {
      title: '',
      listOfChoices: [],
    }
  }
  
  render() {
    const handleSubmit = event => {
      event.preventDefault()
      savePoll(this.state)
    }
    const handleChange = event => {
      var option = event.target.options
      var value = []
      for (var i = 0, l = option.length; i < l; i++) {
        if (option[i].selected) {
          value.push(option[i].value)
        }
      }
      this.setState({listOfChoices: value})
    }
    return (
      <div className={css.component}>
        <h1 className={css.title}>New Poll</h1>
        <form onSubmit={handleSubmit}  className={css.poll}>
          <div>
            <label>
            Insert text
              <input type="text" 
                value = {this.state.title} 
                onChange = {e => this.setState({title: e.target.value})}
                placeholder="******" required/>
            </label>
          </div>
          <div>
            <select multiple={true} onChange = {handleChange}>             
              <option value="First">First</option>
              <option value="Second">Second</option>
              <option value="Third">Third</option>
            </select>
          </div>
          <Button type="submit" isExpanded>Submit</Button>
        </form>
        <p/>
        <Link to="/">Back</Link>
      </div>
    )
  }
}

export default NewPoll
