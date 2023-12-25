export default class PlayingField {

    constructor(boardSize) {
        this.boardSize = boardSize;
        this.container = document.querySelector('.container');

        this.renderField();
        this.cells = Array.from(document.querySelectorAll('.cell'));
        this.previousIndex = null;
        this.currentIndex = null;

        this.pointGoblin = 0;
        this.pointPlayer = 0;

        this.array = [0];

        this.searchNoRepeatCell = this.searchNoRepeatCell(this);

        setInterval(this.searchNoRepeatCell, 1000);

        this.container.addEventListener('click', this.onCellClick);

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
    searchNoRepeatCell() {
        while (this.array.length != 2) {
            const item = Math.floor(Math.random() * this.cells.length);
            if (this.array.includes(item)) {
                continue;
            }
            this.array.push(item);
            this.cells[item].classList.add('active');
            this.cells[this.array[0]].classList.remove('active');
            this.array.shift();
            break;
        }
    }
    // renderGoblin(item) {
    //     console.log(item)
    //     console.log(this.array[0])
    //     this.cells[item].classList.add('active');
    //     this.cells[this.array[0]].classList.remove('active');
    // }


}