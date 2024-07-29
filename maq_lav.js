//Fuzzificação
const calcularTx1 = {
    ps: x =>{
        if(x === 0){
            return 1;
        }else if (0 < x && x <= 50){
            return (50-x)/50;
        }else{
            return 0
        }

    },
    ms: x =>{
        if(x === 0){
            return 0;
        }else if (0 < x && x <= 50){
            return x/50;
        }else if (50 < x && x<=100){
            return (50-x)/50;
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
        if(x === 0){
            return 1;
        }else if (0 < x && x <= 50){
            return (50-x)/50;
        }else{
            return 0
        }

    },
    mm: x =>{
        if(x === 0){
            return 0;
        }else if (0 < x && x <= 50){
            return x/50;
        }else if (50 < x && x<=100){
            return (50-x)/50;
        }else{
            return 0
        }

    },
    gm: x =>{
        if(x <= 50){
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
        if(y === 0){
            return 1;
        }else if (0 < y && y <= 10){
            return (10-y)/10;
        }else{
            return 0
        }

    },
    c: y =>{
        if(y === 0){
            return 0;
        }else if (0 < y && y <= 10){
            return y/10;
        }else if (10 < y && y <= 25){
            return (25-y)/15;
        }else{
            return 0
        }

    },
    m: y =>{
        if(y <= 10){
            return 0;
        }else if (10 < y && y <= 25){
            return (y-10)/15;
        }else if (25 < y && y <= 40){
            return (40-y)/15;
        }else{
            return 0
        }

    },
    l: y =>{
        if(y <= 25){
            return 0;
        }else if (25 < y && y <= 40){
            return (y-25)/15;
        }else if (40 < y && y < 60){
            return (60-y)/20;
        }else{
            return 0
        }

    },
    ml: y =>{
        if(y <= 0){
            return 0;
        }else if (40 < y && y < 60){
            return (y-40)/20;
        }else{
            return 1;
        }

    },
    
}

//Inferência
const inferir = (x1,x2) => {
    return {
        r1:{

        }
    }
}




console.log(calcularTx1.ps(250))