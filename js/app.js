document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded');

  const handleFormSubmit = function(event){
    event.preventDefault();
    console.log('form submitted');
  }

  const recordForm = document.querySelector('#add-new-record');
  recordForm.addEventListener('submit', handleFormSubmit)

  
})
