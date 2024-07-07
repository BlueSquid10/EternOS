document.addEventListener('DOMContentLoaded', function() {
  const terminal = document.querySelector('.terminal');
  const commandInput = terminal.querySelector('.command');
  const outputContainer = terminal.querySelector('.output-container');

  commandInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const command = commandInput.value.trim();
      executeCommand(command);
      commandInput.value = ''; // Clear input after execution
    }
  });

  function executeCommand(command) {
    const output = document.createElement('div');
    output.className = 'output-line';

    switch(command.split(' ')[0]) {
      case 'date':
        output.textContent = new Date().toLocaleString();
        break;
      case 'echo':
        output.textContent = command.substring(5); // Echo the text after 'echo '
        break;
      // Add more commands here as needed
      default:
        output.textContent = `Command not found: ${command}`;
        break;
    }

    outputContainer.appendChild(output);
  }
});
