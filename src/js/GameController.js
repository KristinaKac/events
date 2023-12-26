export default class GameController {
    constructor(playingField) {
        this.playingField = playingField;

        this.previousIndex = null;
        this.currentIndex = null;
        this.scoreGoblin = 0;
        this.scorePlayer = 0;

        this.onCellClick = this.onCellClick.bind(this);
        this.playingField.container.addEventListener('click', this.onCellClick);

        this.mainProcess = this.mainProcess.bind(this);
        this.interval = setInterval(this.mainProcess, 1000);
    }

    mainProcess() {
        this.checkWinGoblin();

        this.getNextCell();

        this.playingField.removeRenderGoblin(this.previousIndex);
        this.playingField.addRenderGoblin(this.currentIndex);
    }

    onCellClick(e) {
        if (e.target.classList.contains('active')) {
            this.scorePlayer++;
            this.scoreGoblin = 0;
            this.playingField.removeRenderGoblin(this.currentIndex);
        }
    }

    getNextCell() {
        if (this.currentIndex !== null) this.previousIndex = this.currentIndex;

        this.currentIndex = Math.floor(Math.random() * this.playingField.cells.length);

        if (this.previousIndex === this.currentIndex) {
            this.currentIndex === (this.playingField.cells.length - 1) ? this.currentIndex-- : this.currentIndex++;
        }
    }

    checkWinGoblin() {
        if (this.scoreGoblin >= 5) {
            alert(`Вы проиграли. Счет игрока: ${this.scorePlayer}`);
            clearInterval(this.interval)
        }
        this.scoreGoblin++;
    }
}