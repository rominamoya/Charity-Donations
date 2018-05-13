import React from 'react';
import { withStyles } from 'material-ui/styles';
import {
  CardMedia,
  CardContent,
} from 'material-ui/Card';
import shortid from 'short-id';
import Chip from 'material-ui/Chip';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import styles from './styles';

const CharityInfoComponent = (props) => {
  const { classes, supporters } = props;
  const {
    name,
    logoAbsoluteUrl,
    websiteUrl,
    categories,
  } = props.info;
  return (
    <React.Fragment>
      <CardMedia
        className={classes.media}
        image={logoAbsoluteUrl}
        src={logoAbsoluteUrl}
        alt={name}
      />
      <CardContent>
        <Typography variant="title" >{name}</Typography>
        <Typography variant="subheading">{websiteUrl}</Typography>
      </CardContent>
      <CardContent>
        {categories &&
        categories.map(category =>
          (<Chip
            label={category}
            key={shortid.generate()}
            className={classes.chip}
          />))
      }
      </CardContent>
      <CardContent>
        <Typography color="primary" variant="title">
          {'Supporters '}  { supporters }
        </Typography>
      </CardContent>
    </React.Fragment>
  );
};

CharityInfoComponent.propTypes = {
  info: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  supporters: PropTypes.number.isRequired,
};
export default withStyles(styles)(CharityInfoComponent);
