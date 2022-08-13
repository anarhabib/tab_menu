let btns = document.querySelectorAll('.tab-header button')
let divs = document.querySelectorAll('.tab-content div')
for(let btn of btns){
    btn.addEventListener('click', function(){
        let active = document.querySelector('.active')
        active.classList.remove('active')
        this.classList.add('active')

        let index = this.getAttribute('id')
       
        for(let div of divs){
            if(div.id === index){
                div.classList.remove('d-none')
            }

            else{
                div.classList.add('d-none')
            }
        }
    })
}