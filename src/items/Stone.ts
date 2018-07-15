namespace Game{
    export const stoneImage: string = "res/atlas/ui/stone.png";
    export const fallingStoneImage: string = "res/atlas/ui/fallingStone.png";
    export const fallingStoneSpeed: number = 5;//陨石下落的平均速度
}

class Stone extends Barrier<Laya.Image>{
    public isFalling:boolean;//是否正在坠落
    private _fallingStoneSpeed: number;//坠落速度
    private _up: number;//最高处
    private _down: number;//最低处

    constructor(backgroundImage:Laya.Image,width:number,height:number,name:string, isFalling:boolean=false)
    {
        super(backgroundImage,width,height,name);
        this.item = new Laya.Image();
        this.isFalling = isFalling;
        this._fallingStoneSpeed = Math.random()%Game.fallingStoneSpeed/2+Game.fallingStoneSpeed;
        this._up = 0;
        this._down = backgroundImage.height; 
    }

    //绘制item
    public drawItem():void
    {
        if(!this.isFalling){
            this.item.loadImage(Game.stoneImage);
            this.item.scaleX=this._width/108;
            this.item.scaleY=this._height/191;
        }else{
            this.item.loadImage(Game.fallingStoneImage);
            this.item.scaleX=this._width/600;
            this.item.scaleY=this._height/800;
        }
    }

    //判断球是否与陨石相撞，0为不相撞，1为上下碰撞，2为左右碰撞
     public detectCollisions(ball:Ball):number
     {
         if(this._isTouched){
             return;
         }
        let ballRec=new Laya.Rectangle(ball.x-ball.radius,ball.y-ball.radius,ball.radius*2,ball.radius*2);
   
        //判断是否与障碍物碰撞反弹(先判断上下方向再判断左右方向)
        let itemRec=this.item.getBounds();
        itemRec=itemRec.setTo(itemRec.x+itemRec.width/10,itemRec.y+itemRec.height/10,itemRec.width*4/5,itemRec.height*4/5);
        let inStone:number=0;//无碰撞是0，上下方向是1，左右方向是2
        if((ballRec.x>=itemRec.x-ballRec.width)&&(ballRec.right<=itemRec.right+ballRec.width))
        {
            if(((ballRec.bottom>=itemRec.y)&&(ballRec.y<itemRec.y)&&(ball.vy>0))||//向上反弹
            ((ballRec.y<=itemRec.bottom)&&(ballRec.bottom>itemRec.bottom)&&(ball.vy<0)))//向下反弹
            {
                inStone=1;
                this._isTouched = true;
            }
        }
        if((ballRec.y>=itemRec.y-ballRec.height)&&(ballRec.bottom<=itemRec.bottom+ballRec.height))//向左反弹
        {
            if(((ballRec.right>=itemRec.x)&&(ballRec.x<itemRec.x)&&(ball.vx>0))||//向左反弹
            ((ballRec.x<=itemRec.right)&&(ballRec.right>itemRec.right)&&(ball.vx<0)))//向右反弹
            {
                inStone=2;
                this._isTouched = true;
            }
        }

        return inStone;
     }

     //不断更新陨石的位置，只有当_isFalling为真时，位置才会改变
     public update(){
         if(this.isFalling){
            this.item.y += this._fallingStoneSpeed;
            if(this.item.y >= this._down+this._height){
                this.item.y = this._up-this._height;
            }
         }
     }
}