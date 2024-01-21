let poems = [
    {
        poemText: `
        <p>
            С Новым годом! Волшебства, <br>
            Смеха, счастья и тепла, <br>
            Мира, радостей, достатка <br>
            И во всех делах порядка! <br>
        </p>
        <p>
            Пусть все серое, плохое <br>
            Старый год возьмет с собою. <br>
            Впредь лишь светлые мгновенья <br>
            Создают пусть настроенье! <br>        
        </p>`,
        bg: `url(img/bg1.jpg)`
    },
    {
        poemText: `
        <p>
            Желаю мира и добра, <br>
            Любви, душевного тепла! <br>
            Пускай вам этот Новый год <br>
            Успех и радость принесет! <br>
        </p>
        <p>
            Пусть Новый год откроет двери <br>
            В мир волшебства, заботы, веры. <br>
            И всё хорошее начнется! <br>
            Удача пусть вам улыбнется! <br>    
        </p>`,
        bg: `url(img/bg2.jpg)`
    },
    {
        poemText: `
        <p>
            Этот праздник любит каждый, <br>
            Этот праздник каждый ждет, <br>
            Для детей он самый важный, <br>
            А зовется — Новый год! <br>
        </p>
        <p>
            Будет елка наша яркой, <br>
            В разноцветной мишуре, <br>
            Принесет Мороз подарки <br>
            И подарит детворе! <br>
        </p>`,
        bg: `url(img/bg3.jpg)`
    },
]

let wrapper = document.querySelector('.wrapper');
let btn = document.querySelector('#btn');
let poem = document.querySelector('.poem');

// element.innerHTML - получить/изменить код элемента
// Math.random() - генерирукт псевдослучайнок число от 0 до 1, не включая 1
// Math.floor() - округляет в меньшую сторону до целого числа
btn.addEventListener('click', () => {
    let randomIndex;
    randomIndex = Math.floor((Math.random() * poems.length));

    let randomBg;
    randomBg = Math.floor((Math.random() * poems.length));

    poem.innerHTML = '';
    poem.innerHTML = poems[randomIndex].poemText;
    wrapper.style.backgroundImage = poems[randomBg].bg;
})