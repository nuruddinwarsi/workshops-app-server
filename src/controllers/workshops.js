const workshops = require('../data/workshops.json');

const getWorkshops = (req, res, next) => {
  res.status(200);

  // res.setHeader( 'Content-Type', 'application/json' );
  // res.end( JSON.stringify( workshops ) );

  res.json(workshops);
};

module.exports = {
  getWorkshops,
};
