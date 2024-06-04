export interface MovementStrategy {
  calculateMovement(x: number, y: number, deltaTime: number): { x: number; y: number };
}

export class KeyboardMovement implements MovementStrategy {
  private speed: number;
  private keys: { [key: string]: boolean } = {};

  constructor(speed: number) {
    this.speed = speed;
    window.addEventListener('keydown', (e) => (this.keys[e.key] = true));
    window.addEventListener('keyup', (e) => (this.keys[e.key] = false));
  }

  public calculateMovement(x: number, y: number, deltaTime: number): { x: number; y: number } {
    let dx = 0;
    if (this.keys['ArrowLeft']) dx -= this.speed * deltaTime;
    if (this.keys['ArrowRight']) dx += this.speed * deltaTime;

    return { x: x + dx, y };
  }
}
