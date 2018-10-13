const app = "I don't do much.";

const token = '163d8af7ee9858cef2cab02b9c8a9977dc5edaae'
fetch('https://api.github.com/repos/jquery/jquery/commits',
  {
    headers:
      {
        Authorization: `token ${token}`
      }
  }).then(res => res.json()).then(json => console.log(json));

//   const token = 'YOUR_TOKEN_HERE'
// fetch('https://api.github.com/user/repos', {
//   headers: {
//     Authorization: `token ${token}`
//   }
// }).then(res => res.json()).then(json => console.log(json));
