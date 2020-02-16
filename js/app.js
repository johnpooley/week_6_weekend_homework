document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded');

  const handleFormSubmit = function(event){
    event.preventDefault();
    console.log('form submitted');

// get info from form
    const resultList = document.querySelector('#record-list');

// create text with form info
    const newLi = document.createElement('Li');
    newLi.textContent = `${event.target.year.value} saw the marvelous album ${event.target.albumTitle.value} by the talented ${event.target.artistName.value} featuring the wonderful ${event.target.instrument.value}!`;

// add form text to list
    resultList.appendChild(newLi);

    // reset form values
    recordForm.reset();
  }

// submit button
  const recordForm = document.querySelector('#add-new-record');
  recordForm.addEventListener('submit', handleFormSubmit);

  // delete all button

  const handleDeleteAllButton = function () {
    const recordList = document.querySelector('#record-list');
    while (recordList.firstChild) { recordList.removeChild(recordList.firstChild);
    }
  }

const deleteButton = document.querySelector('#deleteAll');
deleteButton.addEventListener('click', handleDeleteAllButton);

})
