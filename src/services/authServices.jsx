import axios from 'axios';

export const getData = async (url) => {
  try {
    const data = await axios.get(url);
    return data;
  } catch (e) {
    console.log(e, 'something');
    return e.response.data;
  }
};

// export const postData = async (url, data) => {
//   try {
//     const response = await axios.post(url, data);
//     return response;
//   } catch (e) {
//     return e.response.data;
//   }
// };

export const postData = async (url, data) => {
  const response = await axios.post(url, data);
  return response;
};

export const newLogin = (data) => postData('chakventory/login', data);
export const otpVerify = (data) => postData('chakventory/verify-otp', data);
// export const resetPassword = (data) =>
//   postData('chakventory/forgot-password', data);

// export const login = async ({ phone, password }) => {
//   // invalid url will trigger an 404 error

//   return await axios
//     .post(
//       `chakventory/login`,
//       {
//         phone,
//         password,
//       },
//       { validateStatus: false }
//     )
//     .then((response) => {
//       return response.data;
//     })
//     .catch((err) => {
//       console.error('Error response:');
//       console.error(err.response.data); // ***
//       console.error(err.response.status); // ***
//       console.error(err.response.headers);
//     });

//   try {
//     const response = await axios.post('chakventory/login', {
//       phone,
//       password,
//     });

//     return response;
//   } catch (err) {
//     console.error(err.response.status);
//     console.error(err.response.data);
//     console.error(err.response.headers);
//     window.alert('hello stupid!');
//     return err.response.data;
//   }
// };
