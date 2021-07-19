export function numeroParaRomano(numero) {
    const dados = {
       '1': 'I',
       '2': 'II',
       '3': 'III',
       '4': 'IV',
       '5': 'V',
       '6': 'VI'
    }

    return dados[numero]
 }

 export function romanoParaNumero(romano) {
    const dados = {
       'I': '1',
       'II': '2',
       'III': '3',
       'IV': '4',
       'V': '5',
       'VI': '6'
    }

    return dados[romano]
 }
