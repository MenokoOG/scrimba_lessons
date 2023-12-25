const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name, ) {
    welcomeEl.textContent = `${greeting}, ${name}`
}

greetUser("Howdy", "Menoko OG", )
