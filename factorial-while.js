function factorial_while(num) {
  var result = num;  
  
  if (num === 0 || num === 1) //  Si el número a factorizar es 0 o 1, devuelve un 1
      return 1;

    while (num > 1) {   //  Bucle multiplicador del número a factorizar
      num--;            //  por su anterior hasta que sea 1
      result *= num;
    }

    return result;
  }
  export {factorial_while}  //  Exportar función del módulo