import { Component, Input, OnInit } from '@angular/core'



@Component({
    selector: 'app-converter',
    templateUrl:'./converter.component.html',
    styleUrls:['./converter.component.scss'],
   

})



export class ConverterComponet { 

    @Input()USDbuy:number
    @Input()USDsale:number
    @Input()EURbuy:number
    @Input()EURsale:number
    @Input()data:any


    curentValue:number=0
    outValue:number=0
    curencyGive:string
    currncyGet:string

    lastCheck:boolean=false

   
    

    
    
  
    changeCurencyGive(e:any) { 
        this.curencyGive=e.target.value
       if(this.lastCheck){
        this.giveConverter()
       }else{
        this.getConverter()
       }
        
      
      }
    changeCurencyGet(e:any) {
        this.currncyGet=e.target.value
     if(this.lastCheck){
         this.giveConverter()
       }else{
        this.getConverter()
       }
      }


    changeHandlerGive(){
        this.giveConverter()
        console.log(this.curentValue)
        this.lastCheck=true
    }
    changeHandlerGet(){
        this.getConverter()
        this.lastCheck=false
      }
      
    
    giveConverter(){
        const curency1= this.data.find((element:any) => element.ccy === this.curencyGive)
        const curency2= this.data.find((element:any) => element.ccy === this.currncyGet)
        switch(true){
            case this.curencyGive === 'USD' && this.currncyGet==='UAH':
                this.outValue=curency1.buy*this.curentValue
                break
            case this.curencyGive === 'EUR' && this.currncyGet==='UAH':
                this.outValue=curency1.buy*this.curentValue
                break
            case this.curencyGive === 'UAH' && this.currncyGet==='EUR':
                    this.outValue=this.curentValue/curency2.sale
                    break
            case this.curencyGive === 'UAH' && this.currncyGet==='USD':
                    this.outValue=this.curentValue/curency2.sale
                    break
            case this.curencyGive === 'USD' && this.currncyGet==='EUR':
                    this.outValue=this.curentValue*curency1.buy/curency2.sale
                    break
            case this.curencyGive === 'EUR' && this.currncyGet==='USD':
                    this.outValue=this.curentValue*curency1.buy/curency2.sale
                    break
            case this.curencyGive === 'EUR' && this.currncyGet==='EUR'   :
                    this.outValue=this.curentValue
                    break
            case this.curencyGive === 'USD' && this.currncyGet==='USD':
                    this.outValue=this.curentValue
                    break
            case  this.curencyGive === 'UAH' && this.currncyGet==='UAH'  :
                    this.outValue=this.curentValue
                    break
            //case this.curencyGive === undefined || this.currncyGet === undefined:
             //   alert('Pleace select curency')
             
        }
        
    }
    getConverter(){
        const curency1= this.data.find((element:any) => element.ccy === this.curencyGive)
        const curency2= this.data.find((element:any) => element.ccy === this.currncyGet)
        switch(true){
            case this.curencyGive === 'USD' && this.currncyGet==='UAH':
                this.curentValue=0
                this.curentValue=this.outValue/curency1.buy
                break
            case this.curencyGive === 'EUR' && this.currncyGet==='UAH':
                this.curentValue=0
                this.curentValue=this.outValue/curency1.buy
                break
            case this.curencyGive === 'UAH' && this.currncyGet==='EUR':
                    this.curentValue=0
                    this.curentValue=this.outValue*curency2.sale
                    break
            case this.curencyGive === 'UAH' && this.currncyGet==='USD':
                    this.curentValue=0
                    this.curentValue=this.outValue*curency2.sale
                    break
            case this.curencyGive === 'USD' && this.currncyGet==='EUR':
                    this.curentValue=0
                    this.curentValue=this.outValue*curency2.sale/curency1.buy
                    break
            case this.curencyGive === 'EUR' && this.currncyGet==='USD':
                     this.curentValue=0
                    this.curentValue=this.outValue*curency2.sale/curency1.buy
                    break
            case this.curencyGive === 'EUR' && this.currncyGet==='EUR':
                        this.curentValue=this.outValue
                        break
                        case this.curencyGive === 'EUR' && this.currncyGet==='EUR'   :
                    this.outValue=this.curentValue
                    break
            case this.curencyGive === 'USD' && this.currncyGet==='USD':
                    this.outValue=this.curentValue
                    break
            case  this.curencyGive === 'UAH' && this.currncyGet==='UAH'  :
                    this.outValue=this.curentValue
                    break
                }
           
           
    }


  
  
    
  
   
 
}