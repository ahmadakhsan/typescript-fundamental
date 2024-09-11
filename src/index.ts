let namaSaya : string = "Ahmad Akhsan";
let username : number = 123;
let isDead : boolean = false;
let isValue : string | number ; // opsional tipe data

isValue = "Isi";

//array biasa
let makananSaya : String[];
makananSaya = ["bakso", "mie", "ikan", "ayam"];

// tuple array
let kendaraanSaya : [string, number, boolean];
kendaraanSaya = ["mobil", 10, true];


//! tipe data custom
type TemanType = {
    nama :string;
    isKampret :boolean;
    hutang? : number; //opsional value
}

let temanKita : TemanType;

temanKita= {
    nama : "Andi",
    isKampret : true,
    hutang :45_000
}

// function
function create () : string{
    return "terimakasih telah dibuat";
}

// arrow function
 const create2 = () :string => "Hello word";

 //function bertipe void
 function isSum() : void{
    let a = 10;
    let b = 10;
    console.log(a+b);
 }

 //function beripe paramater
 function isSumParam( a :number , b :number) : void{
    console.log("penjumlahan", a+b);
 }

 type Minuman = string;
 let fanta : Minuman;
 fanta = "dingin";

interface Transport{
    name : string;
    type : string;
    color : string;
    years : number;
}

function createTransport(transport : Transport) : void {
    console.log("berhasil membuat kendaraan "+ transport.name +" untuk warna "+transport.color + " tahun di buat "+transport.years);
}

const dataTransport ={
    name : "toyota kijang",
    type : "suzuki",
    color : "merah",
    years : 2019
}

interface Manusia {
    kulit : string;
    rambut : string;

}

interface Laki extends Manusia {
    
    janggot :boolean;

}
interface Perempuan extends Manusia {
    melahirkan : string;
}

const isiLaki  : Laki = {
    kulit : "sawo",
    rambut : "gelombang",
    janggot : true
}

const isiPerempuan :Perempuan = {
    kulit : "putih",
    rambut : "lurus",
    melahirkan : "anak",

}


function Laki (laki : Laki) : void {
    console.log("anak laki laki berjanggot "+laki.janggot +" dan berambut " +laki.rambut)

}

function Perempuan (perempuan : Perempuan) : void {
    console.log("anak perempuan bisa melahirkan "+perempuan.melahirkan +" dan berambut " +perempuan.rambut)

}

console.log({namaSaya});
console.log({username});
console.log({isDead});
console.log({isValue});
console.log({makananSaya});
console.log({kendaraanSaya});
console.log({temanKita});
console.log(create());
console.log(create2());
isSum();
isSumParam(10, 10);
console.log(fanta);
createTransport(dataTransport);

Laki(isiLaki);
Perempuan(isiPerempuan);

