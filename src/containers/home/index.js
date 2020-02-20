import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { getUser, getAllEvent } from './actions'

const styles = {
  root: {
    maxWidth: 120
  },
  media: {
    height: 50,
    width: 50
  },
  container: {
    display: 'flex'
  }
}

class Home extends Component {
  constructor(props) {
    super(props)
    getUser(1)
    getAllEvent()
  }

  render() {
    const { user, classes, events } = this.props
    console.log(user)
    return (
      <div className={classes.container}>
        {events.map(event => (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={event.img}
              />
              <CardContent>
                <Typography gutterBottom component="h2">{event.name}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    )
  }
}

/**
  * mapStateToProps.
  * @param {Object} state.
  * return {Object}.
*/
const mapStateToProps = state => (
  {
    user: state.home.user,
    events: state.home.events

  }
)

export default withStyles(styles)(connect(mapStateToProps)(Home))
