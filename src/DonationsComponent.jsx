import React from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const DonationsContainer = props =>
  (
    <List>
      {props.donations.map((donation, key) =>
        (
          <ListItem key={key}>
            <ListItemAvatar>
              <Avatar
                alt={donation.donorDisplayName}
                src={donation.imageUrl}
              />
            </ListItemAvatar>
            <ListItemText
              primary={donation.donorDisplayName}
              secondary={donation.message}
            />
          </ListItem>
        ))}
    </List>
  );


DonationsContainer.propTypes = {
  donations: PropTypes.array.isRequired,
};
export default DonationsContainer;
