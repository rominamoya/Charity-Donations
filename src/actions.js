import { getCharityInfo, getDonationsInfo } from './utils/apiHelpers';
import { charityInfoActionCreators } from './types';


export const fetchCharityInfo = () => (dispatch) => {
  dispatch(charityInfoActionCreators.fetchCharityInfoRequest());
  return getCharityInfo()
    .then((response) => {
      dispatch(charityInfoActionCreators.fetchCharityInfoSuccess(response.data));
    })
    .catch((error) => {
      dispatch(charityInfoActionCreators.fetchCharityInfoFailed(error));
    });
};

export const fetchCharityDonations = () => (dispatch) => {
  dispatch(charityInfoActionCreators.fetchCharityDonationsRequest());
  return getDonationsInfo()
    .then((response) => {
      dispatch(charityInfoActionCreators.fetchCharityDonationsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(charityInfoActionCreators.fetchCharityDonationsFailed(error));
    });
};
