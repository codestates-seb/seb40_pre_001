const GITHUB = Object.freeze({
  CLIENT_ID: process.env.REACT_APP_GITHUB_ID,
  CLIENT_SECRET: process.env.REACT_APP_REACT_APP_GITHUB_SECRET,
});

const isLoggedIn = localStorage.getItem('token');

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export { GITHUB, USER_REGEX, PWD_REGEX, isLoggedIn };
