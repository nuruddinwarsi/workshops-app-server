const workshops = require('../../data/workshops.json');

const getWorkshops = (req, res, next) => {
  res.render('workshops');
};

module.exports = {
  getWorkshops,
};
