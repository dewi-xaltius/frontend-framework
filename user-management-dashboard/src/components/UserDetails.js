import React from 'react';
import ReactDOM from 'react-dom';

// Portal component for User Details modal
const UserDetails = ({ user }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <button onClick={() => alert('More details coming soon!')}>More Info</button>
    </div>,
    document.getElementById('modal-root')
  );
};

export default UserDetails;
