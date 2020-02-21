import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import Home from './containers/home'
import GamePage from './containers/game'
import NavBar from './containers/navbar'

const styles = {
  root: {
    display: 'flex'
  }
}

/* Class Routes */
class Routes extends Component {
  /**
    * Render.
    * return {String}.
  */
  render() {
    const { classes } = this.props
    return (
      <div>
        <BrowserRouter>
          <div className={classes.root}>
            <NavBar />
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

export default withStyles(styles)(Routes)
