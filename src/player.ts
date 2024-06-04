import { Intersectable } from './intersectable';
import { MovementStrategy } from './movement';

export class Player implements Intersectable {
  private image: HTMLImageElement;
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private movementStrategy: MovementStrategy;
  private canvasWidth: number;
  private canvasHeight: number;

  constructor(imageSrc: string, x: number, y: number, width: number, height: number, movementStrategy: MovementStrategy) {
    this.image = new Image();
    this.image.src = imageSrc;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.movementStrategy = movementStrategy;
    this.canvasWidth = window.innerWidth;
    this.canvasHeight = window.innerHeight;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  public update(deltaTime: number) {
    const { x, y } = this.movementStrategy.calculateMovement(this.x, this.y, deltaTime);
    this.x = Math.max(0, Math.min(x, this.canvasWidth - this.width));
    this.y = Math.max(0, Math.min(y, this.canvasHeight - this.height));
  }

  public getX(): number {
    return this.x;
  }

  public getY(): number {
    return this.y;
  }

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }

  public load(): Promise<void> {
    return new Promise((resolve) => {
      this.image.onload = () => resolve();
    });
  }
}
