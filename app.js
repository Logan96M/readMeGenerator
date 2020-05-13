const util = require('util');
const axios = require('axios');
const gitUser = require('./js/tsconfig');
//GitHub API to retrieve their email and profile image.

let currentUser = gitUser()
// log


// "https://pokeapi.co/api/v2/pokemon/pikachu")
//    `https://pokeapi.co/api/v2/pokemon/${document.getElementById('searchText').value;}/`)


// Make a request for a user with a given ID
axios.get(`https://api.github.com/users/${answers.gitUsername}`)
  .then(function (gitHubUser) {
    // handle success
    console.log(gitHubUser);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });



// fetch( "https://api.github.com/users/funchal")
// .then((r) => r.json())
// .then((gitHubUser) => {



//   console.log(gitHubUser);
//   let emailElem = document.getElementById(
//     'emailDiv');
//     emailElem.innerHTML = `
//     <img class="card-img-top" 
//     src="${gitHubUser.avatar_url}" 
//     alt="${gitHubUser.login}"> 
//     <div class="card-body">
//     <h5 class="card-title">Email: ${gitHubUser.email}</h5>



//     </ul>
//  </div>
//     `

// });



// console.log(util.inspect(myObject, {showHidden: false, depth: null}))