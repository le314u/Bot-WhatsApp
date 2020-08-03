module.exports = class core{
    constructor(page){
        this.page = page;
    };

    hasElement(query){
        return (async (argQuery)=>{
            return this.page.$eval( query(argQuery),tag=>tag )
                .then(()=>true)
                .catch(()=>false)
        })
    };

    get(query, att){
        return (async (argQuery)=>{
            return await this.page.$eval(query(argQuery),(tag, att)=>{
                return tag[att]
            }, att)
        })
    };

    click(query, eventType){
        return (async (argQuery)=>{
            await this.page.$eval(query(argQuery), (tag,eventType)=>{
                {
                    let event = new MouseEvent(eventType,{view:window,bubbles:true,cancelable:true})
                    tag.dispatchEvent(event);
                }
            },eventType)
        })
    };
    
    inputQuery = (query)=>{
        return (async (text,arqQuery)=>{
            await this.page.$eval(query(arqQuery),(tag,text)=>{
                tag.innerText=text
                let event = new InputEvent('input',{bubbles:true,data:text,inputType:'insertText'})
                tag.dispatchEvent(event);
            },text)
        })
    };

    js(){
        return (async (fn,args)=>{
            return await this.page.evaluate(fn,...args)
        })
    };
}