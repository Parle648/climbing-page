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

const rightTarget = document.querySelector('.done-slider_arrow-right'),
      leftTarget = document.querySelector('.done-slider_arrow-left'),
      sliderWrapper = document.querySelector('.done-slider-inner-wrapper')

rightTarget.addEventListener('click', function(event){
    sliderWrapper.removeEventListener('animationend', r)
    let firstElement = sliderWrapper.firstElementChild
    
    nextSliderElement = document.createElement('span');
    nextSliderElement.classList.add('done-slider__cart')
    nextSliderElement.innerHTML = `
        <img src="${sliderWrapper.firstElementChild.firstElementChild.getAttribute('src')}" alt="" class="done-slider__img">
        <h2 class="done-slider__inner-ttl">${sliderWrapper.firstElementChild.lastElementChild.innerHTML}</h2>
    `
    sliderWrapper.append(nextSliderElement);
    sliderWrapper.classList.add('done-slider-inner-wrapper_active')

    function r(){
        sliderWrapper.removeChild(firstElement)
        sliderWrapper.classList.remove('done-slider-inner-wrapper_active')
    }
    
    sliderWrapper.addEventListener('animationend', r)
})
leftTarget.addEventListener('click', function(event){
    let lastElement = sliderWrapper.lastElementChild

    previousSliderElement = document.createElement('span');
    previousSliderElement.classList.add('done-slider__cart')
    previousSliderElement.innerHTML = `
        <img src="${sliderWrapper.lastElementChild.firstElementChild.getAttribute('src')}" alt="" class="done-slider__img">
        <h2 class="done-slider__inner-ttl">${sliderWrapper.lastElementChild.lastElementChild.innerHTML}</h2>
    `
    sliderWrapper.prepend(previousSliderElement)
    sliderWrapper.style.marginLeft = '-430px'
    sliderWrapper.classList.add('done-slider-inner-wrapper_active-left')
    
    sliderWrapper.addEventListener('animationend', function(){
        sliderWrapper.classList.remove('done-slider-inner-wrapper_active-left')
        sliderWrapper.style.marginLeft = '0px'
        sliderWrapper.removeChild(lastElement)
    })
})

const faqTriger = document.querySelectorAll('.faq__arrow-border'),
    answerBlock = document.querySelectorAll('.faq__answer'),
    arrows = document.querySelectorAll('.faq__arrow')


faqTriger.forEach(function(triger){
    triger.addEventListener('click', function(event){
        let thisAnswer = event.currentTarget.parentNode.firstElementChild.lastElementChild.lastElementChild
        if(event.currentTarget.closest('.faq__arrow-border_active')){
            thisAnswer.classList.toggle('faq__answer_active')
            
            event.currentTarget.classList.toggle('faq__arrow-border_active')
            event.currentTarget.firstElementChild.classList.toggle('faq__arrow_active')
        } else{
            faqTriger.forEach(function(i){
                i.classList.remove('faq__arrow-border_active')
            })
            answerBlock.forEach(function(i){
                i.classList.remove('faq__answer_active')
            })
            arrows.forEach(function(i){
                i.classList.remove('faq__arrow_active')
            })
            thisAnswer.classList.toggle('faq__answer_active')
    
            event.currentTarget.classList.toggle('faq__arrow-border_active')
            event.currentTarget.firstElementChild.classList.toggle('faq__arrow_active')
        }
    })
})