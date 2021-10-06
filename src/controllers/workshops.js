const workshops = require('../data/workshops.json');

const getWorkshops = (req, res, next) => {
  res.status(200);

  // res.setHeader( 'Content-Type', 'application/json' );
  // res.end( JSON.stringify( workshops ) );

  res.json(workshops);
};

const getWorkshopById = (req, res, next) => {
  let { id } = req.params;
  id = parseInt(id);

  res.json(workshops.find((workshop) => id === workshop.id));
};

module.exports = {
  getWorkshops,
  getWorkshopById,
};
