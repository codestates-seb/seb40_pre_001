import axios from 'axios';

const handleChange = async (e) => {
  e.preventDefault();

  return await axios
    .get('https://630c-125-177-243-74.jp.ngrok.io/users/1', {
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      credentials: 'same-origin',
      crossdomain: true,
    })
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
};

export default handleChange;
