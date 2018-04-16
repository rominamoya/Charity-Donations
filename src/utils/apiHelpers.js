import axios from 'axios';

const charityResources = {
  getCharityInfo() {
    return axios.get('https://api.justgiving.com/f26b1bad/v1/charity/2116/');
  },

  getDonationsInfo() {
    return axios.get('https://api.justgiving.com/f26b1bad/v1/charity/2116/donations');
  },
};

export default charityResources;
