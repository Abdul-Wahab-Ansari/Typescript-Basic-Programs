const mountainsArrObj = [
    { name: "Mount Everest", height: 8848 },
    { name: "K2", height: 8611 },
    { name: "Matterhorn", height: 4478 },
    { name: "Mount Kilimanjaro", height: 5895 },
    { name: "Mount Fuji", height: 3776 }
];

for (const mountains of mountainsArrObj) {
    console.log(`Mountain: ${mountains.name} has Height of: ${mountains.height} Feet`);    
}