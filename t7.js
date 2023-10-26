const makeList = length => {
    let list = [];
    for(let i = 0; i < length; i++) {
        list.push(Math.floor(Math.random()*50+1)); 
    }
    return list; 
}

// alustetaan taulukko
let taulukko = []; 

//pushataan taulukkoon viisi kertaa viisialkioinen taulukko
for (let i = 0; i < 5; i++) {
    taulukko.push(makeList(5));
}

//miltä taulukko näyttää rivit ja sarakkeet
console.table(taulukko); 

//kaksi sisäkkäistä silmukkaa
taulukko.forEach( (el, x) => { 
    el.forEach( (el, y) => { 
        console.log(`x=${x}, y=${y}: ${el}`);
    })
});
