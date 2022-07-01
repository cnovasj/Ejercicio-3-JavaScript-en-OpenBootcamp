function factorial_for(num) {
    if (num === 0 || num === 1) //  Si el número a factorizar es 0 o 1, devuelve un 1
      return 1;

    for (var i = num - 1; i >= 1; i--) {  //  Bucle multiplicador del número a factorizar
      num = num * i;                      //  por su anterior hasta que sea 1
    }

    return num;
  }
  export {factorial_for}  //  Exportar función del módulo