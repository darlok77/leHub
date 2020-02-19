import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './containers/home'
import GamePage from './containers/game'

/* Class Routes */
class Routes extends Component {
  /**
    * Render.
    * return {String}.
  */
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/games" component={GamePage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default Routes
