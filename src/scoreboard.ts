export class Scoreboard {
  private score: number;
  private lives: number;
  private x: number;
  private y: number;
  private initialLives: number;

  constructor(initialLives: number, x: number, y: number) {
    this.score = 0;
    this.lives = initialLives;
    this.x = x;
    this.y = y;
    this.initialLives = initialLives;
  }

  public increaseScore(points: number) {
    this.score += points;
  }

  public decreaseLife() {
    this.lives -= 1;
  }

  public isGameOver(): boolean {
    return this.lives <= 0;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(`Score: ${this.score}`, this.x, this.y);
    ctx.fillText(`Lives: ${this.lives}`, this.x, this.y + 30);
  }

  public reset() {
    this.score = 0;
    this.lives = this.initialLives;
  }
}
