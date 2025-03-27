// Get the target webpage content (replace with your desired URL)
fetch('https://example.com')
  .then(response => response.text())
  .then(html => {
    // Create a new div to hold the injected content
    const injectedContentDiv = document.createElement('div');
    injectedContentDiv.innerHTML = html;
    injectedContentDiv.style.width = '50%'; // Adjust width as needed
    injectedContentDiv.style.float = 'left'; // Or use flexbox for better layout

    // Append the injected content to the body
    document.body.appendChild(injectedContentDiv);
  })
  .catch(error => {
    console.error('Error fetching content:', error);
  });

