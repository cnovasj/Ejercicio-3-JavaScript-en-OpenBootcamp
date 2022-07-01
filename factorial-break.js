function factorial_break(num) {
  var result = num;  
  
  if (num === 0 || num === 1) //  Si el número a factorizar es 0 o 1, devuelve un 1
      return 1;

    while (num > 1) {
      num--;            //  Bucle multiplicador del número a factorizar
      result *= num;    //  por su anterior hasta que sea 1

      if (num = 5)      // Cuando el número a factorizar es 5, se termina de factorizar
         break;
    }

    return result;
  }
  export {factorial_break}  //  Exportar función del módulo