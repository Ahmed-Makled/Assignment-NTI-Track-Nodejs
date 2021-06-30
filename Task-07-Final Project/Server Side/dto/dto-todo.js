// DTo Data Transformation Obiect
function todoDTO({ _id, title, description, dueDate, status, who }) {
  return {
    id: _id,
    title,
    description,
    status,
    who,
    dueDate,
  };
}

module.exports = {
  todoDTO,
};
