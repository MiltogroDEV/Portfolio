// // ------------------ TROCA DE COR ------------------

// const botao = document.getElementById("MudarCor");
// const fundo = document.getElementById("Fundo");
// const corletra1 = document.getElementById("CorLetra1");
// const corletra2 = document.getElementById("CorLetra2");
// const corletra3 = document.getElementById("CorLetra3");
// const corHover1 = document.getElementById("ProjMarioJump");
// const corHover2 = document.getElementById("ProjTesteTeclado");

// var count = 0;

// botao.addEventListener("click", function(e) {
//     if (count == 1){
//         botao.src = "img/branco.png"
//         fundo.style.background = "var(--ColorBlack)"
//         fundo.style.color = "var(--ColorWhite)"
//         corletra1.style.color = "var(--ColorWhite)"
//         corletra2.style.color = "var(--ColorWhite)"
//         corletra3.style.color = "var(--ColorWhite)"
//         corHover1.style.backgroundColor = "var(--ColorBG1)"
//         corHover2.style.backgroundColor = "var(--ColorBG1)"
//         count--
//     } else if (count == 0){
//         botao.src = "img/preto.png"
//         fundo.style.background = "var(--ColorWhite)"
//         fundo.style.color = "var(--ColorBlack)"
//         corletra1.style.color = "var(--ColorBlack)"
//         corletra2.style.color = "var(--ColorBlack)"
//         corletra3.style.color = "var(--ColorBlack)"
//         corHover1.style.backgroundColor = "var(--ColorBG2)"
//         corHover2.style.backgroundColor = "var(--ColorBG2)"
//         count++
//     }
// })

// if (count == 0){
//     corHover1.addEventListener("mouseover", function(e) {
//         corHover1.style.backgroundColor = "var(--ColorBG11)"
//     })
//     corHover2.addEventListener("mouseover", function(e) {
//         corHover2.style.backgroundColor = "var(--ColorBG11)"
//     })
//     corHover1.addEventListener("mouseout", function(e) {
//         corHover1.style.backgroundColor = "var(--ColorBG1)"
//     })
//     corHover2.addEventListener("mouseout", function(e) {
//         corHover2.style.backgroundColor = "var(--ColorBG1)"
//     })
// } else if (count == 1) {
//     corHover1.addEventListener("mouseover", function(e) {
//         corHover1.style.backgroundColor = "var(--ColorBG22)"
//     })
//     corHover2.addEventListener("mouseover", function(e) {
//         corHover2.style.backgroundColor = "var(--ColorBG22)"
//     })
//     corHover1.addEventListener("mouseout", function(e) {
//         corHover1.style.backgroundColor = "var(--ColorBG2)"
//     })
//     corHover2.addEventListener("mouseout", function(e) {
//         corHover2.style.backgroundColor = "var(--ColorBG2)"
//     })
// }

// corletra1.addEventListener("mouseover", function(e) {
//     corletra1.style.color = "var(--ColorGrey)"
// })

// corletra1.addEventListener("mouseout", function(e) {
//     if (count == 1){
//         corletra1.style.color = "var(--ColorBlack)"
//     } else if (count == 0){
//         corletra1.style.color = "var(--ColorWhite)"
//     }
// })

// corletra2.addEventListener("mouseover", function(e) {
//     corletra2.style.color = "var(--ColorGrey)"
// })

// corletra2.addEventListener("mouseout", function(e) {
//     if (count == 1){
//         corletra2.style.color = "var(--ColorBlack)"
//     } else if (count == 0){
//         corletra2.style.color = "var(--ColorWhite)"
//     }
// })

// corletra3.addEventListener("mouseover", function(e) {
//     corletra3.style.color = "var(--ColorGrey)"
// })

// corletra3.addEventListener("mouseout", function(e) {
//     if (count == 1){
//         corletra3.style.color = "var(--ColorBlack)"
//     } else if (count == 0){
//         corletra3.style.color = "var(--ColorWhite)"
//     }
// })



// // ------------------ TRADUTOR ------------------

// const apTituloTxt = document.getElementById("ApTituloTxt");
// const apSubtituloTxt = document.getElementById("ApSubtituloTxt");

// console.log(apTituloTxt.textContent)
// console.log(apSubtituloTxt.textContent)