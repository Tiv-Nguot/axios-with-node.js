const url = 'https://jsonplaceholder.typicode.com/users';
axios.get(url)
  .then(response => {
    const userData = response.data;
    console.log('userData', userData)
    // call back to display
    getAllUsers(userData)
  })
  .catch(error => {
    console.error(error);
  });


  // use to get all the data that we get from the axios
  function getAllUsers(userData){
    const userCardContainer = document.querySelector('.container');

    userData.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');
        
        userCard.innerHTML = `
            <ul>
                <li class="id">${user.id}</li>
                <li class="name">${user.name}</li>
                <li class="username">${user.username}</li>
                <li class="email">${user.email}</li>
            </ul>
        `;
        
        userCardContainer.appendChild(userCard);
    });
  }