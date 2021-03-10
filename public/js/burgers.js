// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }  
  
    // UPDATE
    const devourBtns = document.querySelectorAll('.devour');
  
    // Set up the event listener for the create button
    if (devourBtns) {
      devourBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
          console.log('test');
          // Grabs the id of the element that goes by the name, "id"
          const id = e.target.getAttribute('data-id');
          const newDevour = e.target.getAttribute('data-devoured');
  
          const newDevouredState = {
            devoured: newDevour,
          };
  
          fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            // make sure to serialize the JSON body
            body: JSON.stringify(newDevouredState),
          }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
              console.log(`changed sleep to: ${newDevour}`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  
    // CREATE
    const createBurger = document.querySelectorAll('.createNewBurger')[0];
    console.log(createBurger);
    

    createBurger.addEventListener('click', (e) => {
        // Grabs the value of the textarea that goes by the name, "quote"
        const newBurger = {
            burger_name: document.getElementById('createBurger').value.trim(),
        };

        console.log(newBurger)

        // Send POST request to create a new quote
        fetch('/api/burgers', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },

            // make sure to serialize the JSON body
            body: JSON.stringify(newBurger),
        }).then((res) => {
            console.log(res)
            // Empty the form
            document.getElementById('createBurger').value = '';

            // Reload the page so the user can see the new quote
            console.log('Created a new burger!');
            location.reload();
        });
    });
    
  });
  