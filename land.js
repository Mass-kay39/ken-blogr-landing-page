function openav(){
    document.getElementById('navbar').style.width ='80%'
    document.getElementById('main').style.marginTop = '110px'
}
function closenav(){
    document.getElementById('navbar').style.width = '0px'
    document.getElementById('main').style.marginBottom = '50px'
}
function kennyDrop(){
    document.getElementById('kennydrop').classList.toggle('show')
}
window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
        let usedrop = document.getElementsByClassName('dropdown-content')
        let i;
        for(i = 0; i < usedrop.length; i++){
            let dropbtns = usedrop[i]
            if(dropbtns.classList.contains('show')){
                dropbtns.classList.remove('show')
            }
        }
    }
}



function taiwoDrop(){
    document.getElementById('taiwodrop').classList.toggle('show')
}
window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
        let usedrop = document.getElementsByClassName('dropdown-content')
        let i;
        for(i = 0; i < usedrop.length; i++){
            let dropbtns = usedrop[i]
            if(dropbtns.classList.contains('show')){
                dropbtns.classList.remove('show')
            }
        }
    }
}




function mumDrop(){
    document.getElementById('mumdrop').classList.toggle('show')
}
window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
        let usedrop = document.getElementsByClassName('dropdown-content')
        let i;
        for(i = 0; i < usedrop.length; i++){
            let dropbtns = usedrop[i]
            if(dropbtns.classList.contains('show')){
                dropbtns.classList.remove('show')
            }
        }
    }
}