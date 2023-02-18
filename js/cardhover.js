
const cards = document.getElementsByClassName('card');

for(const card of cards){
    card.addEventListener('mouseenter', function(event){
        event.target.style.backgroundColor = randomColor();
        
    })
}
