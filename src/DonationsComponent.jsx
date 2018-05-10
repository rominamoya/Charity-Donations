import React from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Currency from 'react-currency-formatter';
import Typography from 'material-ui/Typography';
import shortid from 'short-id';

const DonationsComponent = props =>
  (
    <List>
      {props.donations.map(donation =>
        (
          <div key={shortid.generate()}>
            <ListItem inset="true">
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
            <ListItem >
              <ListItemText disableTypography inset>
                <Typography variant="display1" color="primary" gutterBottom>
                  <Currency
                    quantity={donation.amount}
                    currency={donation.currencyCode ? donation.currencyCode : props.currencyCode}
                  />
                </Typography>
              </ListItemText>
            </ListItem>
          </div>
        ))}
    </List>
  );


DonationsComponent.propTypes = {
  donations: PropTypes.array.isRequired,
  currencyCode: PropTypes.string.isRequired,
};
export default DonationsComponent;
