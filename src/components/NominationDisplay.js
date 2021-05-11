import React from 'react';

const NominationDisplay = ( {nominations} ) => {
    console.log(nominations)
    const nominationItems = nominations.map((noms) => (
        <div class="card p-3 m-3" style={{width: "20rem"}}>
        <div class="card-body">
          <h4 class="card-title">{noms}</h4>
          <button class="btn btn-outline-primary" href="#">Remove Nomination</button>
        </div>
      </div>
    ));

    return nominationItems;
}

export default NominationDisplay