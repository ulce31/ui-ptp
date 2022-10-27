import axios from 'axios';
import Session from 'supertokens-auth-react/recipe/session';
Session.addAxiosInterceptors(axios);

async function login({ email, password }) {
  // use axios as you normally do
  return await axios.post(`${process.env.REACT_APP_API_URI}login`, {
    email,
    password,
  });
}

export default { login };
