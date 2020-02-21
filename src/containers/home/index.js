import React, { Component } from 'react'
import { connect } from 'react-redux'
import nextId from 'react-id-generator'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import {
  getUser,
  getAllEvents,
  getAllGames,
  getAllPromotions
} from './actions'

const styles = {
  root: {
    maxWidth: 120
  },
  media: {
    height: 50,
    width: 50
  },
  containerCard: {
    display: 'flex',
    margin: 20
  },
  containerHome: {
    margin: 30
  },
  containerHomeHeader: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  containerHomeScore: {
    float: 'right'
  }
}

class Home extends Component {
  constructor(props) {
    super(props)
    getUser(1)
    getAllEvents()
    getAllGames()
    getAllPromotions()
  }

  render() {
    const {
      user,
      classes,
      events,
      games
    } = this.props
    console.log(games)
    return (
      <div className={classes.containerHome}>
        <div className={classes.containerHomeHeader}>
          <div>
            <div>
              <Typography variant="h5">BDE</Typography>
              <Typography variant="h2">MyDigitalSchool</Typography>
            </div>
            <div>
              <Typography>Profiter des promotions en jouant a nos jeux</Typography>
            </div>
          </div>
          <div className={classes.containerHomeScore}>
            <Typography variant="h5">votre score</Typography>
            <Typography variant="h1">
              {user.length !== 0
                ? user[0].points
                : null
              }
            </Typography>
          </div>
        </div>
        <div>test</div>
        <div className={classes.containerCard}>
          {events.map(event => (
            <Card key={nextId()} className={classes.root}>
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
    events: state.home.events,
    games: state.home.games
  }
)

export default withStyles(styles)(connect(mapStateToProps)(Home))
