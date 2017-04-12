'use strict'

function changeTime(){
	var horas = document.getElementById("horas");
	var data = document.getElementById("data");
	
	var months = ["Janeiro","Febreiro","Março","Abril","Maio","Junho","Julho","Agusto","Setembro","Outubro","Novembro","Dezembro"];
	
	var date = new Date();
	
	horas.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	data.innerHTML = date.getDate() + "/" + months[date.getDay()];
}

function init(){
	changeTime();
	setInterval(changeTime,1000);
}

function cancelar(){
	var botao = document.getElementById("chamarEmpregado");
	
	botao.style.cursor = "pointer";
	botao.innerHTML = "<h1> Chamar Empregado </h1>";
	
	function change(){
		botao.onclick = chamarEmpregado;
	}
	
	setTimeout(change,250);
}

function sim(){
	var botao = document.getElementById("chamarEmpregado");
	
	botao.innerHTML = "<h1> Um empregado foi chamado. Aguarde...</h1> <button style='margin-left:35%' onclick='cancelar()'> Cancelar </button>";
}

function chamarEmpregado(){
	var botao = document.getElementById("chamarEmpregado");
	
	botao.onclick = "void()";
	botao.style.cursor = "default";
	
	botao.innerHTML = "<h1> Tem a certeza que quer chamar o empregado? </h1><button style='margin-left:5%' onclick='sim()'> Sim </button> <button style='margin-left:55%' onclick='cancelar()'> Nao </button>";
}