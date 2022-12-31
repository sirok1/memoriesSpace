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
        }, 200)
    }, 200)
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
})
//show hamburger menu
const menuOnClick = () => {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}