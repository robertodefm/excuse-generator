let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

function indexRandomArr (arr){
    let number = Math.floor(Math.random() * arr.length);
    return (number);
};

function excuseGenerator (){
    return(who[indexRandomArr(who)] + " " +  what[indexRandomArr(what)] + " " +  when[indexRandomArr(when)])
}

console.log (excuseGenerator())