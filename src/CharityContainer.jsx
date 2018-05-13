import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import purple from 'material-ui/colors/purple';
import { bindActionCreators } from 'redux';
import DonationsComponent from './DonationsComponent';
import CharityInfoComponent from './CharityInfoComponent';
import styles from './styles';
import { fetchCharityInfo, fetchCharityDonations } from './actions';

class CharityContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCharityInfo();
    this.props.fetchCharityDonations();
  }

  render() {
    const { classes } = this.props;
    const { currencyCode } = this.props.info;
    return (
      <Card className={classes.card}>
        <CharityInfoComponent supporters={this.props.donations.length} info={this.props.info} />
        <CardContent className={classes.progress}>
          {this.props.donations.length > 0 ? (
            <DonationsComponent currencyCode={currencyCode} donations={this.props.donations} />
            ) : (
              <CircularProgress style={{ color: purple[500] }} thickness={4} />
            )}
        </CardContent>
      </Card>
    );
  }
}

CharityContainer.propTypes = {
  info: PropTypes.object.isRequired,
  donations: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  fetchCharityInfo: PropTypes.func.isRequired,
  fetchCharityDonations: PropTypes.func.isRequired,

};

const mapStateToProps = state => ({
  info: state.charityInfo.info,
  donations: state.charityInfo.donations,
});

const matchDispatchToProps = dispatch =>
  bindActionCreators({ fetchCharityInfo, fetchCharityDonations }, dispatch);


export default connect(mapStateToProps, matchDispatchToProps)(withStyles(styles)(CharityContainer));
