function aberta(){
    let linha1 = document.getElementById('linha1');
    let linha2 = document.getElementById('linha2');
    let linha3 = document.getElementById('linha3');
    let menu2 =  document.getElementById('menu2');

    if(menu2.classList.contains('menu_aberto')){
        menu2.classList.remove('menu_aberto');
        linha1.style.transform = 'rotate(0deg)translateY(0)';
        linha2.style.opacity = '1';
        linha3.style.transform = 'rotate(0deg)translateY(0)';
    
    }else{
        menu2.classList.add('menu_aberto');
        linha1.style.transform = 'rotate(45deg)translateY(13px)';
        linha2.style.opacity = '0';
        linha3.style.transform = 'rotate(-45deg)translateY(-13px)';
        
    }

}
