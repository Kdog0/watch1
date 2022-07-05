let hora = document.querySelector('.relogio')
let calenda = document.querySelector('.date')
let sema = document.querySelector('.semana')
let telas = document.querySelector('#tela')
/*Função que mostra relógio e muda fundo*/
function watch() {
    let horas = new Date
    let hr = horas.getHours()
    let min = horas.getMinutes()
    let seg = horas.getSeconds()
    let hrs = (hr < 10 ? "0" + hr : hr) + ":" + ( min<10 ? "0" + min : min) + ":" + (seg < 10 ? "0" + seg : seg)
    hora.textContent = hrs
    if (hrs <= '18:00:00'){
        telas.className = 'fundos'
    }else{
        telas.className = 'fundos1'
    }
}
/*Função que mostra data e dia da semana*/
function data() {
    let dat = new Date
    let diaSemana = dat.getDay()
    let dia = dat.getDate()
    let mes = dat.getMonth() +1
    let ano = dat.getFullYear()
    let calendario = (dia < '10' ? '0' + dia : dia) + "/" + (mes < 10 ? '0' + mes : mes) + "/"+(ano)

    switch(diaSemana){
        case 0 :
            diaSemana = 'DOM'
            break;
        case 1 :
            diaSemana = 'SEG'
            break;
        case 2 :
            diaSemana = 'TER'
            break;
        case 3 :
            diaSemana = 'QUA'
            break;
        case 4 :
            diaSemana = 'QUI'
            break;
        case 5 :
            diaSemana = 'SEX'
            break;
        case 6 :
            diaSemana = 'SAB'
            break;
    }
    calenda.textContent = calendario
    sema.textContent = diaSemana
} 

setInterval(watch, 1000)

watch()
data()