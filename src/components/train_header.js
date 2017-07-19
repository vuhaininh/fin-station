import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTrains} from '../actions/trains';

// Train Header includes a search bar to search trains in the station
class TrainHeader extends Component  {
  constructor(props){
    super(props);
    this.state = {
      station: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const  name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event){
    event.preventDefault();
    this.setState({
      station: ""
    });
    this.props.fetchTrains(this.state); // Dispatch function to get Trains of Station

  }
  render(){
    return (
      <header>
        <div className="container train-header">
          <div className="row">
            <center>
              Train Composition Viewer
              <form className="form-inline search-bar" onSubmit={this.handleSubmit.bind(this)}>
                <center>
                  <input name="station" type="text" className="form-control"  value={this.state.station}
                    onChange={this.handleInputChange}
                    placeholder="Enter Station: ie SLO, HKI" />
                  <button type="submit" className="btn btn-default">Search</button>
                </center>
              </form>
            </center>
          </div>
        </div>
      </header>
    );
  }
}

export default connect(null,{fetchTrains})(TrainHeader);
