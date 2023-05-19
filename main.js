   function loadTodoList() {
      // Fetch data from the API
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
          // Filter uncompleted todos
          const uncompletedTodos = data.filter(todo => !todo.completed);

          // Clear previous table data
          const todoTableBody = document.getElementById('todoTableBody');
          todoTableBody.innerHTML = '';

          // Create table rows for uncompleted todos
          uncompletedTodos.forEach(todo => {
            const row = `
              <tr>
                <td>${todo.id}</td>
                <td>${todo.title}</td>
                <td><input type="checkbox" onchange="checkCompletion()"></td>
              </tr>
            `;
            todoTableBody.innerHTML += row;
          });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    // Validate 5 completed todos
    function checkCompletion() {
      const completedTodos = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
      if (completedTodos.length === 5) {
        alert('Congrats. 5 Tasks have been Successfully Completed');
      }
    }
    // function checkCompletion() {
    //   return new Promise((resolve, reject) => {
    //     const completedTodos = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
    //     completedTodos.forEach((todo) => {
    //       // Simulating asynchronous task completion
    //       setTimeout(() => {
    //         // Increment the completed tasks counter
    //         completedTodos++;
    
   
  

