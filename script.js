
// document.querySelector('#button')
document.getElementById('button').addEventListener('click', () => {
    const breed = document.getElementById('search-dog').value;
    fetch(`https://dog.ceo/api/breeds/image/random`).then (response =>{
            response.json().then(dog =>{
            document.getElementById('results-list').src = dog.message
        })
    })
})

// function displayResults(responseJson) {
//     return `
//     <div>
//       <br/>
//       <img src="${responseJson}" class="max-results">
//     </div>
//     ` ;
//   }
