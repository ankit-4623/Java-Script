const random_color = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0;i<6;i++)
    {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}
let in_id

const start_changin_color = function () {
    in_id =  setInterval(change_bg,1000)
    function change_bg() {
        document.body.style.backgroundColor = random_color()
    }
}
const stop_changin_color = function () {
    clearInterval(in_id)
    in_id = null
}

document.querySelector('#start').addEventListener('click',start_changin_color)
document.querySelector('#stop').addEventListener('click',stop_changin_color)






