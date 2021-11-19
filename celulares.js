
class Celular {
	constructor (color, peso, respantalla, rescamara, ram) {
		this.color = color; 
		this.peso = peso;
		this.resolucionDePantalla = respantalla; 
		this.resolucionDeCamara = rescamara; 
		this.ram = ram;
		this.encendido = false; 
	}
	presionarBotonEncendido() {
		if (this.encendido == false) {
			alert("celular prendido");
			this.encendido = true;
		} else {
			alert ("celular apagado");
		}
	}  

	reiniciar() {
		if(this.encendido == true) {
			alert("reiniciando celular");
		} else {
			alert("el celular esta apagado");
		}
	}
	tomarFoto() {
		alert(`foto tomada con resolucion de: ${this.resolucionDeCamara}`)
	}
	grabarVideo() {
		alert(`video tomada con resolucion de: ${this.resolucionDeCamara}`)	
	}
	mobileInfo() {
		return `
		Color: <b>${this.color}</b><br>
		Peso <b>${this.peso}</b><br>
		Resolucion de Pantalla: <b>${this.resolucionDePantalla}</b><br>
		Resolución de cámara: <b>${this.resolucionDeCamara}</b><br>
		Resolución de video: <b>${this.resolucionDeCamara}</b><br>
		Memoria RAM: <b>${this.ram}</b><br>
		`;
	}
}	

class CelularAltaGama extends Celular {
	constructor(color, peso, respantalla, rescamara, ram, rescamextra){
		super(color, peso, respantalla, rescamara, ram);
		this.resolucionDeCamaraExtra = rescamextra; 
	}
	grabarVideoLento(){
		alert("estas grabando en camara lenta");
	}
	reconocimientoFacial() {
		alert("vamos a iniciar un reconocimiento facial");
	}
	infoAltaGama(){
		return this.mobileInfo() + `Resolucion de Camara Trasera:`
	}
}


celularAG1 = new CelularAltaGama("rojo", "130g", "5.2", "4K", "3GB", "Full HD");
celularAG2 = new CelularAltaGama("negro", "142g", "6", "4K", "4GB", "HD");
//celular1 = new Celular("rojo", "150g", "5pulgadas", "Full HD", "2GB");
//celular2 = new Celular("negro", "155g", "5.4pulgadas", "HD", "4GB");
//celular3 = new Celular("blanco", "15046g", "5.9pulgadas", "Full HD", "8GB");



//celular1.presionarBotonEncendido();
//celular1.tomarFoto();
//celular1.reiniciar();
//celular1.presionarBotonEncendido();

document.write(`
	${celularAG1.infoAltaGama()} <br><br>
	${celularAG2.infoAltaGama()} <br>
	`);