

//Fuzzificação
const calcularTx1 = {
    ps: x =>{
        
        if (0 <= x && x <= 50){
            return (50-x)/50;
        }else if (x > 50){
            return 0;
        }else {
            return 1;
        }

    },
    ms: x =>{
        
        if (0 <= x && x <= 50){
            return x/50;
        }else if (50 < x && x<=100){
            return (100-x)/50;
        }else{
            return 0
        }

    },
    gs: x =>{
        if(x <= 50){
            return 0;
        }else if (50 < x && x <= 100){
            return (x-50)/50;
        }else{
            return 1;
        }

    }
}

const calcularTx2 = {
    sm: x =>{
        if (0 <= x && x <= 50){
            return (50-x)/50;
        }else if (x > 50){
            return 0;
        }else{
            return 1;
        }

    },
    mm: x =>{
        if (0 <= x && x <= 50){
            return x/50;
        }else if (50 < x && x <= 100){
            return (100-x)/50;
        }else{
            return 0
        }

    },
    gm: x =>{
        if (x <= 50){
            return 0;
        }else if (50 < x && x <= 100){
            return (x-50)/50;
        }else{
            return 1;
        }

    }
}

const calcularY = {
    mc: y =>{

        if (0 <= y && y <= 10){
            return (10-y)/10;
        }else if (y > 10){
            return 0;
        }else {
            return 1;
        }

    },
    c: y =>{
        
        if (0 <= y && y <= 10){
            return y/10;
        }else if (10 < y && y <= 25){
            return (25-y)/15;
        }else {
            return 0;
        }

    },
    m: y =>{

        if (10 < y && y <= 25){
            return (y-10)/15;
        }else if (25 < y && y <= 40){
            return (40-y)/15;
        }else{
            return 0
        }

    },
    l: y =>{

        if (25 < y && y <= 40){
            return (y-25)/15;
        }else if (40 < y && y <= 60){
            return (60-y)/20;
        }else{
            return 0
        }

    },
    ml: y =>{
        if(y <= 40){
            return 0;
        }else if (40 < y && y <= 60){
            return (y-40)/20;
        }else{
            return 1;
        }

    },
    
}

//Inferência
const inferir = (X1s,X2s) => {
    
    return {
        r1:{
            ps: X1s.ps,
            sm: X2s.sm,
            y: Math.min(X1s.ps,X2s.sm),
        },
        r2:{
            ps: X1s.ps,
            mm: X2s.mm,
            y: Math.min(X1s.ps,X2s.mm),
        },
        r3:{
            ps: X1s.ps,
            gm: X2s.gm,
            y: Math.min(X1s.ps,X2s.gm),
        },
        r4:{
            ms: X1s.ms,
            sm: X2s.sm,
            y: Math.min(X1s.ms,X2s.sm),
        },
        r5:{
            ms: X1s.ms,
            mm: X2s.mm,
            y: Math.min(X1s.ms,X2s.mm),
        },
        r6:{
            ms: X1s.ms,
            gm: X2s.gm,
            y: Math.min(X1s.ms,X2s.gm),
        },
        r7:{
            gs: X1s.gs,
            sm: X2s.sm,
            y: Math.min(X1s.gs,X2s.sm),
        },
        r8:{
            gs: X1s.gs,
            mm: X2s.mm,
            y: Math.min(X1s.gs,X2s.mm),
        },
        r9:{
            gs: X1s.gs,
            gm: X2s.gm,
            y: Math.min(X1s.gs,X2s.gm),
        }
    }
}

//Defuzzificação

//Calcula o tempo, dado grau de pertinência de y
const calcularTabelaY = (p) => {
    const valores = {
        tempo: [],
        mc: [],
        c: [],
        m: [],
        l: [],
        ml: []
    }


    const delta = 60/p;

    for(let i = 0; i<=60; i+=delta){
        valores.tempo.push(i);
        valores.mc.push(calcularY.mc(i));
        valores.c.push(calcularY.c(i));
        valores.m.push(calcularY.m(i));
        valores.l.push(calcularY.l(i));
        valores.ml.push(calcularY.ml(i));
        
    }

    return valores;

}

const defuzzificaMediaPond = (inferencias, tabela) => {
    
    let soma1=0;
    let soma2=0;
    
    for (const inferencia in inferencias){
        let codRegra="";
        let codTempo="";
        switch (inferencia){
            case "r1":
                codRegra="r1";   
                codTempo="mc"                            
                break;
            case "r2":
                codRegra="r2";
                codTempo="m"
                break;
            case "r3":
                codRegra="r3";
                codTempo="l"
                break;
            case "r4":
                codRegra="r4";
                codTempo="c"
                break;
            case "r5":
                codRegra="r5";
                codTempo="m"
                break;
            case "r6":
                codRegra="r6";
                codTempo="l"
                break;
            case "r7":
                codRegra="r7";
                codTempo="m"
                break;
            case "r8":
                codRegra="r8";
                codTempo="l"
                break;
            case "r9":
                codRegra="r9";
                codTempo="ml"
                break;
        }
        
        if(inferencias[inferencia]['y'] !== 0){
            const pert=inferencias[inferencia]['y']
            soma1+=(pert)*descobrirTempo(pert,tabela.tempo,tabela[codTempo]);
            soma2+=pert
        }
    }
    
    return soma1/soma2;
}

