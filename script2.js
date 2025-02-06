var szamok = [100, 42, 92, 100, 81, 99, 100, 1, 99, 100];
var szamok2 = [70,90,90,80,70,80];

function egyszamjatek(szamok) {
    let gyakorisag = {};
    szamok.forEach(szam => {
        if (gyakorisag[szam]) {
            gyakorisag[szam]++;
        } else {
            gyakorisag[szam] = 1;
        }
    });
    let egyediSzamok = Object.keys(gyakorisag).filter(szam => gyakorisag[szam] === 1);
    if (egyediSzamok.length > 0) {
        return Math.max(...egyediSzamok);
    } else {
        return -1;
    }
}

console.log(egyszamjatek(szamok));
console.log(egyszamjatek(szamok2));