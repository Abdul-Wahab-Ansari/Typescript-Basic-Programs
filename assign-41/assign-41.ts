function show_magicians1(magiciansName: string[]){
    // for(let i = 0; i < magiciansName.length; i++){
    //     console.log(magiciansName[i])
    // }

    for(let magician of magiciansName){
        console.log(magician);
    }
}
let magicians = ["Samri1", "Harry Potter2", "Teller3"];
show_magicians1(magicians);