const names = ["Evaldo", "Mari", "Camis"];

names.forEach(function(name){
    console.log(name);
});

names.forEach((name) => {
    console.log(name)
});

function showName(name){
    console.log(name);
}

names.forEach(showName)
