/* =================================================================== */
/*                         Botão Menu Responsivo                       */
/* =================================================================== */
//Função exibição dos elementos selecionados
console.clear();
var menu = document.querySelector('.nav-button');

menu.addEventListener('click', () => {
    document.querySelector('.menu-links').classList.toggle('active');
    document.querySelector('.user').classList.toggle('active');
});
/* =================================================================== */
/*                         Botão Meus Eventos                          */
/* =================================================================== */
function iniciaEventos(eventosID) {
  const evento = document.getElementById(eventosID);
  evento.classList.add('mostrar');
  evento.addEventListener('click', (e) => {
    if (e.target.id == eventosID || e.target.className == 'fechar') {
      evento.classList.remove('mostrar');
    }
  });
}
const event = document.querySelector('.event');
event.addEventListener('click', function () {
  iniciaEventos('modal-eventos');
});
const ev = document.querySelector('.ev');
ev.addEventListener('click', function () {
  iniciaEventos('modal-eventos');
});
/* =================================================================== */
/*                           Botão Usuários                            */
/* =================================================================== */
function iniciaUsuario(usuariosID) {
  const usuario = document.getElementById(usuariosID);
  usuario.classList.add('mostrar2');
  usuario.addEventListener('click', (e) => {
    if (e.target.id == usuariosID || e.target.className == 'fechar') {
      usuario.classList.remove('mostrar2');
    }
  });
}
const use = document.querySelector('.use');
use.addEventListener('click', function () {
  iniciaUsuario('modal-usuarios');
});
const us = document.querySelector('.us');
us.addEventListener('click', function () {
  iniciaUsuario('modal-usuarios');
});
/* =================================================================== */
/*                          Botão Relatórios                           */
/* =================================================================== */
function iniciaRelatorio(relatoriosID) {
  const relatorio = document.getElementById(relatoriosID);
  relatorio.classList.add('mostrar3');
  relatorio.addEventListener('click', (e) => {
    if (e.target.id == relatoriosID || e.target.className == 'fechar') {
      relatorio.classList.remove('mostrar3');
    }
  });
}
const relat = document.querySelector('.relat');
relat.addEventListener('click', function () {
  iniciaRelatorio('modal-relatorios');
});
const re = document.querySelector('.re');
re.addEventListener('click', function () {
  iniciaRelatorio('modal-relatorios');
});
/* =================================================================== */

function cadEvento(data, nome, hora){
    var tb = document.getElementById("tbEvento");
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);

    var cellEvento = linha.insertCell(0);
    var cellData = linha.insertCell(1);
    var cellNome = linha.insertCell(2);
    var cellHora = linha.insertCell(3);

    cellEvento.innerHTML = qtdLinhas;
    cellData.innerHTML = data;
    cellNome.innerHTML = nome;
    cellHora.innerHTML = hora;
}