const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation} = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP('45.74.211.212', (error, data)=>{
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }
    console.log('It worked! Returned Data:' , data);
  });
  
  fetchISSFlyOverTimes({ latitude: '45.26910', longitude: '-75.75180' },(error, data)=>{
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }
    console.log('It worked! Returned Data:' , data);
  });


  const printPassTimes = function(passTimes) {
    for (const pass of passTimes) {
      const datetime = new Date(0);
      datetime.setUTCSeconds(pass.risetime);
      const duration = pass.duration;
      console.log(`Next pass at ${datetime} for ${duration} seconds!`);
    }
  };
  
  nextISSTimesForMyLocation((error, passTimes) => {
    if (error) {
      return console.log("It didn't work!", error);
    }
    // success, print out the deets!
    printPassTimes(passTimes);
  });