'use ctrict'

const MyTabs = () => {
    let tabs = document.querySelectorAll('.tabs-container-js');
    tabs.forEach((cell)=>{
        let singles = Array.prototype.slice.call(cell.children);

        singles.forEach((c) => {
            let title = c.querySelector('.tab-title-js')
            let span = title.querySelectorAll(' span');
            let hidden = c.querySelector('.tab-hidden-js');
            let svg = c.querySelector('.tab-title-js i');
            hidden.style.height = "0px"
            function openItems(e) {
                if (!hidden.classList.contains("is-active")) {
                    title.classList.add("is-active")
                    hidden.classList.add("is-active")
                    svg.classList.add("is-active")
                    hidden.style.height = `${hidden.scrollHeight}px`
                    hidden.animate([
                        { height: '0px' },
                        { height: `${hidden.scrollHeight}px` },
                    ], {
                        duration: 300,
                        easing: 'ease-in-out',
                    })
                } else {
                    title.classList.remove("is-active");
                    hidden.classList.remove("is-active");
                    svg.classList.remove("is-active");
                    hidden.animate([
                        { height: `${ hidden.scrollHeight }px` },
                        { height: '0px' },
                    ], {
                        duration: 300,
                        easing: 'ease-in-out',
                    })
                    hidden.style.height = "0px"

                }
            }


            title.addEventListener('click', openItems)

        })
    })

};
document.addEventListener('DOMContentLoaded', function(){
    const tabs = document.querySelectorAll('.tabs-container-js ');
    if(tabs.length){
        MyTabs();
    }

});



