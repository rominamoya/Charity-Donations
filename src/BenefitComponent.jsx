import React from 'react';
import axios from 'axios';
import { withStyles } from 'material-ui/styles';
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from 'material-ui/Card';
import PropTypes from 'prop-types';
import Collapse from 'material-ui/transitions/Collapse';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import { CircularProgress } from 'material-ui/Progress';
import purple from 'material-ui/colors/purple';
import Button from 'material-ui/Button';
import DonationsContainer from './DonationsComponent';

const styles = theme => ({
  card: {
    maxWidth: 900,
    margin: 'auto',
  },
  media: {
    height: 194,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  progress: {
    'text-align': 'center',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class BenefitComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      expanded: false,
      donations: [],
    };
  }
  componentDidMount() {
    axios
      .get('https://api.justgiving.com/f26b1bad/v1/charity/183560/')
      .then((response) => {
        this.setState({ info: response.data });
      });
  }

  handleExpandClick = () => {
    axios
      .get('https://api.justgiving.com/f26b1bad/v1/charity/183560/donations')
      .then((response) => {
        this.setState({ donations: response.data.donations });
      });
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;
    const {
      name,
      logoAbsoluteUrl,
      description,
      websiteUrl,
    } = this.state.info;
    return (
      <Card className={classes.card}>
        <CardHeader
          title={name}
          subheader={websiteUrl}
        />
        <CardMedia
          className={classes.media}
          image={logoAbsoluteUrl}
        />
        <CardContent>
          <Typography component="p">{description}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Button
            variant="raised"
            onClick={this.handleExpandClick}
            className={classes.button}
          >
            Donations
          </Button>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent className={classes.progress}>
            {this.state.donations.length > 0 ? (
              <DonationsContainer donations={this.state.donations} />
            ) : (
              <CircularProgress style={{ color: purple[500] }} thickness={4} />
            )}
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

BenefitComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(BenefitComponent);
