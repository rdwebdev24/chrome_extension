// try {
//      fetch('https://icanhazdadjoke.com/slack')
//      .then(data => data.json())
//      .then(jokeData =>{
//           console.log(jokeData)
//           const joketext = jokeData.attachments[0].fallback
//           const jokeElement = document.getElementById('jokeElement')
//           jokeElement.innerHTML = joketext
//      })
// } catch (error) {
//      // nothing
// }


// NEWS API //
console.log('popup loaded')


try {
     const options = {
          method: 'GET',
          headers: {
               'X-RapidAPI-Key': 'db553e6076msh6431e04f8d54b9ep1c4067jsna3eb30d8d7c2',
               'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
          }
     };
     document.getElementById('punchline').innerHTML = 'loading...'
     fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
          .then(response => response.json())
          .then(response =>{
               document.getElementById('punchline').innerHTML = response.body[0].punchline
               document.getElementById('jokeElement').innerHTML = response.body[0].setup
               console.log(response.body);
               console.log(response.body[0].setup);
          })
          .catch(err => console.error(err));
} catch (error) {
     // nothing
}