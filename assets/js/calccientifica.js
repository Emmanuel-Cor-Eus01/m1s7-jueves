class CalculadoraCientifica extends Calculadora {
    constructor() {
        super();
    }
    potencia(valor1, valor2) {
        this.resultado = Math.pow(valor1, valor2);
        return this.resultado;
    }
    raizCuadrada(valor) {
        this.resultado = Math.sqrt(valor);
        return this.resultado;
    }
}