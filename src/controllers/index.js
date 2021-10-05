const home = (req, res) => {
  res.write('Hello,express\n');
  res.end('That is all for now');
};

module.exports = {
  home,
};
