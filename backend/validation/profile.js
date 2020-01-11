const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.location = !isEmpty(data.location) ? data.location : "";
  data.date = !isEmpty(data.date) ? data.date : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle needs be to between 2 and 4 characters";
  }
  if (validator.isEmpty(data.handle)) {
    errors.handle = "Profile handle is required";
  }
  if (validator.isEmpty(data.location)) {
    errors.location = "Profile location is required";
  }
  if (validator.isEmpty(data.date)) {
    errors.date = "Profile date is required";
  }

  return {
    errors,
    isvalid: isEmpty(errors)
  };
};
