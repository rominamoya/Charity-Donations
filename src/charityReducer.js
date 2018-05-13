const defaultState = {
  info: {},
  donations: [],
  error: null,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'FETCH_CHARITY_INFO_REQUEST':
      return {
        ...state,
        info: {},
        error: null,
      };
    case 'FETCH_CHARITY_INFO_SUCCESS':
      return {
        ...state,
        info: action.payload,
        error: null,
      };
    case 'FETCH_CHARITY_INFO_ERROR':
      return {
        ...state,
        info: {},
        error: action.error,
      };
    case 'FETCH_CHARITY_DONATIONS_REQUEST':
      return {
        ...state,
        donations: [],
        error: null,
      };
    case 'FETCH_CHARITY_DONATIONS_SUCCESS':
      return {
        ...state,
        donations: action.payload.donations,
        error: null,
      };
    case 'FETCH_CHARITY_DONATIONS_ERROR':
      return {
        ...state,
        donations: [],
        error: action.error,
      };
    default:
      return state;
  }
};
