export default function Validation(props) {
  const { name, phnNumber, email } = props;
  let errors = {};
  console.log("dfsdf", errors);

  if (!name) {
    errors.name = "Name is required";
  }
  // if (!phnNumber) {
  //   errors.phnNumber = "Phone Number is required";
  // }

  // if (!email) {
  //   errors.email = "Email is required";
  // } else if (!/\S+@\S+\.\S+/.test(email)) {
  //   errors.email = "Email is invalid";
  // }
  return errors;
}
