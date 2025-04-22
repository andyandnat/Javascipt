        
        function toggleButton(selector) {
        const button =  document.querySelector
          (selector);      
        if (!button.classList.contains('is-toggled')) {

          // Before turning this buttin on, check if there's
          // already a button that's turned on and turn it off.
          turnOffPreviousButton();

          button.classList.add('is-toggled');
        } else {
          button.classList.remove('is-toggled');
        }
      }
        
      function turnOffPreviousButton() {
        const previousButton = document.querrySelector
          ('.is-toggled');
        if (previousButton) {
          previousButton.classList.remove('is-toggled');
        }
      }
