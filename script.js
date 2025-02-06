function emailGeneralas(teljesNev, szuletesiEv) {
    var email = teljesNev.toLowerCase().split(" ").slice(0, 3).join("").replace(/[^a-z]/g, '') + szuletesiEv.toString().slice(-1) + "@kacsa.hu";
    return email;
}

console.log(emailGeneralas('Nagy Péter Imre', 1966));










