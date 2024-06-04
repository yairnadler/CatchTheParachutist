import { Intersectable } from './intersectable';

export class Sea implements Intersectable {
  private image: HTMLImageElement;
  private x: number;
  private y: number;
  private width: number;
  private height: number;

  constructor(imageSrc: string, x: number, y: number, width: number, height: number) {
    this.image = new Image();
    this.image.src = imageSrc;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
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

  // Load method for image loading
  public load(): Promise<void> {
    return new Promise((resolve) => {
      this.image.onload = () => resolve();
    });
  }
}
