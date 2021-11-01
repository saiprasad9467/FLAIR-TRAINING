const FormValidation = (inputs) => {
  let errors = {};

  if (!inputs.firstName) {
    errors.firstName = "Enter FirstName ";
  }
  if (!inputs.lastName) {
    errors.lastName = "Enter LastName ";
  }
  if (!inputs.email) {
    errors.email = "Enter Your Email ";
  } else if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs.email)
  ) {
    errors.email = "Enter Valid Email ";
  }
  if (!inputs.password) {
    errors.password = "Enter Password ";
  } else if (inputs.password.length < 8) {
    errors.password = " Password have atleat 8 charcters.";
  }
};
export default FormValidation;
