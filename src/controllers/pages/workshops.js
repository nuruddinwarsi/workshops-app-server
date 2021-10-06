const workshopsArray = require('../../data/workshops.json');

const getWorkshops = (req, res, next) => {
  res.render('workshops', {
    workshops: workshopsArray,
  });
};

module.exports = {
  getWorkshops,
};
