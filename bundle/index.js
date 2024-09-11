"use strict";
let namaSaya = "Ahmad Akhsan";
let username = 123;
let isDead = false;
let isValue; // opsional tipe data
isValue = "Isi";
//array biasa
let makananSaya;
makananSaya = ["bakso", "mie", "ikan", "ayam"];
// tuple array
let kendaraanSaya;
kendaraanSaya = ["mobil", 10, true];
let temanKita;
temanKita = {
    nama: "Andi",
    isKampret: true,
    hutang: 45000
};
// function
function create() {
    return "terimakasih telah dibuat";
}
// arrow function
const create2 = () => "Hello word";
//function bertipe void
function isSum() {
    let a = 10;
    let b = 10;
    console.log(a + b);
}
//function beripe paramater
function isSumParam(a, b) {
    console.log("penjumlahan", a + b);
}
let fanta;
fanta = "dingin";
function createTransport(transport) {
    console.log("berhasil membuat kendaraan " + transport.name + " untuk warna " + transport.color + " tahun di buat " + transport.years);
}
const dataTransport = {
    name: "toyota kijang",
    type: "suzuki",
    color: "merah",
    years: 2019
};
const isiLaki = {
    kulit: "sawo",
    rambut: "gelombang",
    janggot: true
};
const isiPerempuan = {
    kulit: "putih",
    rambut: "lurus",
    melahirkan: "anak",
};
function Laki(laki) {
    console.log("anak laki laki berjanggot " + laki.janggot + " dan berambut " + laki.rambut);
}
function Perempuan(perempuan) {
    console.log("anak perempuan bisa melahirkan " + perempuan.melahirkan + " dan berambut " + perempuan.rambut);
}
console.log({ namaSaya });
console.log({ username });
console.log({ isDead });
console.log({ isValue });
console.log({ makananSaya });
console.log({ kendaraanSaya });
console.log({ temanKita });
console.log(create());
console.log(create2());
isSum();
isSumParam(10, 10);
console.log(fanta);
createTransport(dataTransport);
Laki(isiLaki);
Perempuan(isiPerempuan);
