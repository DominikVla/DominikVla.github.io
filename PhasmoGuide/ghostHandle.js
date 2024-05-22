// Getting data from JSON file
let dataGlobal;
const getData = async () => {
  if (!dataGlobal) {
    const response = await fetch("./ghosts.json");
    dataGlobal = await response.json();
  }
  return dataGlobal;
};

// Function to reset the speed filter
function resetGhosts() {
  const allGhostNames = Object.keys(dataGlobal.ghosts);
  allGhostNames.forEach(ghost => {
    document.getElementById(ghost).classList.remove('hideRow');
  });
}

//  Applying Speed of Ghost
function filterGhosts(filterFunction) {
  resetGhosts();  // Reset ghosts to be visible before applying filters
  const allGhostNames = Object.keys(dataGlobal.ghosts);
  allGhostNames.forEach(ghost => {
    if (!filterFunction(ghost)) {
      document.getElementById(ghost).classList.add('hideRow');
    }
  });
}

// Adding ghosts to each speed
const filters = {
  slow: ghost => {
    const speed = dataGlobal.ghosts[ghost].speed;
    return (typeof speed === 'string' && speed === 'slow') || (Array.isArray(speed) && speed.includes('slow'));
  },
  normal: ghost => {
    const speed = dataGlobal.ghosts[ghost].speed;
    return (typeof speed === 'string' && speed === 'normal') || (Array.isArray(speed) && speed.includes('normal'));
  },
  fast: ghost => {
    const speed = dataGlobal.ghosts[ghost].speed;
    return (typeof speed === 'string' && speed === 'fast') || (Array.isArray(speed) && speed.includes('fast'));
  }
};

// Adding event listener for radio buttons
getData().then(() => {
  ['slow', 'normal', 'fast'].forEach(speed => {
    document.getElementById(speed).addEventListener('input', () => {
      filterGhosts(filters[speed]); // Applying Filter
    });
  });
});
