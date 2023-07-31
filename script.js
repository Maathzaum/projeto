function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  // Subustituir a imagem
  if (html.classList.contains("light")) {
    // se tiver ligth mode, adicionar imagem light
    img.setAttribute("src", "./assets/MAZO.jpg")
  } else {
    // se tiver sem ligth mode, manter a imagem normal
    img.setAttribute("src", "./assets/Mazo.Black.JPG")
  }

  const alt = document.querySelector("#profile p")

  if (html.classList.contains("light")) {
    alt.setAttribute("alt=Maathzaum no Estadio")
  } else {
    alt.setAttribute("alt=Mathzaum no Boliche")
  }

  //   if (html.classList.contains('light')) {
  //     html.classList.remove('light')
  //    } else {
  //      html.classList.add('light')
  //    } ou pode ser usado a função a baixo
}
