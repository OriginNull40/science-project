// This loads the data for all 3 discs at once from the browser
let memory = JSON.parse(localStorage.getItem('3disc_save')) || {
    activeDisc: 1,
    disc1: "Start of Adventure",
    disc2: "Empty Disc",
    disc3: "Empty Disc"
};

// Function to update what you see
function updateUI() {
    const content = memory[`disc${memory.activeDisc}`];
    document.getElementById('display').innerHTML = `
        <h3>DISC ${memory.activeDisc}</h3>
        <p>${content}</p>
    `;
}

// Function to switch discs
window.swap = (num) => {
    memory.activeDisc = num;
    updateUI();
};

// Function to save everything
window.saveGame = () => {
    // For this test, let's just add a timestamp to the current disc
    memory[`disc${memory.activeDisc}`] += " (Saved!)";
    localStorage.setItem('3disc_save', JSON.stringify(memory));
    alert("Saved all 3 discs to Chromebook memory!");
    updateUI();
};

// Run on startup
updateUI();
