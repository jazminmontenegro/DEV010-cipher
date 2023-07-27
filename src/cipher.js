const cipher = {

  encode: function (desplazamiento, mensaje) {
    desplazamiento = parseInt(desplazamiento)

    if (isNaN(desplazamiento) || desplazamiento <= 0) {
      throw new TypeError('Los argumentos deben ser números');
    }
    else if (mensaje && mensaje.length > 0) {
      let textoCodificado = "";
      for (let i = 0; i < mensaje.length; i++) {
        let charcode = mensaje.charCodeAt(i)
        if (charcode >= 65 && charcode <= 90) {
          charcode = ((charcode - 65 + desplazamiento) % 26) + 65;
        }
        else if (charcode >= 97 && charcode <= 122) {
          charcode = ((charcode - 97 + desplazamiento) % 26) + 65;
        }
        else if (charcode >= 33) {
          alert("NO ES UNA LETRA DEL ALFABETO");
          break
        } textoCodificado += String.fromCharCode(charcode);
      }
      return textoCodificado
    }

  },

  decode: function (desplazamiento, mensaje2) {
    desplazamiento = parseInt(desplazamiento)

    if (isNaN(desplazamiento) || desplazamiento <= 0) {
      throw new TypeError('ERROR DEBE DIGITAR UN NUMERO');
    }
    else if (mensaje2 && mensaje2.length > 0) {
      let textoCodificado = "";
      for (let i = 0; i < mensaje2.length; i++) {
        let charCode = mensaje2.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
          charCode = (charCode - desplazamiento + 65) % 26 + 65;
        }
        else if (charCode >= 97 && charCode <= 122) {
          charCode = ((charCode - 97 + desplazamiento) % 26) + 65;
        }
        else if (charCode >= 33) {
          alert("NO ES UNA LETRA DEL ALFABETO");
          throw Error('NO ES UNA LETRA DEL ALFABETO');

        } textoCodificado += String.fromCharCode(charCode);
      }
      return textoCodificado
    }
  }
};
export default cipher;
