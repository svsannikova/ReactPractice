// @flow

import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Hello from '../../hello/components/Hello'
import NewPoll from '../../poll/components/newPoll'
import GetPoll from '../../poll/components/displayPoll'
import css from './Root.css'

const Root = () => (
  <div className={css.component}>
    <Router>
      <div className={css.routes}>
        <Route exact path="/" component={Hello} />
        <Route exact path="/newPoll" component={NewPoll} />
        <Route exact path="/poll/:id" component={GetPoll} />
      </div>
    </Router>
  </div>
)

export default Root
