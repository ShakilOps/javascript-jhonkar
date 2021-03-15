function welcomeGuest(name, greetHandler){
    greetHandler(name);
}

var actorName = 'tom';

function greetEvening(name){
    console.log('good afternoon', name);
}

welcomeGuest(actorName, greetEvening);

welcomeGuest('minhaj', function(name){
    console.log('special welcome', name);
})