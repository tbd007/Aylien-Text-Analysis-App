export function handleSubmit(event) {
    console.log('abc');
    event.preventDefault();
  let formtext = document.getElementById('name').value;
  if (!formtext) return;
  console.log(formtext);
    fetch("http://localhost:4000/api", {
    method: "POST",
    mode:"cors",
    headers: {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({formtext})
  })
    .then(res => res.json())
    .then(function(response) {
      console.log(response);
      document.getElementById("polarity").innerHTML = response.polarity;
      document.getElementById("subjectivity").innerHTML = response.subjectivity;
      document.getElementById("polarity_confidence").innerHTML =
      response.polarity_confidence;
      document.getElementById("subjectivity_confidence").innerHTML =
      response.subjectivity_confidence;
    });
};

//JEST Test 
function formHandler (formtext){
  if (formtext.length > 0 ) {
    return "Valid input: " + formtext;
  }
  console.log(formtext);
};

module.exports = formHandler;