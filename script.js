document.addEventListener('DOMContentLoaded', () => {
    //snow
    snowStorm.snowColor = "#fff"; // Цвет снежинок
    snowStorm.flakesMaxActive = 100; // Максимальное количество видимых снежинок
    snowStorm.followMouse = true; // гоняться за курсором
    snowStorm.snowCharacter = "&bull;"; // Вид снежинки
    snowStorm.vMaxX = 1
    snowStorm.vMaxY = 1
    snowStorm.freezeOnBlur = true;
    //on load animations
    setTimeout(() => {
        document.getElementById('box').classList.add('visible')
        setTimeout(() => {
            document.getElementById('fixed_header').classList.add('outgoing_down')
            document.getElementById('cover_text').classList.add('outgoing_up')
            document.getElementById('footer').classList.add('visible_footer')
            setTimeout(() => document.getElementsByClassName('cookie')[0].classList.add('outgoing_up_absolute'), 200)
        }, 200)
    }, 200)
    document.getElementById('fixed_header').classList.remove('outgoing_down')
    document.getElementById('cover_text').classList.remove('visible')

    //theme changer
    const switcher = document.querySelector('#moon_btn')
    switcher.addEventListener('click', () => {
        document.body.classList.toggle('light-theme')
    })
    //hamburger animation
    const switcher_hamburger = document.querySelector('#moon_btn_hamburger')
    switcher_hamburger.addEventListener('click', () => {
        document.body.classList.toggle('light-theme')
    })

    window.onscroll = () => {

        let header = document.getElementsByClassName('header')[0]
        header.classList.remove('outgoing_down')
        if (window.scrollY > header.offsetTop){
            document.getElementById('up').classList.add('up_change')

            // setTimeout(() => header.classList.add("sticky_no_padding"),100)
        }
        else {
            document.getElementById('up').classList.remove('up_change')
            // setTimeout(() => header.classList.remove('sticky_no_padding'), 100)
            // header.classList.remove('sticky_no_padding')
        }
    }
})
//show hamburger menu
const menuOnClick = () => {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

// const terms_of_service = () => {
//     let terms_of_service = document.getElementsByClassName('terms_of_service')[0]
//     let privacy = document.getElementsByClassName('privacy')[0]
//     let cover_text = document.getElementsByClassName('cover_text')[0]
//     let cover_textId = document.getElementById('cover_text')
//     setTimeout(() => {
//         window.scrollTo({top: 0, behavior: "smooth"})
//         if (terms_of_service.className === 'terms_of_service' && privacy.className === 'privacy') {
//             cover_text.classList.toggle('unvisible')
//             setTimeout(() => {
//                 cover_text.style.display = "none"
//                 cover_textId.classList.remove('outgoing_up')
//                 document.getElementById('box').classList.toggle('full_background')
//                 terms_of_service.classList.toggle('visible_terms')
//                 setTimeout(() => {
//                     terms_of_service.classList.toggle('visible')
//                 }, 200)
//             }, 200)
//         }
//     }, 200)
// }
//
// const privacy = () => {
//     let privacy = document.getElementsByClassName('privacy')[0]
//     let terms_of_service = document.getElementsByClassName('terms_of_service')[0]
//     let cover_text = document.getElementsByClassName('cover_text')[0]
//     setTimeout(() => {
//         window.scrollTo({top: 0, behavior: "smooth"})
//         if (privacy.className === 'privacy' && terms_of_service.className === 'terms_of_service') {
//             cover_text.classList.toggle('unvisible')
//             setTimeout(() => {
//                 cover_text.style.display = "none"
//                 cover_text.classList.remove('outgoing_up')
//                 document.getElementById('box').classList.toggle('full_background')
//                 privacy.classList.toggle('visible_privacy')
//                 setTimeout(() => {
//                     privacy.classList.toggle('visible')
//                 }, 200)
//             }, 200)
//         }
//     }, 200)
// }
// const back_main = () => {
//     let terms_of_service = document.getElementsByClassName('terms_of_service')[0]
//     let cover_text = document.getElementsByClassName('cover_text')[0]
//     let cover_textId = document.getElementById('cover_text')
//     setTimeout(() => {
//         window.scrollTo({top:0, behavior: "smooth"})
//         if (terms_of_service.className !== 'terms_of_service') {
//             terms_of_service.classList.toggle('visible')
//             setTimeout(() => {
//                 document.getElementById('box').classList.toggle('full_background')
//                 terms_of_service.classList.toggle('visible_terms')
//                 cover_text.style.display = "block"
//                 setTimeout(() => {
//                     cover_textId.classList.toggle('unvisible')
//                 }, 200)
//             }, 200)
//         }
//     }, 200)
// }
//
// const up = () => {
//     window.scrollTo({top: 0, behavior: "smooth"})
// }