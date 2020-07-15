var Vp = document.getElementById("villaplatzi");
var Papel = Vp.getContext("2d");

var xCerdo = 150;
var yCerdo = 150;
var xVaca = []; // Así se declara un array
var yVaca = [];
var xPollo = [];
var yPollo = [];

document.addEventListener("keydown", caminarCerdo);
//document.addEventListener("keyup", detenerCerdo);
//caminar = false;

var Teclas = 
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGTH: 39
};

var Fondo = {
    url: "Tile.png",
    cargaOK: false
};
var Vaca = {
    url: "Vaca.png",
    cargaOK: false
};
var Cerdo = 
{
    url: "Cerdo.png",
    cargaOK: false
};
var Pollo = {
    url: "Pollo.png",
    cargaOK: false
};

var Cantidad = Aleatorio(1, 50);
generarPosiciones("Vacas", 0, 7);
generarPosiciones("Pollos", 0, 5);

Fondo.imagen = new Image();
Fondo.imagen.src = Fondo.url;
Fondo.imagen.addEventListener("load", cargarFondo);

Vaca.imagen = new Image();
Vaca.imagen.src = Vaca.url;
Vaca.imagen.addEventListener("load", cargarVacas);

Cerdo.imagen = new Image();
Cerdo.imagen.src = Cerdo.url;
Cerdo.imagen.addEventListener("load", cargarCerdos);

Pollo.imagen = new Image();
Pollo.imagen.src = Pollo.url;
Pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo() 
{
    Fondo.cargaOK = true;
    dibujar();
}
function cargarVacas() 
{
    Vaca.cargaOK = true;
    dibujar();
}
function cargarCerdos() 
{
    Cerdo.cargaOK = true;
    dibujar();
}
function cargarPollos() 
{
    Pollo.cargaOK = true;
    dibujar();
}

function dibujar() 
{
    if (Fondo.cargaOK) 
    {
        Papel.drawImage(Fondo.imagen, 0, 0);
    }
    if (Vaca.cargaOK) 
    {
//        console.log(Cantidad);
        for (var v = 0; v < Cantidad; v++) 
        {
//            var x = Aleatorio(0, 7);
//            var y = Aleatorio(0, 7);
//            var x = x * 60;
//            var y = y * 60;
//            Papel.drawImage(Vaca.imagen, x, y); // Esta línea se cambia por la de abajo
			Papel.drawImage(Vaca.imagen, xVaca[v], yVaca[v]);
        }
    }
    if (Pollo.cargaOK) 
    {
//        console.log(Cantidad);
        for (var p = 0; p < Cantidad; p++) 
        {
//            var x = Aleatorio(0, 5);
//            var y = Aleatorio(0, 5);
//            var x = x * 80;
//            var y = y * 80;
//            Papel.drawImage(Pollo.imagen, x, y); // Esta línea se cambia por la de abajo
			Papel.drawImage(Pollo.imagen, xPollo[p], yPollo[p]);
        }
    }
	if (Cerdo.cargaOK) 
	{
//		console.log(Cantidad);
		Papel.drawImage(Cerdo.imagen, xCerdo, yCerdo);
	}
}

function generarPosiciones(animal, min, max) {
	switch(animal) {
		case "Vacas":
			for(i=1 ; i <= Cantidad ; i++) {
				xVaca[i] = Aleatorio(min, max)*60;
				yVaca[i] = Aleatorio(min, max)*60;
			}
			break;
		case "Pollos":
			for(i=1 ; i <= Cantidad ; i++) {
				xPollo[i] = Aleatorio(min,max)*60;
				yPollo[i] = Aleatorio(min,max)*60;
			}
			break;
	}
}

function Aleatorio(Min, Maxi) 
{
    var Resultado;
    Resultado = Math.floor(Math.random() * (Maxi - Min + 1)) + Min;
    return Resultado;
}
function caminarCerdo(evento)
{
//    caminar = true;
    switch (evento.keyCode)
    {
        case Teclas.UP:
        yCerdo = yCerdo -10;
        break;

        case Teclas.DOWN:
        yCerdo = yCerdo +10;
        break;

        case Teclas.LEFT:
        xCerdo = xCerdo -10;
        break;

        case Teclas.RIGTH:
        xCerdo = xCerdo +10;
        break;
    }
    dibujar();
}
//function detenerCerdo(evento)
//{
//    caminar = false;
//}