import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTrains} from '../actions/trains';
import TrainListItem from './train_list_item';
class TrainList extends Component {
  componentDidMount(){
    this.props.fetchTrains({station:'SLO'}); // Fetch default station SLO when loaded
  }
  renderTrainList(){
    const trains = this.props.trains;
    if(trains.unload){
      return <div> {trains.message} </div> // In case there is no train info is loaded or getting error
    }
    else{
      if(trains.data.length == 0)
        return <div>There is no result matches to this station</div> // When there is no matched result
      return  trains.data.map( (train) => {
        return <TrainListItem key={`${train.trainNumber}${train.departureDate}`} train={train} /> // Render each Train Composition
      });
    }
  }
  // Render List of the Trains
  render(){
    return (
      <div className="container panel train-list">
        <div className="row">
          {this.renderTrainList()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {trains: state.trains};
}
export default connect(mapStateToProps,{fetchTrains})(TrainList);