const defuzzificaCG = (x1,x2,inferencias, tabela) => {
    
    let soma1=0;
    let soma2=0;
    
    for (const inferencia in inferencias){
        let codRegra="";
        let codX1="";
        let codX2="";
        switch (inferencia){
            case "r1":
                codRegra="r1";   
                codX1="ps"                            
                codX2="sm"                            
                break;
            case "r2":
                codRegra="r2";
                codX1="ps"
                codX2="mm"
                break;
            case "r3":
                codRegra="r3";
                codX1="ps"
                codX2="gm"
                break;
            case "r4":
                codRegra="r4";
                codX1="ms"
                codX2="sm"
                break;
            case "r5":
                codRegra="r5";
                codX1="ms"
                codX2="mm"
                break;
            case "r6":
                codRegra="r6";
                codX1="ms"
                codX2="gm"
                break;
            case "r7":
                codRegra="r7";
                codX1="gs"
                codX2="sm"
                break;
            case "r8":
                codRegra="r8";
                codX1="gs"
                codX2="mm"
                break;
            case "r9":
                codRegra="r9";
                codX1="gs"
                codX2="gm"
                break;
        }
        if(inferencias[inferencia]['y'] !== 0){
            const pert=inferencias[inferencia]['y']
            soma1+=x1*inferencias[inferencia][codX1]+x2*inferencias[inferencia][codX2];
            soma2+=inferencias[inferencia][codX1]+inferencias[inferencia][codX2];
        }
    }
    return soma1/soma2;
}

//Retorna o tempo com base em Y
const descobrirTempo = (Y, tempos, pertencimentos) => {
    let i=0;
    
    while(i<pertencimentos.length && pertencimentos[i+1]<=Y){ i++; }

    if(Y==pertencimentos[i]){
        return tempos[i];
    }else{
        return (tempos[i]+tempos[i+1])/2
    }

}

//Utils
const printConversao = (tabela) => {
    
    var s1="Tempo: "
    var s2="MC   : "
    var s3="C    : "
    var s4="M    : "
    var s5="L    : "
    var s6="ML   : "

    tabela.tempo.forEach((tempo, indice) =>{
        
        s1+=tempo.toFixed(2)+"    ";
        s2+=tabela.mc[indice].toFixed(2)+"    ";
        s3+=tabela.c[indice].toFixed(2)+"    ";
        s4+=tabela.m[indice].toFixed(2)+"    ";
        s5+=tabela.l[indice].toFixed(2)+"    ";
        s6+=tabela.ml[indice].toFixed(2)+"    ";
    })

    console.log(s1)
    console.log(s2)
    console.log(s3)
    console.log(s4)
    console.log(s5)
    console.log(s6)

}
const printInferencias = (inferencias) => {

    for (const inferencia in inferencias){
        switch (inferencia){
            case "r1":
                console.log(`r1: Se X1 eh PS(${inferencias[inferencia].ps}) e X2 eh SM(${inferencias[inferencia].sm}), entao Y e MC(${inferencias[inferencia].y})`)
                break;
            case "r2":
                console.log(`r2: Se X1 eh PS(${inferencias[inferencia].ps}) e X2 eh MM(${inferencias[inferencia].mm}), entao Y e M(${inferencias[inferencia].y})`)
                break;
            case "r3":
                console.log(`r3: Se X1 eh PS(${inferencias[inferencia].ps}) e X2 eh GM(${inferencias[inferencia].gm}), entao Y e L(${inferencias[inferencia].y})`)
                break;
            case "r4":
                console.log(`r4: Se X1 eh MS(${inferencias[inferencia].ms}) e X2 eh SM(${inferencias[inferencia].sm}), entao Y e C(${inferencias[inferencia].y})`)
                break;
            case "r5":
                console.log(`r5: Se X1 eh MS(${inferencias[inferencia].ms}) e X2 eh MM(${inferencias[inferencia].mm}), entao Y e M(${inferencias[inferencia].y})`)
                break;
            case "r6":
                console.log(`r6: Se X1 eh MS(${inferencias[inferencia].ms}) e X2 eh GM(${inferencias[inferencia].gm}), entao Y e L(${inferencias[inferencia].y})`)
                break;
            case "r7":
                console.log(`r7: Se X1 eh GS(${inferencias[inferencia].gs}) e X2 eh SM(${inferencias[inferencia].sm}), entao Y e M(${inferencias[inferencia].y})`)
                break;
            case "r8":
                console.log(`r8: Se X1 eh GS(${inferencias[inferencia].gs}) e X2 eh MM(${inferencias[inferencia].mm}), entao Y e L(${inferencias[inferencia].y})`)
                break;
            case "r9":
                console.log(`r9: Se X1 eh GS(${inferencias[inferencia].gs}) e X2 eh GM(${inferencias[inferencia].gm}), entao Y e ML(${inferencias[inferencia].y})`)
                break;
        }
    }
}

module.exports={
    calcularTx1,
    calcularTx2,
    calcularY,
    calcularTabelaY,
    inferir,
    printInferencias,
    printConversao,
    defuzzificaMediaPond,
    defuzzificaCG

}