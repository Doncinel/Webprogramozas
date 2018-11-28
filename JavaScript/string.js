let uzi = 'hello';

//Kiiratjuk az uzi változó típusát a typeoff segítségével
console.log(typeof uzi) //String

uzi = 12345;
console.log(typeof uzi); //Number

uzi = 1 / 0;
uzi = 1 / "a";
console.log(uzi);
console.log(typeof uzi); //
