const GITHUB = Object.freeze({
  CLIENT_ID: process.env.REACT_APP_GITHUB_ID,
  CLIENT_SECRET: process.env.REACT_APP_REACT_APP_GITHUB_SECRET,
});

// 로그인이후 컴포넌트 구현을 위한 임시 상수
const isLoggedIn = false;

export { GITHUB, isLoggedIn };
