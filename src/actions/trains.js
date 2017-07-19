import * as constants from '../constants/constants';
import axios from 'axios';
import _ from 'lodash';

export function fetchTrains(state){
  // Create Request URL to fetch trains in the station
  const requestUrl= `${constants.ROOT_URL}/live-trains?station=${state.station}`;

  // Create Request using axios
  const request = axios.get(requestUrl);

  return (dispatch) => {
    request.then( (response) => {
      // Fetch successfully
      var trains = response.data; // Fetched Trains
      Promise.all(trains.map( (train) => {
          // Get Composition of each Train

          var compositionRequestUrl = `${constants.ROOT_URL}/compositions/${train.trainNumber}?departure_date=${train.departureDate}`; //request URL
          return axios.get(compositionRequestUrl); //axios request
        })
      ).then((compositions) => {
          //Update Train Info based on fetched Composition
          var updatedTrains = trains.map( (train,i) => {
              train.composition = compositions[i].data;
              return train;
          })
          //Dispatch actions to Reducers to get updated state of Redux Store
          dispatch({type: constants.FETCH_TRAINS, payload: updatedTrains}); // Update Train List

        }).catch( (error) => {
          // catch error  in case cannot fetch Composition Info, dispath to Reducers to update state
           dispatch({type: constants.ERROR_GENERAL, payload: error}); // Send notification about error
        });

    }).catch( (error) => {
      // catch error  in case cannot fetch data, dispath to Reducers to update state
      dispatch({type: constants.ERROR_GENERAL, payload: error}); // Send notification about error
    });
  }
}
