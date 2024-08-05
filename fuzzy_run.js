const fuzzy = require('./fuzzy_build')

//EXECUÇÃO

//Parâmetros
const precisao = 7000;
const x1=50;
const x2=40;

// FUZZIFICAÇÃO - Calculando pertinências;

console.log("---------Fuzzificando:---------\n")

const X1s ={ 
    ps: fuzzy.calcularTx1.ps(x1),
    ms: fuzzy.calcularTx1.ms(x1),
    gs: fuzzy.calcularTx1.gs(x1)
}

const X2s = {
    sm: fuzzy.calcularTx2.sm(x2),
    mm: fuzzy.calcularTx2.mm(x2),
    gm: fuzzy.calcularTx2.gm(x2)
};

console.log(X1s)
console.log(X2s)

console.log("\n---------Inferindo:---------\n")

//INFERÊNCIA - Calculo de Y
const inferencias = fuzzy.inferir(X1s,X2s);

fuzzy.printInferencias(inferencias)

console.log("\n---------Defuzzificando:---------\n")

const tabela = fuzzy.calcularTabelaY(precisao);
console.log("Tabela de conversão para Y:")
fuzzy.printConversao(tabela);

console.log("\n---Media Ponderada:---\n")
const defuzzMediaPonderada = fuzzy.defuzzificaMediaPond(inferencias,tabela)

console.log(defuzzMediaPonderada.toFixed(2)+" minutos")

console.log("\n---Centro de Gravidade:---\n")
const defuzzCg = fuzzy.defuzzificaCG(x1,x2, inferencias,tabela)

console.log(defuzzCg.toFixed(2)+" minutos")


    