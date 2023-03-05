import {getContracts} from  '..services/api'

export const FETCH_CONTRACTS_REQUEST = 'FETCH_CONTRACTS_REQUEST';
export const FETCH_CONTRACTS_SUCCESS = 'FETCH_CONTRACTS_SUCCESS';
export const FETCH_CONTRACTS_FAILURE = 'FETCH_CONTRACTS_FAILURE';


export const ContractRequest = () => {
    return {
      type: FETCH_CONTRACTS_REQUEST
    };
  };

export const ContractFailure = (error) => {
    return {
      type: FETCH_CONTRACTS_FAILURE,
      payload: error
    };
};

export const ContractSuccess = () => {
    return {
      type: FETCH_CONTRACTS_FAILURE,
      payload: getContracts
    };
};
