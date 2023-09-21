// Get Ghosts
let dataGlobal;

const getData = async () => {
  const response = await fetch("./ghosts.json");
  const data = await response.json();
  dataGlobal = data;
  return data;
};

// Function to get Normal Ghosts
function getNormSpeed() {
  return Object.keys(dataGlobal.ghosts).filter(ghost => {
    const speed = dataGlobal.ghosts[ghost].speed;
    return (typeof speed === 'string' && speed === 'normal') ||
           (Array.isArray(speed) && speed.length === 1 && speed[0] === 'normal');
  });
}

// Function to get Normal/Fast Ghosts
function getNormFastSpeed() {
  return Object.keys(dataGlobal.ghosts).filter(ghost => {
    const speed = dataGlobal.ghosts[ghost].speed;
    return Array.isArray(speed) && speed.includes('normal') && speed.includes('fast') && !speed.includes('slow');     
  });
}

// Function to get Slow/Fast Ghosts
function getSlowFastSpeed() {
  return Object.keys(dataGlobal.ghosts).filter(ghost => {
    const speed = dataGlobal.ghosts[ghost].speed;
    return Array.isArray(speed) && speed.includes('slow') && speed.includes('fast') && !speed.includes('normal');     
  });
}

// Resets the ghosts to being visible based on speed
function resetGhosts() {
  const allGhostNames = Object.keys(dataGlobal.ghosts);

  for (let i = 0; i < allGhostNames.length; i++) {
    document.getElementById(allGhostNames[i]).style.visibility = "visible";
  }
}

// Radio buttons input
const inp = document.getElementById("slow")
const inp2 = document.getElementById("normal")
const inp3 = document.getElementById("fast")

// Ghost List Updating
// Show only Slow Ghosts
slow.addEventListener('input', (e) => {
  (async () => {
    await getData();
    resetGhosts();
    const normFast = getNormFastSpeed();
    const norm = getNormSpeed();
    for (i=0; i < normFast.length; i++) {
      ghost = normFast[i];
      document.getElementById(ghost).style.visibility = "hidden";
    }
    for (i=0; i < norm.length; i++) {
      ghost = norm[i];
      document.getElementById(ghost).style.visibility = "hidden";
    }
  })();  
})

// Show only Normal Ghosts
normal.addEventListener('input', (e) => {
  (async () => {
    await getData();
    resetGhosts();
    const slowFast = getSlowFastSpeed();
    for (i=0; i < slowFast.length; i++) {
      ghost = slowFast[i];
      document.getElementById(ghost).style.visibility = "hidden";
    }
  })();  
})

// Show only Fast Ghosts
fast.addEventListener('input', (e) => {
  (async () => {
    await getData();
    resetGhosts()
    const normSpeed = getNormSpeed();
    for (i = 0; i < normSpeed.length; i++) {
      ghost = normSpeed[i];
      document.getElementById(ghost).style.visibility = "hidden";
    }

  })();
})