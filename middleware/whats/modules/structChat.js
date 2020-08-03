module.exports = class structChat{
    constructor(){
        this.map = new Map();
    }
    hasData(name){
        return (this.map.get(name) !== undefined);
    }
    setData(name,struct){
        this.map.set(name,struct);
    }
    getData(name){
        return this.map.get(name)
    }
    isNewMsg(name,current){
        let last = this.getData(name);
        if(last !== undefined){
            return(current.time < last.time || current.text != last.text)
        }
    }
    isNewData(name,struct){
        if(!this.hasData(name)){
            return true;
        }
        if(this.isNewMsg(name,struct)){
            return true;
        }
        return false
    }
    create(name,text,time){
        return {
            name:name,
            text:text,
            time:time
        }
    }
}