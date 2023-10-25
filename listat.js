
//0. muodosta lista, joka on 20 elementin pituinen ja sisältää satunnaisia kokonaislukuja välillä 1 - 50
const makeList = () => {
    let list = [];
    for(let i = 0; i < 20; i++) {
        list.push(Math.floor(Math.random()*100+1)); 
    }
    return list; 
}

//1. poista listasta luvut, jotka ovat pienempiä kuin 10 ja suurempia kuin 30
let list = makeList();
console.log("lista", list);

let uusilista = list.filter((value) => {
    	return value >= 10 && value <= 30;  
}); 
// console.log("uusilista", uusilista); 

//2. plussaa listan joka elementtiin 5 ja tulosta lista 
uusilista = list.map(value => value+5);
//console.log(uusilista);

// 3. etsi listasta ensimmäinen luku, joka on suurempi kuin 20 
let ensimmäinenYli20 = list.find(value => value > 20);
console.log("ensimmäinen yli 20: ", ensimmäinenYli20);

// 4. laita lista suuruusjärjestykseen
console.log("järjestetty", list.sort((a,b) => a - b));

// 5. tee funktio, joka tarkistaa onko sille annettu string-parametri
// palindromi (eli onko koko sana alusta loppuun sama sana esim. "saippuakauppias")
// vinkki: muuta string ensin arrayksi ja sitten käännä array
function onPalindromi(str) {
    let reverse = str.split('').reverse().join('');
    console.log("käänteinen: ", reverse);
    return reverse === str;  
}

let mja = "öh";
console.log(`${mja} on palindromi:`, onPalindromi(mja));
mja = "höh"
console.log(`${mja} on palindromi:`, onPalindromi(mja));

//spread-operaattori
let old1 = [1,2,3,4,5]
let old2 = [6,7,8,9,10]

//expected result = [1,2,3,4,5, "text1", "text2", 6, 7, 8, 9, 10]
let newList = [...old1, "text1", "text2", ...old2];
console.table(newList);

//10. Tee funktio, joka saa parametriksi listan ja laskee sen elementtien summan. 

function summa(lista) {
    let sum = 0; 
    lista.forEach(element => {
        sum += element;
    });
    return sum; 
}

console.log("summa old1:", summa(old1));