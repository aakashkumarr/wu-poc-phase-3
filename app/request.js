fetch("https://shiny-space-lamp-wwv44r5xr44fvjxq-3000.app.github.dev/api/auth/login", { 
    users: {
        email: 'abcd@test.com',
        password: 'passs'
    }
}, {
    method: 'POST'
})
  .then((res) => res.json())
  .then(mapUser)
  .then(console.log);

function mapUser(users) {
  let usersArr = [];
  for (const key in users) {
    let obj = {};

    obj.id = key;
    for (const subKey in users[key]) {
      obj[subKey] = users[key][subKey];
    }
    usersArr.push(obj);
  }
  return usersArr;
}