import React from "react";
import "../gallery/style/Status.css";

const Status = ({ statusColor = "Green", subStatus, points = "80K Points" }) => {
  return (
    <div className="status">
      <div className="orders-status">
        <div className={`status-color ${statusColor.toLowerCase()}-status`}>
          {statusColor}
        </div>
        <div className="sub-status">
          {subStatus || "10 more orders by October 31 to reach Gold."}
        </div>
      </div>
      <div className="points-status">{points}</div>
    </div>
  );
};

export default Status;
