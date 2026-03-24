fetch('https://jsonplaceholder.typicode.com/')
  .then(response => {
    console.log(response)
    return response.json()
  })
  .then(json => console.log(json))
  .catch(error => console.error(error))
