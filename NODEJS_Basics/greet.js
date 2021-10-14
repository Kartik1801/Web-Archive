const args = process.argv.slice(2);
for (let arg in args){
    console.log(`Hello there!, Mr/Mrs.${args[arg]}`);
}

