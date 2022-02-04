
  const cardImage= document.querySelectorAll('.card img');
  const modalOuter = document.querySelector('.modal-outer');
  const modalInner = document.querySelector('.modal-inner');

  for (let i = 0; i < cardImage.length; i++) {
    cardImage[i].addEventListener('click', handleCardClick);
    }


function handleCardClick(event) {
        const target = event.currentTarget;
        const card = target.closest('.card');
        console.log(card);
        const imgSrc = card.querySelector('img').src;
        console.log(imgSrc);
        modalInner.innerHTML = `
        <img  src="${imgSrc.replace('200', '600')}"/>
        `;
        // show the modal
         modalOuter.classList.add('open');
      
}

modalOuter.addEventListener('click', closeModal); 


function closeModal(event) {
   
    const isOutside = !event.target.closest('.modal-inner');
    console.log(isOutside);
    if (isOutside) {
        modalOuter.classList.remove('open');
    }


}