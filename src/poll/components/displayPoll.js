import React, {Component} from 'react'
import css from './newPoll.css'
import {getPoll} from '../../actions/getPoll'
import {saveVote} from '../../actions/saveVote'
import {Link} from 'react-router-dom'
import {Button} from 'react-foundation'

export class GetPoll extends Component {
  state = {
    selectedOption: '',
    poll: {
      _id: '',
      title: '',
      listOfChoices: [
        {
          name: '',
          _id: '',
        },
      ],
    },
  }

  componentWillMount() {
    var res = getPoll(this.props.match.params.id)
    res.then(e => e.json()).then(j => {
      this.setState({
        poll: j,
      })
    })
  }
  render() {
    const handleChoice = event => {
      this.setState({
        selectedOption: event.target.value,
      })
    }
    const handleSubmit = event => {
      event.preventDefault()
      var params = {
        id: this.state.poll._id,
        body: this.state.selectedOption,
      }
      console.log(params)
      var res = saveVote(params)
      res.then(r => r.json()).then(j => console.log(j))
    }
    return (
      <div className={css.component}>
        <h1 className={css.title}>Poll: {this.state.poll.title}</h1>
        <div className={css.poll}>
          <form onSubmit={handleSubmit}>
            <div className={css.div}>
              {this.state.poll.listOfChoices.map((choice, index) => (
                <label className={css.box} key={choice._id}>
                  {choice.name}
                  <input
                    type="radio"
                    className={css.input}
                    key={choice._id}
                    value={choice._id}
                    checked={this.state.selectedOption === choice._id}
                    onChange={handleChoice}
                  />
                </label>
              ))}
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

export default GetPoll
