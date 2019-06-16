import {
  BONO_CREATION_START,
  BONO_CREATION_COMPLETE,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
  case BONO_CREATION_START:
    return { ...state };
  case BONO_CREATION_COMPLETE:
    return { ...state };
  default:
    return { ...state };
  }
};
