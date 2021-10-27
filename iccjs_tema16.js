/*
nome: Karin Marie Silva dos Santos = nº 15
      Fernanda de Pontes = nº 6
turma: IN110 (A MELHOR)*/

var cores = new Array(10);
	cores[0] = "rgb(255,228,196)";
	cores[1] = "rgb(255,228,196)";
	cores[2] = "rgb(175,238,238)";
	cores[3] = "rgb(255,235,205)";
	cores[4] = "rgb(216,191,216)";
	cores[5] = "rgb(250,128,114)";
	cores[6] = "rgb(255,182,193)";
	cores[7] = "rgb(238,130,238)";
	cores[8] = "rgb(127,255,212)";
	cores[9] = "rgb(131,111,255)";



function sorteio(min, max)
{
	min = parseInt(min);
	max = parseInt(max);
	var sorteio = Math.round(max*Math.random());

	if(sorteio < min)
	{
		for(i = 0; i < document.getElementsByClassName("princ").length; i++)
			document.getElementsByClassName("princ")[i].style.backgroundColor = cores[min];
		return;
	}
	else {
		for(i = 0; i < document.getElementsByClassName("princ").length; i++)
			document.getElementsByClassName("princ")[i].style.backgroundColor = cores[sorteio];
	}
	return;
}

	sorteio(0,9);

function resultadoJogo(p1, p2, p3, p4, p5, p6)
{

	p1 = parseInt(p1);
	p3 = parseInt(p3);
	p4 = parseInt(p4);
	p6 = parseInt(p6);

	if (p1 != 0 && p1 != 1)
		p1 = 0;

	if (p3 != 0 && p3 != 1)
		p3 = 0;

	if (p4 != 0 && p4 != 1)
		p4 = 0;

	if (p6 != 0 && p6 != 1)
		p6 = 0;

	var p2Pts;
	var p5Pts;

	if(p2 == "23C" || p2 == "23c")
		p2Pts = 1;
	else
		p2Pts = 0;

	//p2Pts = parseInt(p2Pts);

	if(p5 == "6")
		p5Pts = 1;
	else
		p5Pts = 0;

	//p5Pts = parseInt(p5Pts);

	var total = p1 + p2Pts + p3 + p4 + p5Pts + p6;
	total = parseInt(total);



	//MENSAGEM DE CADA PONTUAÇÃO//


	if(total == 0)
	{
		document.getElementById("imgresultado").innerHTML = "<img src='iccjs_tema16/zero.gif' width='400'>";
		document.getElementById("imgcomment").innerHTML = "MICHAEL REVOLTADO DE <i>SCREAM</i>";
		document.getElementById("pts").innerHTML = "PONTUAÇÃO: "+total;
	}

	if(total == 1)
	{
		document.getElementById("imgresultado").innerHTML = "<img src='iccjs_tema16/um.gif' width='400'>";
		document.getElementById("imgcomment").innerHTML = "MICHAEL BRAVÍSSIMO DE <i>THRILLER</i>";
		document.getElementById("pts").innerHTML = "PONTUAÇÃO: "+total;
	}

	if(total == 2)
	{
		document.getElementById("imgresultado").innerHTML = "<img src='iccjs_tema16/dois.png' width='400'>";
		document.getElementById("imgcomment").innerHTML = "MICHAEL DESACREDITADO DOS <i>ANOS 2000</i>";
		document.getElementById("pts").innerHTML = "PONTUAÇÃO: "+total;
	}

	if(total == 3)
	{
		document.getElementById("imgresultado").innerHTML = "<img src='iccjs_tema16/tres.png' width='400'>";
		document.getElementById("imgcomment").innerHTML = "MICHAEL SURPRESO DE <i>REMEMBER THE TIME</i>";
		document.getElementById("pts").innerHTML = "PONTUAÇÃO: "+total;
	}

	if(total == 4)
	{
		document.getElementById("imgresultado").innerHTML = "<img src='iccjs_tema16/quatro.png' width='400'>";
		document.getElementById("imgcomment").innerHTML = "MICHAEL FELIZÃO DE <i>DON'T STOP 'TIL YOU GET ENOUGH</i>";
		document.getElementById("pts").innerHTML = "PONTUAÇÃO: "+total;
	}

	if(total == 5)
	{
		document.getElementById("imgresultado").innerHTML = "<img src='iccjs_tema16/cinco.gif' width='400'>";
		document.getElementById("imgcomment").innerHTML = "MICHAEL DOIDÃO DE <i>GHOSTS</i>";
		document.getElementById("pts").innerHTML = "PONTUAÇÃO: "+total;
	}
	
	if(total == 6)
		{
		document.getElementById("imgresultado").innerHTML = "<img src='iccjs_tema16/seis.gif' width='400'>";
		document.getElementById("imgcomment").innerHTML = "MICHAEL LINDO E VITORIOSO DA <i>ERA BAD</i>";
		document.getElementById("pts").innerHTML = "PONTUAÇÃO: "+total;
	}


	//CORES DE ERRO//


	if(p1 == 0)
		document.getElementById("p1").style.backgroundColor = "#FF6347";
	else
		document.getElementById("p1").style.backgroundColor = "#98FB98";

	if(p2Pts == 0)
		document.getElementById("p2").style.backgroundColor = "#FF6347";
	else
		document.getElementById("p2").style.backgroundColor = "#98FB98";

	if(p3 == 0)
		document.getElementById("p3").style.backgroundColor = "#FF6347";
	else
		document.getElementById("p3").style.backgroundColor = "#98FB98";

	if(p4 == 0)
		document.getElementById("p4").style.backgroundColor = "#FF6347";
	else
		document.getElementById("p4").style.backgroundColor = "#98FB98";

	if(p5Pts == 0)
		document.getElementById("p5").style.backgroundColor = "#FF6347";
	else
		document.getElementById("p5").style.backgroundColor = "#98FB98";

	if(p6 == 0)
		document.getElementById("p6").style.backgroundColor = "#FF6347";
	else
		document.getElementById("p6").style.backgroundColor = "#98FB98";
}