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

import { getUser } from './actions'

const styles = {
  root: {
    maxWidth: 345
  },
  media: {
    height: 50
  }
}

class Home extends Component {
  constructor(props) {
    super(props)
    getUser(1)
  }

  render() {
    const { user, classes } = this.props
    console.log(user)
    return (
      <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">Lizard</Typography>
            <Typography variant="body2" color="textSecondary" component="p">test</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
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
    user: state.home.user
  }
)

export default withStyles(styles)(connect(mapStateToProps)(Home))
