export function somar (a , b){
    return a + b;
}

export function dobro ( n){
    return n *2;
}

export function cor(color) {
    if (color == "vermelho" || color == "azul" || color == "amarelo") {
      return true;
    } else {
      return false;
    }
  }

  export function ingresso(inteira, meia, dia, nacionalidade) {
    let mei = 14.25 * meia;
    let int = 28.5 * inteira;
    if (nacionalidade == "brasileira") {
      int = 5 * inteira;
      mei = 5 * meia;
      return int + mei;
    }
    if (dia == "quarta") {
      int = 14.25 * inteira;
      return int + mei;
    }
    return int + mei;
  }

  export function text(t, c) {
    let e = 0;
    for (let letter of t) {
      if (letter == c) {
        e++;
      }
    }
    return e;
  }

  export function maiornumero(array) {
    let maior = -9999;
    for (let item of array) {
      if (item > maior) {
        maior = item;
      }
    }
    return maior;
  }