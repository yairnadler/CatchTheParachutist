export class Airplane {
  private image: HTMLImageElement;
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private speed: number;
  private flipped: boolean;

  constructor(imageSrc: string, x: number, y: number, width: number, height: number, speed: number) {
    this.image = new Image();
    this.image.src = imageSrc;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.flipped = false;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    if (this.flipped) {
      ctx.scale(-1, 1);
      ctx.drawImage(this.image, -this.x - this.width, this.y, this.width, this.height);
    } else {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    ctx.restore();
  }

  public update(canvasWidth: number, deltaTime: number) {
    this.x += this.speed * deltaTime;

    // Reverse direction if airplane reaches canvas boundaries
    if (this.x < 0 || this.x + this.width > canvasWidth) {
      this.speed *= -1;
      this.flipped = !this.flipped;
    }
  }

  // Getter methods for position and dimensions
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
