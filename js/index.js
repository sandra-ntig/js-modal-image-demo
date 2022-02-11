// querySelectorAll ger en lista med bilderna
const cardImage= document.querySelectorAll('.card img');
// Elemetet för yttre modalen - d.v.s hela bakgrunden
const modalOuter = document.querySelector('.modal-outer');
// Elementet för inre modalen - d.v.s elementet som håller bilden
const modalInner = document.querySelector('.modal-inner');


// Lägger en händelsehanterare, addEventListener på yttre modalen. Om den klickas ska funktionen cloasModal köras
modalOuter.addEventListener('click', closeModal); 


// Lägger en händelsehanterar, addEventListener på varje bild med CSS selektor .card img. Det görs genom att loopa igenom varje bild i listan (arrayen) med en for-loop. 
// Om användaren klickar på en bild ska funktionen handleCardClick köras
for (let i = 0; i < cardImage.length; i++) {
  cardImage[i].addEventListener('click', handleCardClick);
  }


function handleCardClick(event) {
        // Hittar elementet som man klickar på
        const target = event.currentTarget;
        console.log(target);
        // Hämtar url:en för bilden
        const imgSrc = target.src;
        console.log(imgSrc); 
        // Lägger in bilden som användaren klickat på i inre modalen
        modalInner.innerHTML = "<img src=" + imgSrc + ">";
        // show the modal
         modalOuter.classList.add('open'); 

      
}


function closeModal(event) {
   
    // Kollar om närmsta föräldraelementet är den inre modulen. Ger en bool, ex False om den är det.
    const isOutside = !event.target.closest('.modal-inner');
    console.log(isOutside);
    // Om bool isOutside är SANT, d.v.s man klickar på yttre modalen. Så ska modalen stängas.
    if (isOutside) {
        modalOuter.classList.remove('open');
    }


}