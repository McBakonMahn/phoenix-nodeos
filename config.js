const username = 'admin';
const password = 'admin';
const vmName = 'default';

function getUsername() {
  return username;
}

function getPassword() {
   return password;
}

function getVmName() {
  return vmName;
}

module.exports = {
  getUsername,
  getPassword,
  getVmName
}