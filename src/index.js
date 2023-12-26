import './css/style.css';
import GameController from './js/GameController';
import PlayingField from "./js/PlayingField";


const playingField = new PlayingField(4);
const gameController = new GameController(playingField);



