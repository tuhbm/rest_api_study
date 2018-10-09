let a;

// fetch('http://localhost:3000/user')
//   .then(res => res.json())
//   .then(data => {
//     document.body.textContent = data.result[0].name;
//   });



document.querySelector('button').addEventListener('click', () => {
  fetch('http://localhost:3000/user', {
    method: 'post',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
      id: 10,
      name: 'ㅌㅔ스트',
      age: 44
    })
  })
    .then(res => res.json())
    .then(data => console.log(data))
});