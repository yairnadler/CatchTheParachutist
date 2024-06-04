import { Player } from './player';
import { KeyboardMovement } from './movement';
import { Airplane } from './airplane';
import { Sea } from './sea';
import { Parachutist } from './parachutist';
import { checkIntersection } from './intersectable';
import { Scoreboard } from './scoreboard';
import { GameState } from './gameState';

export class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private gameState: GameState;
    private lastTime: number;
    private deltaTime: number;
    private backgroundImage: HTMLImageElement;
    private sea: Sea;
    private player: Player;
    private airplane: Airplane;
    private parachutists: Parachutist[];
    private parachutistDropTimer: number;
    private parachutistDropInterval: number;
    private scoreboard: Scoreboard;

    constructor(canvasId: string) {
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.gameState = GameState.Playing;
        this.lastTime = performance.now();
        this.deltaTime = 0;

        this.backgroundImage = new Image();
        this.backgroundImage.src = './assets/background.png';

        this.sea = new Sea('./assets/sea.png', 0, this.canvas.height - 200, this.canvas.width, 300);
        const movement = new KeyboardMovement(500);
        this.player = new Player('./assets/boat.png', 50, this.canvas.height - 270, 100, 100, movement);
        this.airplane = new Airplane('./assets/plane.png', 0, 50, 100, 50, 200);
        this.parachutists = [];
        this.parachutistDropTimer = 0;
        this.parachutistDropInterval = 3; // in seconds
        this.scoreboard = new Scoreboard(3, 10, 20);

        this.loadImages().then(() => {
            this.play();
        }).catch(error => {
            console.error('Error loading images:', error);
        });
    }

    private async loadImages() {
        return Promise.all([
            new Promise<void>((resolve) => {
                this.backgroundImage.onload = () => resolve();
            }),
            this.sea.load(),
            this.player.load(),
            this.airplane.load()
        ]);
    }

    public play() {
        const draw = (currentTime: number) => {
            // Calculate deltaTime
            this.deltaTime = (currentTime - this.lastTime) / 1000;
            this.lastTime = currentTime;

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(this.backgroundImage, 0, 0, this.canvas.width, this.canvas.height);
            this.sea.draw(this.ctx);

            if (this.gameState === GameState.Playing) {
                this.airplane.update(this.canvas.width, this.deltaTime);
                this.airplane.draw(this.ctx);
                this.player.update(this.deltaTime);
                this.player.draw(this.ctx);
                this.parachutistDropTimer += this.deltaTime;

                if (this.parachutistDropTimer > this.parachutistDropInterval) {
                    this.parachutistDropTimer = 0;
                    const parachutist = new Parachutist('./assets/parachutist.png', this.airplane.getX(), this.airplane.getY(), 50, 50, 100);
                    this.parachutists.push(parachutist);
                }

                for (let i = 0; i < this.parachutists.length; i++) {
                    const parachutist = this.parachutists[i];
                    parachutist.update(this.deltaTime);
                    parachutist.draw(this.ctx);

                    if (checkIntersection(this.player, parachutist)) {
                        console.log('Intersection detected with player!');
                        this.scoreboard.increaseScore(10);
                        this.parachutists.splice(i, 1);
                        i--;
                    }

                    if (checkIntersection(this.sea, parachutist)) {
                        console.log('Intersection detected with sea!');
                        this.scoreboard.decreaseLife();
                        this.parachutists.splice(i, 1);
                        i--;
                    }

                    if (parachutist.getY() > this.canvas.height) {
                        this.parachutists.splice(i, 1);
                        i--;
                    }
                }

                this.scoreboard.draw(this.ctx);

                if (this.scoreboard.isGameOver()) {
                    this.gameState = GameState.GameOver;
                    this.ctx.font = '50px Arial';
                    this.ctx.fillStyle = 'red';
                    this.ctx.fillText('Game Over', this.canvas.width / 2 - 100, this.canvas.height / 2);

                }
            }

            if (this.gameState === GameState.Playing) {
                requestAnimationFrame(draw);
            }
        };

        draw(performance.now());
    }
}
