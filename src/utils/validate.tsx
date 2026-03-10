export const checkValidData = (
  email: string,
  password: string,
  name: string
) => {
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
      password
    );
  const isValidName = /^[A-Za-z ]{2,50}$/.test(name);

  if (!isValidEmail) return "Email ID is not valid";
  if (!isValidPassword) return "Password is not valid";

  return null;
};
