const control1s = 
document.querySelectorAll(".control1");

let currentItem1 = 0;
const item1s = document.querySelectorAll(".item1");
const maxItem1s = item1s.length;

control1s.forEach(control1 => {
    control1.addEventListener('click',() => {
        const isLeft = control1.classList.contains("arrow-left1");
        if(isLeft){
            currentItem1 -= 1;
        } else{
            currentItem1 += 1;
        }

        if(currentItem1 >= maxItem1s){
            currentItem1 = 0;
        }

        if(currentItem1 < 0){
            currentItem1 = maxItem1s - 1;
        }

        item1s.forEach(item1 => item1.classList.remove('current-item1'));

        item1s[currentItem1].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        });

        item1s[currentItem1].classList.add('current-item1');
     
    });
});