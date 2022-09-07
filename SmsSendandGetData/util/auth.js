import axios from 'axios';
const API_KEY = 'df1027e6-6328-4cff-990e-e7d3c56618a2';
import React from 'react';
async function authenticate(mode, email, password) {
 // const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const url = `https://messagesend-app.herokuapp.com/${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    //returnSecureToken: true,

  });

  const token = response.data.token;
  console.log(`Tokken: `+ token);
  return token;
}

export function createUser(email, password) {//userName, telNo, authLevel, 
  return authenticate('adduser', email, password);
}

export function login(email, password) {
  return authenticate('login', email, password);
}