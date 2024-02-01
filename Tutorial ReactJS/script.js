// imperative approach
const root = document.getElementById('root');
const paragraph = document.createElement("p")
const paragraphContent = document.createTextNode("I'm a paragraph!");
paragraph.appendChild(paragraphContent)
root.appendChild(paragraph)
