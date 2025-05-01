const items = [
    { 
        name: "Alpha", 
        process: function () { 
            console.log(`Processing: ${this.name}`); 
        } 
    },
    { 
        name: "Beta", 
        process: function () { 
            console.log(`Task for ${this.name} done.`); 
        } 
    }
];

function processObjectsDelayed(items, delay) {
    // Using forEach to iterate over the array of objects
    items.forEach((item) => {
        const p = item.process.bind(item);
        setTimeout(function(){p()}, delay); //  Bind the context of 'this' to the item
    });
}

processObjectsDelayed(items, 3000);
