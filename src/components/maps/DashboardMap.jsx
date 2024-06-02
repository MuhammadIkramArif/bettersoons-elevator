import React from "react";

const DashboardMap = ({ doctorLocation }) => {
  return (
    <iframe
      title="dashboard-map"
      src={doctorLocation}
      className="block border-0 w-full h-full min-h-[22rem] rounded"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default DashboardMap;
