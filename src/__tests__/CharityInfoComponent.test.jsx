import React from 'react';
import { mount } from 'enzyme';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';
import { CardMedia } from 'material-ui/Card';
import CharityInfoComponent from '../CharityInfoComponent';

const props = {
  info: {
    name: 'mockedName',
    logoAbsoluteUrl: 'mockedlogoAbsoluteUrl',
    description: 'mockeddescription',
    websiteUrl: 'mockedwebsiteUrl',
    categories: ['category1', 'category2'],
  },
  supporters: 4,
};

describe('CharityInfoComponent', () => {
  it('fetch response on #componentDidMount', () => {
    const wrapper = mount(<CharityInfoComponent {...props} />);
    const media = wrapper.find(CardMedia);
    expect(media.props().image).toContain('mockedlogoAbsoluteUrl');
    expect(media.props().alt).toContain('mockedName');

    const actualtext = wrapper.find(Typography);
    expect(actualtext.at(0).props().children).toContain('mockedName');
    expect(actualtext.at(1).props().children).toContain('mockedwebsiteUrl');
    expect(wrapper.find(Chip).at(0).props().label).toContain('category1');
    expect(wrapper.find(Chip).at(1).props().label).toContain('category2');
  });
});
