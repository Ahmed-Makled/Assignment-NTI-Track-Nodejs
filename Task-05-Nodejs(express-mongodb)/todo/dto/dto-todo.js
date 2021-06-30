// DTo Data Transformation Obiect
function todoDTO({ _id, title, description, dueDate, status }) {
  return {
    id: _id,
    title,
    description,
    status,
    dueDate,
  };
}

module.exports = {
  todoDTO,
};
