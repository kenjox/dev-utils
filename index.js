const dd = (item) => {
  if (item === Object(item)) {
    console.log(JSON.stringify(item, null, 2));
  } else {
    console.log(item);
  }
};

const ddt = (item) => {
  if (item instanceof Array || item === Object(item)) {
    console.table(item);
  } else {
    console.log(item);
  }
};

module.exports = {
  dd,
  ddt,
};
