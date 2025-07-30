document.addEventListener("DOMContentLoaded", () => {
    const letter = document.querySelector(".letter");
    const template = document.getElementById("letter-template");
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = template.innerHTML.trim();
  
    // Grab the HTML as a string (not escaped)
    const html = tempDiv.innerHTML;
    letter.innerHTML = "";
  
    let i = 0;
  
    function typeWriter() {
      if (i <= html.length) {
        letter.innerHTML = html.slice(0, i);
        i++;
        setTimeout(typeWriter, 25);
      }
    }
  
    typeWriter();
  });
  