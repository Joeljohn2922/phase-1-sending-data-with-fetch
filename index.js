// Add your code here
// fetch ("http://localhost:3000/users", configurationObject); 
// const configurationObject = {
//     method: "POST",
//   }; 

function submitData(name, email) {
    let formData = {
      name: name,
      email: email
    };
  
    let configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    };
  
    return fetch('http://localhost:3000/users', configObj)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        appendIdToDOM(data.id);
        return data;
      })
      .catch(error => {
        appendErrorToDOM(error.message);
        return error;
      });
  }
  
  function appendIdToDOM(id) {
    const idElement = document.createElement('p');
    idElement.textContent = `New ID: ${id}`;
    document.body.appendChild(idElement);
  }
  
  function appendErrorToDOM(errorMessage) {
    const errorElement = document.createElement('p');
    errorElement.textContent = `Error: ${errorMessage}`;
    document.body.appendChild(errorElement);
  }