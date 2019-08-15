import React, { useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return loading ? (
    <div className="Preloader">
      <div className="content">
        <div className="app-name">Notes</div>
        <div className="logo">
          <img src="logo512.png" alt="logo" />
        </div>
        <div className="bar">
          <div className="progress" />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Preloader;
