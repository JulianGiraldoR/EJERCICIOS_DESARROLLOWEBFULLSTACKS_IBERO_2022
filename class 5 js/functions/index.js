
function sayHello(){
    console.log("hello word")

};

const saysometing = () => {
    console.log("algo")

};

const sayBye=function(){
    console.log("bye bye")
}

// parameters
function sayName(name){
    console.log("my name is", name);
};

function introduceYourself(name="-",age=0){
    console.log("my name is", name,"i am ", age ,"year old");
};


function count (number){
    for(let index =0;index<=number;index ++){
        console.log (`this is ${index}`)
    };
};

function sumarize(limit){
    let sumarizer =0;
    for(let index =0; index <= limit; index ++){
        sumarizer = sumarizer+index;
        console.log (`current number ${index} sum:${sumarizer} `)
    };
};



sayHello();

