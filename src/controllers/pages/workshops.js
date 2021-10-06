const workshops = require('../../data/workshops.json');

const getWorkshops = (req, res, next) => {
  res.render('workshops', {
    // workshops: workshops
    workshops,
  });
};

module.exports = {
  getWorkshops,
};
