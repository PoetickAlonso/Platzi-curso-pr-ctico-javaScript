
    const limiteInferior = [
        .01, 644.59, 4910.18, 9614.67, 11176.63, 13381.48, 26988.51, 42537.59, 81211.26, 108281.68, 324845.02, 
     ];
     const primeroLI = limiteInferior[1];
    console.log(primeroLI)
     
     const limiteSuperior = [ 
         644.58, 5470.92, 9614.66, 11176.62, 13381.47, 26988.50, 42537.58, 81211.25, 108281.67, 0, 324845.01, 
     ];  
     
     const cuotaFija = [
         0, 12.38, 321.26, 772.10, 1022.01, 1417.12, 4323.58, 7980.73, 19582.83, 28245.36, 101876.90,
     ];
     
     const porCientoSobreExcedenteLi = [
         .0192, .0640, .1088, .16, .1792, .2136, .2352, .30, .32, .34, .35,
     ];


function excedenteSalario(salarioGravado){
    if (salarioGravado >= limiteInferior[1] && salarioGravado <= limiteInferior[2]){
        return salarioGravado - limiteInferior[2]
    } else if(salarioGravado >= limiteInferior[2] && salarioGravado <= limiteInferior[3]) {
        return salarioGravado - limiteInferior[3]
    } else if(salarioGravado >= limiteInferior[3] && salarioGravado <= limiteInferior[4]) {
        return salarioGravado - limiteInferior[4]
    } else if(salarioGravado >= limiteInferior[4] && salarioGravado <= limiteInferior[5]) {
        return salarioGravado - limiteInferior[5]
    } else if(salarioGravado >= limiteInferior[5] && salarioGravado <= limiteInferior[6]) {
        return salarioGravado - limiteInferior[6]
    } else if(salarioGravado >= limiteInferior[6] && salarioGravado <= limiteInferior[7]) {
        return salarioGravado - limiteInferior[7]
    } else if(salarioGravado >= limiteInferior[7] && salarioGravado <= limiteInferior[8]) {
        return salarioGravado - limiteInferior[8]
    } else if(salarioGravado >= limiteInferior[8] && salarioGravado <= limiteInferior[9]) {
        return salarioGravado - limiteInferior[9]
    } else if(salarioGravado >= limiteInferior[9] && salarioGravado <= limiteInferior[10]) {
        return salarioGravado - limiteInferior[10]
    } else if(salarioGravado >= limiteInferior[10] && salarioGravado <= limiteInferior[11]) {
        return salarioGravado - limiteInferior[11]
}
}

function porcentajeAplicable(excedenteSalario) {
    if(excedenteSalario >= porCientoSobreExcedenteLi[1] && porCientoSobreExcedenteLi[2]) {
        return excedenteSalario * porCientoSobreExcedenteLi[2]
    }


