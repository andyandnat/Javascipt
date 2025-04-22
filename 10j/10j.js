let calculation = localStorage.getItem('calculation') || '';

      //Display the calculator when the page first loads.
      displayCalculation();

      function updateCalculation(value) {
        calculation += value;

        //Display the calculator on the page
        //instead of console.log
        displayCalculation();
        
        localStorage.setItem('calculation', calculation);
      }

      function displayCalculation() {
        document.querySelector('.js-calculation')
          .innerHTML = calculation;
      }