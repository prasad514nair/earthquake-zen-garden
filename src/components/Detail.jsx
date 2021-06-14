import React from "react";
import moment from "moment";
const Detail = (props) => {
  return (
    <div className="main-container">
      <h3 className="page-title">{props.match.params.title}</h3>
      <div>
        <div>
          <span className="label">Tilte</span>
          <span className="value">{props.match.params.title}</span>
        </div>
        <div>
          <span className="label">Magnitude</span>
          <span className="value">{props.match.params.mag}</span>
        </div>
        <div>
          <span className="label">Time</span>
          <span className="value">
            {moment(parseInt(props.match.params.time)).format(
              "MMMM D, YYYY, h:mm a"
            )}
          </span>
        </div>
        <div>
          <span className="label">Status</span>
          <span className="value">{props.match.params.status}</span>
        </div>
        <div>
          <span className="label">Tsunami</span>
          <span className="value">{props.match.params.tsunami}</span>
        </div>
        <div>
          <span className="label">Type</span>
          <span className="value">{props.match.params.type}</span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
