import {Shape} from "./Shape";


class Triangle extends Shape{
    private _side1: number;
    private _side2: number;
    private _side3: number;

    constructor(name: string, color: string, side1: number, side2: number, side3: number) {
        super(name, color);
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
    }

    getSide1(): number {
        return this._side1;
    }

    setSide1(value: number) {
        this._side1 = value;
    }

    getSide2(): number {
        return this._side2;
    }

    setSide2(value: number) {
        this._side2 = value;
    }

    getSide3(): number {
        return this._side3;
    }

    setSide3(value: number) {
        this._side3 = value;
    }
    getPerimeter():number{

        if (this.checkTria()===true){
            return this._side1 + this._side2 + this._side3
        }else {
            console.log(this.alert())
            return -1
        }
    }
    getArea():number{

        if (this.getPerimeter()){
            let s = this.getPerimeter()/2
            return  Math.sqrt(s * (s - this._side1) * (s - this._side2) * (s - this._side3));
        }else {
            console.log(this.alert())
            return -1
        }

    }
    checkTria():boolean{
            if(this._side1< this._side2 + this._side3 && this._side2 < this._side1 + this._side3 && this._side3 < this._side2 + this._side1){
                return true
            }else{
                return false
            }
    }
    alert():string{
        return 'this is not triangle'
    }
}
let tria1 = new Triangle('trial1','red',1,2,6)
console.log(tria1.getArea())