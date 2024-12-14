// Getting data from JSON file
let dataGlobal;
const getData = async () => {
    if (!dataGlobal) {
        const response = await fetch("./ghosts.json");
        console.log(response);
        dataGlobal = await response.json();
    }
    return dataGlobal;
};
const allGhostNames = Object.keys(dataGlobal.ghosts);
console.log(allGhostNames);