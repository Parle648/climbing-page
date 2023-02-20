const navItems = document.querySelectorAll('.nav__trigger-arrow'),
      itemElements = document.querySelectorAll('.nav__inner-list')  

navItems.forEach(function(target){
    target.addEventListener('click', function(e){
        if(e.target.closest('.nav__trigger-arrow_active')){
            e.target.classList.remove('nav__trigger-arrow_active')
            e.target.nextElementSibling.classList.remove('nav__inner-list_active')
        } else {
            navItems.forEach(function(i){
                i.classList.remove('nav__trigger-arrow_active')
                i.nextElementSibling.classList.remove('nav__inner-list_active')
            })
            e.target.classList.add('nav__trigger-arrow_active')
            e.target.nextElementSibling.classList.add('nav__inner-list_active')
        }
    })
})

const sliderTarget = document.querySelector('.slider__target'),
      sliderPreviousBlock = document.querySelector('.slider__choose-block'),
      amountCalcBlock = document.querySelector('.amount-calcuator')

function movesliderTarget(){
    let position = event.clientX - 30 - amountCalcBlock.getBoundingClientRect().x - 9;
    if(position <= 0){
        position = 0
    } else if (position >= 245){
        position = 245
    }
    sliderTarget.style.left = `${position}px`
    sliderPreviousBlock.style.width = `${position}px`
    document.querySelector('.slider__area-result').innerHTML = Math.floor(( position / 245 ) * 150)
}

sliderTarget.addEventListener('mousedown', function(){
    document.addEventListener('mousemove', movesliderTarget)

    document.addEventListener('mouseup', function(){
        document.removeEventListener('mousemove', movesliderTarget)
    })
})    