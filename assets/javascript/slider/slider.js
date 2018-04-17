export default class Slider{
    constructor({e,animationFunc, speed}){
        this.e = e;
        this.animationFunc = animationFunc;

        this.index = 0 ;
        this.size = e.length;
        this.speed = speed;
      
        this.innerNext = this.innerNext.bind(this);
        this.innerPrev = this.innerPrev.bind(this);  
        this.stop = this.stop.bind(this);

        this.prev = this.prev.bind(this);        
        this.next = this.next.bind(this);
    }
    
    innerNext(){
        this.index++;
        if(this.index  >= this.size) this.index = 0;
        this.animationFunc(this.e[this.index])
    }
    innerPrev(){
        this.index--;
        if(this.index  < 0) this.index = this.size - 1;
        this.animationFunc(this.e[this.index])
    }

    next(){
        this.innerNext();
        if(this.interval){  
            this.stop();
            this.play();
        }
    }
    prev(){
        this.innerPrev();
        if(this.interval){  
            this.stop();
            this.play();
        }
    }

    play(){
        this.interval = setInterval(this.innerNext,this.speed)
    }
    stop(){
        clearInterval(this.interval)
    }
    
}

//let slider = new Slider({
//    e: [1,2,3,4,5]
//});


// slider.play();
// setTimeout(slider.stop,5000)