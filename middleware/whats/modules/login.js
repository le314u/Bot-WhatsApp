let css = require('../query/work')

module.exports = class login{
    constructor(core){
        this.shell = core;
        this.wait = ((seg)=>{
            let sleep=(ms)=>{
                return new Promise(resolve=>{
                    setTimeout(resolve,ms)
                })
            };
            let intervalCheck = async (f,args) => {
                await sleep(seg*1000)
                return f(...args).then((ret)=>ret).catch(()=>false)
            };
            return (async (f,args)=>{
                while(! await intervalCheck(f,args)){};
                return true
            });
        })(1)
    }
    
    checkLogin(){
        return this.wait(this.shell.hasElement(css.chat.block),[1])
    }
}