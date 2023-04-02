var haslo = "bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var ileskuch = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var haslo1 = "";

for(i=0;i<dlugosc;i++)
{
	if(haslo.charAt(i)==" ")haslo1 = haslo1+" ";
	else haslo1 = haslo1+"-";
	
}



function wypiszhaslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
	
	
}

window.onload = start;

var litery = new Array(35); //array - tablica
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";	
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ź";
litery[34] = "Ż";

function start()
{
	var trescdiva = "";
	
	for(i=0;i<=34;i++)
	{
		var element = "lit"+i;
		trescdiva = trescdiva+'<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
		if((i+1)%7==0)trescdiva=trescdiva+'<div style="clear:both;"></div>';
	}
	
	document.getElementById("alfabet").innerHTML = trescdiva;
	
	wypiszhaslo();
}
String.prototype.ustawZnak = function(miejsce,znak)
{
	if(miejsce>this.length-1)
	{
		return this.toString();
	}
	else return this.substr(0,miejsce) + znak + this.substr(miejsce+1);
	
}
function sprawdz(nr)
{
	var trafiona = false;
	
	for(i=0;i<dlugosc;i++)
	{
		if(haslo.charAt(i)==litery[nr])
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			trafiona = true;
		}
	}
	if(trafiona==true)
	{
		yes.play();
		var element = "lit"+nr;
		document.getElementById(element).style.background="#003300";
		document.getElementById(element).style.color="#00c000";
		document.getElementById(element).style.border="3px solid #00c000";
		document.getElementById(element).style.cursor="default";
		
		wypiszhaslo();
	}
	else
	{
		no.play();
		var element = "lit"+nr;
		document.getElementById(element).style.background="#330000";
		document.getElementById(element).style.color="#c00000";
		document.getElementById(element).style.border="3px solid #c00000";
		document.getElementById(element).style.cursor="default";
		document.getElementById(element).setAttribute("onclick",";");
		
		//skucha
		ileskuch++;
		var obraz = "img/s"+ileskuch+".jpg";
		document.getElementById("szubienica").innerHTML='<img src="'+obraz+'" alt="" />';
	}
	
	//wygrana
	if(haslo==haslo1)
	{
		document.getElementById("alfabet").innerHTML="Tak jest! Podano poprawne hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
	}
	//przegrana
	if(ileskuch>=9)
		{
		document.getElementById("alfabet").innerHTML="Przegrana! Poprawne hasło to: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
	}
}