// @flow

import React, {Component} from 'react'
import {observer} from 'mobx-react'
import css from './Hello.css'
import helloStore from '../store'
import {Link} from 'react-router-dom'

@observer
export class Hello extends Component {
  componentWillMount() {
    helloStore.sayHello()
  }

  render() {
    return (
      <div className={css.component}>
        <h1 className={css.title}>{helloStore.message}</h1>
        <p/>
        <Link to="/newPoll">Create poll</Link>
      </div>
    )
  }
}

export default Hello
