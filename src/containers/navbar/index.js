import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    display: 'flex'
  }
}

class Home extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Paper>
          <MenuList>
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/games">game</Link>
            </MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Home)

