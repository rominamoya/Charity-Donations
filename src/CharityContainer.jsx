import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import purple from 'material-ui/colors/purple';
import DonationsComponent from './DonationsComponent';
import CharityInfoComponent from './CharityInfoComponent';
import styles from './styles';
import { getCharityInfo, getDonationsInfo } from './utils/apiHelpers';

class CharityContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      donations: [],
    };
  }
  componentDidMount() {
    getCharityInfo()

      .then((response) => {
        this.setState({ info: response.data });
      });
    getDonationsInfo()
      .then((response) => {
        this.setState({ donations: response.data.donations });
      });
  }

  render() {
    const { classes } = this.props;
    const { currencyCode } = this.state.info;
    return (
      <Card className={classes.card}>
        <CharityInfoComponent supporters={this.state.donations.length} info={this.state.info} />
        <CardContent className={classes.progress}>
          {this.state.donations.length > 0 ? (
            <DonationsComponent currencyCode={currencyCode} donations={this.state.donations} />
            ) : (
              <CircularProgress style={{ color: purple[500] }} thickness={4} />
            )}
        </CardContent>
      </Card>
    );
  }
}

CharityContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CharityContainer);
