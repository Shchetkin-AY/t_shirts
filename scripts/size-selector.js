(function() {

    const controlls = document.querySelectorAll('.sizes__item-link')
    const activeClass = 'sizes__item--type-active'

    controlls.forEach(function(control) {
        control.classList.remove(activeClass)
        control.addEventListener('click', function(e) {

            e.preventDefault();

            controlls.forEach(function(elem) {
                elem.closest('.sizes__item').classList.remove(activeClass)
            })

            control.closest('.sizes__item').classList.add(activeClass)
        })
        
    })

}())