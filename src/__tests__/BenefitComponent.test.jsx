import React from 'react';
import { mount } from 'enzyme';
import BenefitComponent from '../BenefitComponent';
import sinon from 'sinon';
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from 'material-ui/Card';
import axios from 'axios';

describe('BenefitComponent', () => {
  it('fetch response on #componentDidMount', () => {
    sinon.stub(axios, 'get')
      .callsFake(() => Promise.resolve(
        { data:
          {
            name: 'mockedName',
            logoAbsoluteUrl:'mockedlogoAbsoluteUrl',
            description:'mockeddescription',
            websiteUrl:'mockedwebsiteUrl'
        }
    }))
  const wrapper = mount(<BenefitComponent />)
  return axios.get()
    .then(wrapper.update())
    .then(Promise.resolve())
    .then(() => {
      const actual = wrapper.update().find(CardHeader).props();
      expect(actual.title).toContain("mockedName");
      expect(actual.subheader).toContain("mockedwebsiteUrl");
    })
  })
});
