class Polygon{
    constructor(a){
        this.a=a;
    }
    perimeter(){
    var sum=0;
    for(var i=0;i<this.a.length;i++){
        sum=sum+this.a[i]
    }   
    return sum;
    }
};


const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
