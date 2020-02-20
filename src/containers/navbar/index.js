import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import {
  ListItem,
  List,
  ListItemIcon,
  Hidden,
  Drawer
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    display: 'flex',
    backgroundColor: '#2F3136'
  },
  test: {
    backgroundColor: '#2F3136'
  }
}

class Home extends Component {
  render() {
    const { classes } = this.props

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <List>
          <ListItem button>
            <ListItemIcon>
              <img src="/asset/image/home.svg" alt="Home" />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <img src="/asset/image/home.svg" alt="Home" />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <img src="/asset/image/home.svg" alt="Home" />
            </ListItemIcon>
          </ListItem>
        </List>
      </div>
    )

    return (
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    )
  }
}

export default withStyles(styles)(Home)

