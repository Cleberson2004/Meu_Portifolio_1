function open_side_bar(){
    var side_bar = document.getElementById("side_bar_div")
    if(side_bar.style.display === 'block'){
        side_bar.style.display = 'none'

    }else{
        side_bar.style.display = 'block'
    }
}