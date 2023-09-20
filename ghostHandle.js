// Ghosts
const ghosts = [];
ghosts.push (document.getElementById("spirit"), document.getElementById("wraith"), document.getElementById("phantom"), document.getElementById("poltergeist"), document.getElementById("banshee"),
document.getElementById("jinn"), document.getElementById("mare"), document.getElementById("revenant"), document.getElementById("shade"), document.getElementById("demon"),document.getElementById("yurei"),
document.getElementById("oni"), document.getElementById("yokai"), document.getElementById("hantu"), document.getElementById("goryo"), document.getElementById("myling"), document.getElementById("onryo"),
document.getElementById("twins"), document.getElementById("raiju"), document.getElementById("obake"), document.getElementById("mimic"), document.getElementById("moroi"), document.getElementById("deogen"),
document.getElementById("thaye"));

// Resets the ghosts to being visible based on speed
function resetGhosts() {
  let i = 0;
  while (i < ghosts.length){
    ghosts[i].style.visibility = 'visible';
    i = i + 1;
  }
}

// Radio buttons input
const inp = document.getElementById("slow")
const inp2 = document.getElementById("normal")
const inp3 = document.getElementById("fast")

console.log(ghosts[3]);

slow.addEventListener('input', (e) => {
    resetGhosts()

    ghosts[0].style.visibility = "hidden";
    ghosts[1].style.visibility = "hidden";
    ghosts[2].style.visibility = "hidden";
    ghosts[3].style.visibility = "hidden";
    ghosts[4].style.visibility = "hidden";
    ghosts[5].style.visibility = "hidden";
    ghosts[6].style.visibility = "hidden";
    ghosts[8].style.visibility = "hidden";
    ghosts[9].style.visibility = "hidden";
    ghosts[10].style.visibility = "hidden";
    ghosts[11].style.visibility = "hidden";
    ghosts[12].style.visibility = "hidden";
    ghosts[14].style.visibility = "hidden";
    ghosts[15].style.visibility = "hidden";
    ghosts[16].style.visibility = "hidden";
    ghosts[18].style.visibility = "hidden";
    ghosts[19].style.visibility = "hidden";
})

normal.addEventListener('input', (e) => {
  resetGhosts()

  ghosts[7].style.visibility = "hidden";
  ghosts[13].style.visibility = "hidden";
  ghosts[17].style.visibility = "hidden";
  ghosts[21].style.visibility = "hidden";
  ghosts[22].style.visibility = "hidden";
  ghosts[23].style.visibility = "hidden";
})
fast.addEventListener('input', (e) => {
  resetGhosts()
  ghosts[0].style.visibility = "hidden";
  ghosts[1].style.visibility = "hidden";
  ghosts[2].style.visibility = "hidden";
  ghosts[3].style.visibility = "hidden";
  ghosts[4].style.visibility = "hidden";
  ghosts[6].style.visibility = "hidden";
  ghosts[8].style.visibility = "hidden";
  ghosts[9].style.visibility = "hidden";
  ghosts[10].style.visibility = "hidden";
  ghosts[11].style.visibility = "hidden";
  ghosts[12].style.visibility = "hidden";
  ghosts[14].style.visibility = "hidden";
  ghosts[15].style.visibility = "hidden";
  ghosts[16].style.visibility = "hidden";
  ghosts[19].style.visibility = "hidden";
})