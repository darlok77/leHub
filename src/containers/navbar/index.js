import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  ListItem,
  List,
  ListItemIcon
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  navbar: {
    backgroundColor: '#2F3136',
    height: '100vh'
  },
  img: {
    margin: 'auto',
    display: 'block'
  }
}

class Home extends Component {
  render() {
    const { classes } = this.props
    console.log(classes)
    return (
      <div className={classes.navbar}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <Link to="/">
                <img className={classes.img} src="/asset/image/home.svg" alt="Home" />
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Link to="/rank">
                <img className={classes.img} src="/asset/image/classement.svg" alt="classement" />
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon className={classes.item}>
              <Link to="/event">
                <img className={classes.img} src="/asset/image/events.svg" alt="Event" />
              </Link>
            </ListItemIcon>
          </ListItem>
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(Home)

