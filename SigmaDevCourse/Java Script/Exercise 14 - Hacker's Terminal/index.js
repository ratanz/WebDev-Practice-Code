
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function hackingSimulator() {
    const messages = [
      "Initializing hacking...",
      "Reading your files...",
      "Password files Detected...",
      "Sending all passwords and personal files to server...",
      "Cleaning up..."
    ];
  
    const terminal = document.createElement('div');
    terminal.style.backgroundColor = 'green';
    document.body.appendChild(terminal);
  
    for (let i = 0; i < messages.length; i++) {
      terminal.textContent = messages[i];
      await sleep(Math.floor(Math.random() * 7000) + 1000); // Random delay between 1 to 7 seconds
    }
  }
  
  hackingSimulator();