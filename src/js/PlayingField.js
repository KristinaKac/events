export default class PlayingField {

    constructor(boardSize) {
        this.boardSize = boardSize;
        this.container = document.querySelector('.container');

        this.renderField();
        this.cells = Array.from(document.querySelectorAll('.cell'));
    }

    renderField() {
        this.container.style.gridTemplateColumns = `repeat(${this.boardSize}, auto)`
        this.container.style.gridTemplateRows = `repeat(${this.boardSize}, auto)`
        for (let i = 0; i < this.boardSize; i++) {
            for (let j = 0; j < this.boardSize; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                this.container.appendChild(cell);
            }
        }
    }

    removeRenderGoblin(index){
        if (index !== null) this.cells[index].classList.remove('active');
    }

    addRenderGoblin(index){
        this.cells[index].classList.add('active');
    }
}