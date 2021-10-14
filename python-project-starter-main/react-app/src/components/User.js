import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CanvasList from './CanvasList'

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const data = await response.json();
      console.log(data.following);
      setUser(data.user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>Username</strong> {user.username}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
      <li>
        <p>temporary link: <a href='/canvases/new-canvas'>new Canvas</a></p>
      </li>
      <CanvasList />
    </ul>
  );
}
export default User;
