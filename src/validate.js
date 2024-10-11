export default function validate(passphrase) {
  let errors = [];

  if(passphrase.length < 8) {
    errors.push("Length is less than 8 characters");
  }

  if(!passphrase.match(/[a-z]/gm))
    errors.push("Needs at least one lower case character");

  if(!passphrase.match(/[A-Z]/gm))
    errors.push("Needs at least one upper case character");

  if(!passphrase.match(/\d/gm))
    errors.push("Needs at least one digit");

  if(!passphrase.match(/\W/gm))
    errors.push("Needs at least one non-letter character");

  return errors;
}