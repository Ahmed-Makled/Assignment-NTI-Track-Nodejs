// DTo Data Transformation Obiect
function userDTO({ _id, name, email, dueDate }) {
  return {
    id: _id,
    name,
    email,
    dueDate,
  };
}

module.exports = {
  userDTO,
};
