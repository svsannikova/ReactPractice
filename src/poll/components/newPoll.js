import React, {Component} from 'react'
import css from './newPoll.css'
import {savePoll} from '../../actions/createNewPoll'
import {Link} from 'react-router-dom'
import Modal from 'react-modal'
import {Button} from 'react-foundation'

export class NewPoll extends Component {
  state = {
    id: '',
    isActive: false,
    choice: {
      title: '',
      listOfChoices: [
        {
          name: '',
        },
      ],
    },
  }
  componentWillMount() {
    Modal.setAppElement('body')
  }
  render() {
    const handleSubmit = event => {
      event.preventDefault()
      var res = savePoll(this.state.choice)
      res.then(r => r.json()).then(j => this.setState({id: j._id}))
      this.setState({
        isActive: !this.state.isActive,
      })
    }
    const handleOptionChange = event => {
      var option = event.target.value
      var key = Number(event.target.name)
      var choices = {...this.state.choice}
      if (choices.listOfChoices.length - 1 < key) {
        choices.listOfChoices.push({
          name: option,
        })
      } else {
        choices.listOfChoices[key].name = option
      }
      this.setState({choice: choices})
    }
    const handleTitleChange = event => {
      var text = event.target.value
      var choices = {...this.state.choice}
      choices.title = text
      this.setState({choice: choices})
    }
    return (
      <div className={css.component}>
        <h1 className={css.title}>New Poll</h1>
        <div className={css.poll}>
          <form onSubmit={handleSubmit}>
            <div className={css.div}>
              <label>
                Insert title
                <input
                  type="text"
                  className={css.box}
                  value={this.state.choice.title}
                  onChange={handleTitleChange}
                  placeholder="title..."
                  required
                />
              </label>
            </div>
            <div className={css.div}>
              <label className={css.box}>
                Insert option 1
                <input
                  className={css.input}
                  type="text"
                  name="0"
                  onChange={handleOptionChange}
                  placeholder="option 1..."
                  required
                />
              </label>
              <label className={css.box}>
                Insert option 2
                <input
                  className={css.input}
                  type="text"
                  name="1"
                  onChange={handleOptionChange}
                  placeholder="option 2..."
                  required
                />
              </label>
              <label className={css.box}>
                Insert option 3
                <input
                  className={css.input}
                  type="text"
                  name="2"
                  onChange={handleOptionChange}
                  placeholder="option 3..."
                  required
                />
              </label>
            </div>

            <Button type="submit" isExpanded>
              Submit
            </Button>
            <Modal
              className={css.modal}
              isOpen={this.state.isActive}
              onRequestClose={e =>
                this.setState({isActive: !this.state.isActive})}
            >
              <h1 className={css.title}>
                New poll has been created successfully
              </h1>
              <div>
                <Link to={`/poll/${this.state.id}`}>See poll</Link>
              </div>
              <Button
                className={css.button}
                type="close"
                onClick={e => this.setState({isActive: !this.state.isActive})}
                isExpanded
              >
                Close
              </Button>
            </Modal>
          </form>
        </div>
        <p />
        <Link to="/">Back</Link>
      </div>
    )
  }
}

export default NewPoll
