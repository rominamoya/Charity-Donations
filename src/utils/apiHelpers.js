import axios from 'axios';


export const getCharityInfo = () => axios.get('https://api.justgiving.com/f26b1bad/v1/charity/13441/');

export const getDonationsInfo = () => axios.get('https://api.justgiving.com/f26b1bad/v1/charity/13441/donations');
