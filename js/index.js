
  const cardImage= document.querySelectorAll('.card img');
  const modalOuter = document.querySelector('.modal-outer');
  const modalInner = document.querySelector('.modal-inner');

  for (let i = 0; i < cardImage.length; i++) {
    cardImage[i].addEventListener('click', handleCardClick);
    }

modalOuter.addEventListener('click', closeModal); 

function handleCardClick(event) {
        const button = event.currentTarget;
        const card = button.closest('.card');
        console.log(card);
        const imgSrc = card.querySelector('img').src;
        console.log(imgSrc);
        modalInner.innerHTML = `
        <img  src="${imgSrc.replace('200', '600')}"/>
        `;
        // show the modal
         modalOuter.classList.add('open');
      
}

function closeModal(event) {
    console.log(event.target);
    console.log(event.currentTarget);
    modalOuter.classList.remove('open');
   
}