import React from "react";

const NominationDisplay = ({ nominations, removeNoms }) => {

  let banner;
  if (nominations.length === 5) {
    banner = (
      <div className="alert alert-success alert-dismissible">
        <button className="close" type="button" data-dismiss="alert">
          <span>&times;</span>
        </button>
        <strong>Thank you!</strong> Your selections will be considered. Feel
        free to nominate more!
      </div>
    );
  }
  
  
  const nominationItems = nominations.map((noms) => (
    <div>
      <div className="card p-3 m-3" style={{ width: "20rem" }}>
        <div className="card-body">
          <h4 className="card-title">{noms}</h4>
          <button
            className="btn btn-outline-primary"
            value={noms}
            onClick={(e) => removeNoms(e.target.value)}
          >
            Remove Nomination
          </button>
        </div>
      </div>
    </div>
  ));
  
  return (
    <div>
      <h1 className="display-4">Nominated titles:</h1>
      <div>{banner}</div>
      <div>{nominationItems}</div>
    </div>
  );
};

export default NominationDisplay;
