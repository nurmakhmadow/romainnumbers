// function romain(rom) {
//     const map = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     }

//     let prev = 0
//     let result = 0

//     for(let i = rom.length - 1; i >= 0; i--) {
//         let curr = map[rom[i]] 

//         if(curr >= prev) {
//             result += curr
//         } else {
//             result -= curr
//         }

//         prev = curr
//     }

//     return result
// }

// console.log(
//     romain("IXV"),
//     romain("III"),
//     romain("IV"),
//     romain("XD"),
//     romain("MCMXCIV"),
//     romain(prompt().toUpperCase()),
// );




function rimskiy(num) {
    const nomeri = [
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' }
    ];
  
    let result = '';
  
    for (let i = 0; i < nomeri.length; i++) {
      if (num >= nomeri[i].value) {
        result += nomeri[i].symbol;
        num -= nomeri[i].value;
      }
    }
  
    return result;
  }
  console.log(rimskiy(prompt()));