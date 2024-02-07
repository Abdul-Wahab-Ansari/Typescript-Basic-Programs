const current_users = ["Jibraeel", "Rahil", "Azazeel", "Ababeel", "Izraeel"];
const new_users =     ["Jibraeel", "rahil", "Azazeel", "Mikaeel", "Izraeel", "Israfeel"];

for (let i = 0; i < new_users.length; i++) {
    const new_usersLower = new_users[i].toLowerCase()
    // if (current_users.indexOf(new_users[i]) === -1)
    if (current_users.map(users => users.toLowerCase()).indexOf(new_usersLower) === -1){
        console.log(`User name ${new_users[i]} is available`);
    }else{
        console.log(`User name ${new_users[i]} already exist, you will have to choose another username`);
    }
}

// Available user names
// Mikaeel
// Israfeel

// N/A
// Jibraeel
// Rahil
// Azazeel
// Izraeel