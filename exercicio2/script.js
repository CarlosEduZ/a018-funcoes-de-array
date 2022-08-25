const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8]

const triplos = arrayNum.map((numero) => {
    return numero * 3    
})
console.log(triplos)


const metades = arrayNum.map((numero => {
    return numero / 2
}))
console.log(metades)