import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CharityContainer from '../CharityContainer';
import CharityInfoComponent from '../CharityInfoComponent';
import DonationsComponent from '../DonationsComponent';

const mockStore = configureMockStore([thunk]);

const props = {
  info: {
    name: 'mockedName',
    logoAbsoluteUrl: 'mockedlogoAbsoluteUrl',
    description: 'mockeddescription',
    websiteUrl: 'mockedwebsiteUrl',
  },
  supporters: 4,
};
const result = {
  name: 'mockedName',
  logoAbsoluteUrl: 'mockedlogoAbsoluteUrl',
  description: 'mockeddescription',
  websiteUrl: 'mockedwebsiteUrl',
  currencyCode: 'GPB',
};
const donations = [{
  amount: 40.0000,
  currencyCode: 'GBP',
  donationDate: '/Date(1521024890000+0000)/',
  donorDisplayName: 'Gayle Carberry',
  donorLocalAmount: 40.000000,
  donorLocalCurrencyCode: null,
  estimatedTaxReclaim: 0.0000,
  imageUrl: 'https:www.justgiving.comcontent.images.facebook-avatar.gif',
  message: 'Sincere condolences from all at Linaro.',
}, {
  amount: 10.0000,
  currencyCode: 'GBP',
  donationDate: '/Date(1519863132000+0000)',
  donorDisplayName: 'Jo Yeomans',
  donorLocalAmount: 10.000000,
  donorLocalCurrencyCode: 'GBP',
  estimatedTaxReclaim: 2.5000,
  imageUrl: 'https:www.justgiving.comcontent.images.facebook-avatar.gif',
  message: 'On behalf of my Mother Betty Brewer who regularly donated to NT',
}];

describe('CharityContainer', () => {
  it('fetch response on #componentDidMount and render CharityInfoComponent correctly', () => {
    const store = mockStore({
      charityInfo: {
        info: result,
        donations,
      },
    });
    const wrapper = mount(<Provider store={store}><CharityContainer {...props} /></Provider>);
    expect(wrapper.find(CharityInfoComponent).props().info).toEqual(result);
    expect(wrapper.find(DonationsComponent).props().donations).toEqual(donations);
  });
});
