import axios from 'axios'

// export async function authSignUp(values: object) {
//   console.log("detail>>>", values)
//   axios({
//     // headers: { 'Accept': 'application / json, text/ plain, */*', 'Access-Control-Allow-Methods': '"POST, GET, PUT, DELETE, OPTIONS"', "Access-Control-Allow-Headers": "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept", "Access-Control-Allow-Credentials": "false", "Access-Control-Allow-Origin": "*" },
//     headers: { 'Content-Type': 'application/json, multipart/form-data ', "Access-Control-Allow-Origin": "*", 'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS' },
//     method: 'POST',
//     url: 'https://dummyjson.com/auth/login',
//     data: JSON.stringify(values)
//   }).then((resp) => {
//     console.log("resp from actions>>>>", resp?.data);
//     alert("Login successfully");
//     return resp;
//   }).catch((err) => {
//     console.log(err)
//   })
// }


export async function authLogin(values: object) {
  const res = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Headers': 'access-control-allow-origin,content-type',
      'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({

      username: 'kminchelle',
      password: '0lelplR',
      // expiresInMins: 60, // optional
    })
  })

  const data = await res.json()
  return data
}
