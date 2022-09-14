export const addUser = (name, room) => (
  {
    type: 'ADD_USER',
    payload: { name, room },
  }
);