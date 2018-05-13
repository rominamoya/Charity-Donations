const charityInfoActions = {
  FETCH_CHARITY_INFO_REQUEST: 'FETCH_CHARITY_INFO_REQUEST',
  FETCH_CHARITY_INFO_SUCCESS: 'FETCH_CHARITY_INFO_SUCCESS',
  FETCH_CHARITY_INFO_FAILED: 'FETCH_CHARITY_INFO_FAILED',
  FETCH_CHARITY_DONATIONS_REQUEST: 'FETCH_CHARITY_DONATIONS_REQUEST',
  FETCH_CHARITY_DONATIONS_SUCCESS: 'FETCH_CHARITY_DONATIONS_SUCCESS',
  FETCH_CHARITY_DONATIONS_FAILED: 'FETCH_CHARITY_DONATIONS_FAILED',
};

const charityInfoActionCreators = {
  fetchCharityInfoRequest: () => ({
    type: charityInfoActions.FETCH_CHARITY_INFO_REQUEST,
  }),

  fetchCharityInfoSuccess: info => ({
    type: charityInfoActions.FETCH_CHARITY_INFO_SUCCESS,
    payload: info,
  }),
  fetchCharityInfoFailed: error => ({
    type: charityInfoActions.FETCH_CHARITY_INFO_FAILED,
    error,
  }),
  fetchCharityDonationsRequest: () => ({
    type: charityInfoActions.FETCH_CHARITY_DONATIONS_REQUEST,
  }),

  fetchCharityDonationsSuccess: info => ({
    type: charityInfoActions.FETCH_CHARITY_DONATIONS_SUCCESS,
    payload: info,
  }),
  fetchCharityDonationsFailed: error => ({
    type: charityInfoActions.FETCH_CHARITY_DONATIONS_FAILED,
    error,
  }),
};

export { charityInfoActions, charityInfoActionCreators };
