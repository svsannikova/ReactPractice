import React, {Component} from 'react'
import {observer} from 'mobx-react'
import css from './newPoll.css'
import {savePoll} from '../../actions/createNewPoll'
import {Link} from 'react-router-dom'
import {Button} from 'react-foundation'

@observer
export class NewPoll extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      listOfChoices: [
        {
          num: '',
          name: '',
        },
      ],
    }
  }

  render() {
    const handleSubmit = event => {
      event.preventDefault()
      console.log(this.state)
      savePoll(this.state)
    }
    const handleChange = event => {
      var option = event.target.options
      var value = []
      for (var i = 0, l = option.length; i < l; i++) {
        if (option[i].selected) {
          value.push({
            num: String(i),
            name: option[i].value,
          })
        }
      }
      this.setState({listOfChoices: value})
    }
    return (
      <div className={css.component}>
        <h1 className={css.title}>New Poll</h1>
        <div className={css.poll}>
          <form onSubmit={handleSubmit}>
            <div className={css.div}>
              <label>
                Insert text
                <input
                  className={css.box}
                  type="text"
                  value={this.state.title}
                  onChange={e => this.setState({title: e.target.value})}
                  placeholder="******"
                  required
                />
              </label>
            </div>
            <div className={css.div}>
              <lable>
                Choose options
                <select
                  multiple={true}
                  onChange={handleChange}
                  className={css.box}
                >
                  <option value="First">First</option>
                  <option value="Second">Second</option>
                  <option value="Third">Third</option>
                </select>
              </lable>
            </div>
            <Button type="submit" isExpanded>
              Submit
            </Button>
          </form>
        </div>
        <p />
        <Link to="/">Back</Link>
      </div>
    )
  }
}

export default NewPoll
