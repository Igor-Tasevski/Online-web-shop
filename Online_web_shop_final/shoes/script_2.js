//site ovie skripti ke se izvrsat otkako ke se startuva samata aplikacija prven


//2.2
/*

var number5 = 5; //Ovaa varijabila kade sto vo imeto sodrzi eden broj  i plus inicijalna vrednost ima = 5

var n = undefined; // Nedefinirana vrednost

var c; // Neinicijalizirana varijabla

var proverka = true; //Prvicna inicijalizacija na vrednosta vo true, a potoa istata vo false
proverka = false; 

var text = 20; //Ovaa varijabla sodrzi vrednost 20

//alert ("Zdravo ova e prikazuvanje na rezultat: " +number5);
//alert("Uste edno prikazuvanje "+n);
//alert("Ovaa vrednost e neinicijalizirana: " +c);
//alert("Proverka dali e true ili false: " +proverka);
alert (text);

*/

/*
------------------------------------------------------------------- ---------------------- 

*/


//2.3

/*
var check = false

if (check !==true){
    alert("Ovaa vrednost e razlicna od true i nejzinata vrednost e vsusnost: " +check)
}else {
    ("Probajte povtorno so proverka")
}

*/


//2.4
/*

var number = 5


if (number >6) {
   console.log("Brojot  "+number+" e pogolem od 6")
}else {
    console.log("Ovoj broj "+number+" ne e pogolem od 6")
}

*/

//2.5
/*
var a = 5;
var b = 1
var c = true ;
var d = true;
var e = 0;


var f = 6;
var g = 34; 
var h = 21;
var pogolem;
*/
 //2.5.1

/*	a=5, b=1 и c=true. 
Создадете и варијабила rezultat и испечатете во конзола резултатот од операцијата (b*c)+а. 
Потоа создадете условен исказ каде ќе проверите дали резултатот е еднаков со 5, ако е, 
тогаш во алерт испечатете порака а во спротивно(else блок) испечатете ја вредноста на rezultat
*/

//Number(false)     // returns 0
//Number(true)      // returns 1

/*
var rezultat = (Number(b*c)+a)
alert("Rezultatot od ovaa presmetka e:" +rezultat)
*/

/*2.5.2 •	
d=true и е=0. 
Создадете условен код кој проверува дали барем една од вредностите на наведените варијабили е строго еднаква на false, доколку е, испечатете alert порака


if ((a === false) || (b===false) || (c===false) || (d === false) || (e === false)|| (f===false)||(g===false)||(h===false)){
    alert("Edna od vpisanite vrednosti e  strogo ednakva na false")
} else {
    alert("Nitu edna od vrednostite ne e strogo ednakva na false")
}

*/

/*2.5.3	

f=6. 
Потоа употребете го унарниот оператор да ја намалите вредноста на варијабилата за 1 и испечатете ја вредноста во конзола



f--
console.log("Vrednosta na varijabilata f namalena za 1 sega iznesuva:" +f+",probajte druga kombinacija")
*/


/* 2.5.4


•	g=34, h=21 и pogolem. Вресноста на pogolem треба да биде одредена со употреба на тернарниот оператор за проверка кој од g и h е поголем. 
Вредноста на pogolem испечатете ја во alert известување

*/

/*
var pogolem = (g>h)?g:h
alert(pogolem)
*/


//alertnativno na ternaren operator
/*
if (g>h){
    alert("Vrednosta na g e pogolema od vrednosta na h")
}else{
    alert("Vrednosta na g ne e pogolema od h")
}
*/


//2.6

/*
var m =5;
while(m<10){
    console.log(m)
    m++
}
*/

//2.7

/*
var m = 13;
var n = 27;
var even = [];
var odd = [];

for (i = m; i <= n; i++) {
    if (i % 2) {
        odd.push(i)
        alert("Neparni broevi od 13 do 27 se :"+odd+ "\n")

    } else {
        even.push(i)
        alert("Parni broevi od 13 do 27 se :" +even+"\n")
    }

}


*/

//--------------------------------------------------------------------------------------------------------------------


3.1

/*
var fruit = ["Apple","Banana","Orange"];
var numbers = new Array(1,5,7,8);

fruit[1] = "false"

console.log(fruit.length+numbers.length)

*/







3.2

/*

var broj1 = parseInt(prompt("Vnesete ja prvata vrednsot"));
var broj2 = parseInt(prompt("Vnesete ja vtorata vrednsot"));



function soberiKakoBroj(broj1, broj2) {


    if ((!isNaN(broj1)) && (!isNaN(broj2))) {
        sum = broj1 + broj2
        return sum;


    } else {
        alert("Vnesete dva broja")

    }



}


var sum = soberiKakoBroj(broj1, broj2)
alert("Rezultatot od dvata broja e:" + sum)
*/


3.3

/*

var myName = "Petar";
var final = myName.split("").reverse().join("");
alert("Rezultatot sega vo obraten redosled iznesuva: "+final+" vnesete druga kombinacija")
*/


3.4
/*
var text = "Some People CAN’Т fly";
var result =text.toLowerCase();

var text1 = ""
var text2 = text.slice(5,11)

console.log("Tekstot vo mali bukvi napisan e: " +result+" negovata momentalna dolzina e: " +result.length)


for (const x of text){
    text1 = text1+" "+x+"\n"
    
    
}
console.log(text1)
console.log(text2)
*/



3.5
/*
var d = new Date();

var year = d.getFullYear();
var month =d.getMonth()+1;
var date = d.getDate();


var hour = d.getHours()%12||12
var ampm = d.getHours()>=12? 'PM':'AM' 

var minutes =d.getMinutes();
var seconds = d.getSeconds();

 




console.log("Deneska e: " +year+"."+month+"."+date+ " dodeka momentalnoto vreme e: " +hour+":"+minutes+":"+seconds+" "+ampm )


*/

3.6

/*
var names = ["Petar","Janko","Martin","Stefan","Igor","Trajce"];

var index = Math.floor(Math.random()*names.length); 




var prikazi = names[index];
alert("Ime prikazano po slucaen izbor e: " +prikazi)
*/


3.7
/*
var persons = [
    {name: "Petar", surname: "Stanoev", years: 25, height: 178, tezina: 89},
    {name: "Martin", surname: "Mitrovski", years: 35, height: 16, tezina: 102},
    {name: "Igor", surname: "Pecov", years: 31, height: 160, tezina: 81},
    {name: "Riste", surname: "Mitevski", years: 36, height: 179, tezina: 112}
];


    
let text = ""
persons.forEach(function (persons) {
    if (persons.height > 170) {
        text += persons.name + "\n";
        
    } 
    
   
});
//If no person then txt field will be empty
alert("Luge so visina pogolema od 170 se :\n" + text);

*/

