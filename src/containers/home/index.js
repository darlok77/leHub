import React, { Component } from 'react'
import { connect } from 'react-redux'
import nextId from 'react-id-generator'
import { Link } from 'react-router-dom'

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
    maxWidth: 120,
    backgroundColor: '#999999'
  },
  mediaContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
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
  containerHeaderGame: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  containerHomeScore: {
    marginLeft: '80vh'
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
      games,
      promotions
    } = this.props
    let promotionComponent = null
    let eventComponent = null
    let gameComponent = null

    if (events.length !== 0) {
      eventComponent = (
        <div className={classes.containerCard}>
          {events.map(event => (
            <Card key={nextId()} className={classes.root}>
              <CardActionArea className={classes.mediaContainer}>
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

    if (promotions.length !== 0) {
      promotionComponent = (
        <div className={classes.containerCard}>
          {promotions.map(promotion => (
            <Card key={nextId()} className={classes.root}>
              <CardActionArea className={classes.mediaContainer}>
                <CardMedia
                  className={classes.media}
                  image={promotion.img}
                />
                <CardContent>
                  <Typography gutterBottom component="h2">{promotion.name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      )
    }

    if (games.length !== 0) {
      gameComponent = (
        <div className={classes.containerCard}>
          {games.map(game => (
            <Card key={nextId()} className={classes.root}>
              <CardActionArea className={classes.mediaContainer}>
                <Link to="/games">
                  <CardMedia
                    className={classes.media}
                    image={game.img}
                  />
                </Link>
                <CardContent>
                  <Typography gutterBottom component="h2">{game.name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      )
    }

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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>Promotions</div>
          {promotions.length !== 0
            ? promotionComponent
            : null
          }
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }} className={classes.containerHeaderGame}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>événements</div>
            {events.length !== 0
              ? eventComponent
              : null
            }
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>jeux</div>
            {games.length !== 0
              ? gameComponent
              : null
            }
          </div>
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
    games: state.home.games,
    promotions: state.home.promotions
  }
)

export default withStyles(styles)(connect(mapStateToProps)(Home))
