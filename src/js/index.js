const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal")
const video = document.getElementById("video");
const linkDoVideo = video.src;
console.log(document);

console.log(document.querySelector(".botao-trailer"));


botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto")
    video.setAttribute("src", linkDoVideo);
});


botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "")
});


