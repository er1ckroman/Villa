var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var xCerdo = 150;
var yCerdo = 150;
var xVaca = []; // Así se declara un array
var yVaca = [];
var xPollo = [];
var yPollo = [];

document.addEventListener("keydown", caminarCerdo);

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.png",
    cargaOK: false
};

var fondo = {
    url: "tile.png",
    cargaOK: false
};

var Cantidad = aleatorio(1, 50);
generarPosiciones("Vacas", 0, 7);
generarPosiciones("Pollos", 0, 5);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo(){
    fondo.cargaOK = true;
    dibujar();
    
}

function cargarVacas(){
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdos(){
    cerdo.cargaOK = true;
    dibujar();
}

function cargarPollos(){
    pollo.cargaOK = true;
    dibujar();
}

function dibujar(){
    if(fondo.cargaOK){
    papel.drawImage(fondo.imagen, 0, 0);
    }
    
    if(vaca.cargaOK){
        for (var v = 0; v < Cantidad; v++) 
        {
           papel.drawImage(vaca.imagen, xVaca[v], yVaca[v]);
        }
    }
    if(pollo.cargaOK){
        for (var p = 0; p < Cantidad; p++) 
        {
           papel.drawImage(pollo.imagen, xPollo[p], yPollo[p]);
        }
    }
    if(cerdo.cargaOK){
       papel.drawImage(cerdo.imagen, xCerdo, yCerdo);
    }    
}

function aleatorio(min, max){
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado; 
}

function generarPosiciones(animal, min, max) {
	switch(animal) {
		case "Vacas":
			for(i=1 ; i <= Cantidad ; i++) {
				xVaca[i] = aleatorio(min, max)*60;
				yVaca[i] = aleatorio(min, max)*60;
			}
			break;
		case "Pollos":
			for(i=1 ; i <= Cantidad ; i++) {
				xPollo[i] = aleatorio(min,max)*60;
				yPollo[i] = aleatorio(min,max)*60;
			}
			break;
	}
}

function caminarCerdo(evento){
    switch (evento.keyCode)
    {
        case teclas.UP:
        yCerdo = yCerdo -10;
        console.log(evento.keyCode);
        break;

        case teclas.DOWN:
        yCerdo = yCerdo +10;
        console.log(evento.keyCode);
        break;

        case teclas.LEFT:
        xCerdo = xCerdo -10;
        console.log(evento.keyCode);
        break;

        case teclas.RIGHT:
        xCerdo = xCerdo +10;
        console.log(evento.keyCode);
        break;
    }
    dibujar();
}