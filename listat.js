
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

console.log("öh on palindromi:", onPalindromi("öh"));
console.log("höh on palindromi:", onPalindromi("höh"));