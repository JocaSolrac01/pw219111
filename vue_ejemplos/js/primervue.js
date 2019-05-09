const app = new Vue({
	el: "#app",
	data: {
		titulo: 'Hola mundo con VUE',
		frutas: ['manzanas', 'peras', 'platano', 'mango'],
		frutas2: [
			{nombre:'manzana', cantidad: 10},
			{nombre:'pera', cantidad: 0},
			{nombre:'platano', cantidad: 20},
			{nombre:'mango', cantidad: 80}
		],
		nuevaFruta: '',
		total: 0
	},
	methods: {
		agregarFruta(){
			// console.log("diste clic");
			this.frutas.push(this.nuevaFruta);
			this.frutas2.push({
				nombre: this.nuevaFruta,
				cantidad: 0
			});
			this.nuevaFruta = '';
		}
	},
	computed: {
		sumarFrutas(){
			this.total = 0;
			for(fruta of this.frutas2){
				this.total = this.total + fruta.cantidad;
			}
			return this.total;
		}
	}
});