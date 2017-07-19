import React, {Component} from 'react';
class TrainListItem extends Component{
  renderComposition(){
    const train = this.props.train;
    const trainType = train.trainType;
    const trainNumber = train.trainNumber;
    var body;

    if(train.composition.code == 'COMPOSITION_NOT_FOUND') // In case there is no composition info
      body = <div className="text-danger"><b>{train.composition.errorMessage}</b></div>
    else {
      // Getting Composition Info
      const journeySections = train.composition.journeySections[0];
      const departtureStation = journeySections.beginTimeTableRow.stationShortCode;
      const destinationStation = journeySections.endTimeTableRow.stationShortCode;
      const locomotive = journeySections.locomotives[0].locomotiveType + " "+journeySections.locomotives[0].powerType;
      const totalLength = journeySections.totalLength;
      const wagons = journeySections.wagons.map( (wagon) => {
        return wagon.wagonType;
      }).join(",");
      const maxSpeed = journeySections.maximumSpeed;
      const moving = train.runningCurrently? <div className="text-success">Moving</div> : <div className="text-danger">Not Moving</div>

      // Display info
      body = <div>
        <h5><b><u>{`${trainType}${trainNumber} ${departtureStation}-${destinationStation} `}</u></b></h5>
        <div>Locomotive: {`${locomotive}`}</div>
        <div>Wagons: {`${wagons} (${totalLength}  meters)`}</div>
        <div>Max speed: {`${maxSpeed} KM/h`}</div>
        <b>{moving}</b>
      </div>
    }
    return(
      <div>
        <div className="panel-heading">
          <h3 className="panel-title">{`${trainType} ${trainNumber} `}</h3>
        </div>
        <div className="panel-body  fix-height">
          <div className="col-md-12 text-primary">
            <center>
              {body}
            </center>
          </div>
        </div>
      </div>
    )
  }
  render(){
    // Render composition info
    return(
      <div className="train-item">
        <div className="col-md-4">
          <div className="panel panel-default">
            {this.renderComposition()}
          </div>
        </div>
      </div>
    );
  }
}
export default TrainListItem;
