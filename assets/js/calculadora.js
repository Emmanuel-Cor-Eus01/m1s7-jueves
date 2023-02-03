class Calculadora {
    constructor() {
        this.resultado = 0;
    }
    sumar(valor1, valor2) {
        this.resultado = valor1 + valor2;
        return this.resultado;
    }
    restar(valor1, valor2) {
        this.resultado = valor1 - valor2;
        return this.resultado;
    }
    multiplicar(valor1, valor2) {
        this.resultado = valor1 * valor2;
        return this.resultado;
    }
    dividir(valor1, valor2) {
        this.resultado = valor1 / valor2;
        return this.resultado;
    }
}