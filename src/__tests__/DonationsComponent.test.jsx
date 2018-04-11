import React from 'react';
import { shallow } from 'enzyme';
import DonationsComponent from '../DonationsComponent';
import sinon from 'sinon';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import axios from 'axios';
import Avatar from 'material-ui/Avatar';

const props = {
	"donations": [{
		"amount": 40.0000,
		"currencyCode": "GBP",
		"donationDate": "\/Date(1521024890000+0000)\/",
		"donorDisplayName": "Gayle Carberry",
		"donorLocalAmount": 40.000000,
		"donorLocalCurrencyCode": "GBP",
		"estimatedTaxReclaim": 0.0000,
		"imageUrl": "https:\/\/www.justgiving.com\/content\/images\/graphics\/icons\/avatars\/facebook-avatar.gif",
		"message": "Sincere condolences from all at Linaro."
	}, {
		"amount": 10.0000,
		"currencyCode": "GBP",
		"donationDate": "\/Date(1519863132000+0000)\/",
		"donorDisplayName": "Jo Yeomans",
		"donorLocalAmount": 10.000000,
		"donorLocalCurrencyCode": "GBP",
		"estimatedTaxReclaim": 2.5000,
		"imageUrl": "https:\/\/www.justgiving.com\/content\/images\/graphics\/icons\/avatars\/facebook-avatar.gif",
		"message": "On behalf of my Mother Betty Brewer who regularly donated to NT"
	}]
}
describe('DonationsComponent', () => {
  it('Should Render correctly', () => {

  const wrapper = shallow(<DonationsComponent {...props} />)
  const actual = wrapper.find(Avatar);
  expect(actual.first().props().alt).toContain( "Gayle Carberry");
  expect(actual.at(1).props().alt).toContain("Jo Yeomans");
  const actualtext = wrapper.find(ListItemText);
  expect(actualtext.first().props().primary).toContain( "Gayle Carberry");
  expect(actualtext.at(1).props().secondary).toContain("On behalf of my Mother Betty Brewer who regularly donated to NT");
  });
});
