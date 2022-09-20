window.addEventListener("load", () => {
    const sudoku = document.querySelector("#Sudoku")

    if(sudoku != null){
        const possibleNumbers = [1,2,3,4,5,6,7,8,9]
        const generateCells = () => {
            for(let number of possibleNumbers){
                const cell = document.createElement("div")
                cell.textContent = number
                sudoku.insertAdjacentElement("beforeend", cell)
            }
        }
        generateCells()

        

    }
})