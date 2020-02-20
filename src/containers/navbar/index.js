import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  ListItem,
  List,
  ListItemIcon
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    width: 30
  }
}

class Home extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <List>
          <ListItem button>
            <ListItemIcon>
              <Link to="/">
                <img src="/asset/image/home.svg" alt="Home" />
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
             <Link to="/rank">
                <img src="/asset/image/classement.svg" alt="classement" />
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
            <Link to="/event">
              <img src="/asset/image/events.svg" alt="Event" />
            </Link>
            </ListItemIcon>
          </ListItem>
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(Home)

