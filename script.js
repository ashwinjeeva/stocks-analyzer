function home(){
         
    let name=document.getElementById("name").value
    let in1=document.getElementById("1in").value
    let in2=document.getElementById("2in").value
    let in3=document.getElementById("3in").value
    let pl1=document.getElementById("1pl").value
    let pl2=document.getElementById("2pl").value
    let pl3=document.getElementById("3pl").value
    let sh1=document.getElementById("1sh").value
    let sh2=document.getElementById("2sh").value
    let sh3=document.getElementById("3sh").value
    let dy=document.getElementById("dy").value
    let indpe=document.getElementById("indpe").value
    let pe=document.getElementById("pe").value
    let pb=document.getElementById("pb").value
    let roe=document.getElementById("roe").value
    let roa=document.getElementById("roa").value
    let de=document.getElementById("de").value
    let ce=document.getElementById("ce").value
    let qr=document.getElementById("qr").value
    let ps=document.getElementById("ps").value

 
    
    let incomes=income(in1,in2,in3)
    let shareholds=sharehold(sh1,sh2,sh3)
    let profitlosss=profitloss(pl1,pl2,pl3)
    let divs=div(dy)
    let pers=per(pe)
    let pbrs=pbr(pb)
    let roers=roer(roe)
    let roars=roar(roa)
    let ders=der(de)
    let cers=cer(ce)
    let qers=qrr(qr)
    let psrs=psr(ps)
    
    let a = []
    a[0]=income(in1,in2,in3)
    a[1]=sharehold(sh1,sh2,sh3)
    a[2]=profitloss(pl1,pl2,pl3)
    a[3]=div(dy)
    a[4]=per(pe)
    a[5]=pbr(pb)
    a[6]=roer(roe)
    a[7]=roar(roa)
    a[8]=der(de)
    a[9]=cer(ce)
    a[10]=qrr(qr)
    a[11]=psr(ps)
    let mark=0
for(i=0;i<a.length;i++){
str=a[i]
if(str.match(/STABLE/gi)  ){
    mark=mark+1
}
else if(str.match(/EXCELLENT/gi)){
    mark=mark+1
}
else if(str.match(/INCREASING/gi)){
    mark=mark+1
}

}




   
    localStorage.setItem("name",name)
    localStorage.setItem("incomes",incomes)
    localStorage.setItem("shareholds",shareholds)
    localStorage.setItem("profitlosss",profitlosss)
    localStorage.setItem("divs",divs)
    localStorage.setItem("pers",pers)
    localStorage.setItem("pbrs",pbrs)
    localStorage.setItem("roers",roers)
    localStorage.setItem("roars",roars)
    localStorage.setItem("ders",ders)
    localStorage.setItem("cers",cers)
    localStorage.setItem("qers",qers)
    localStorage.setItem("psrs",psrs)
    localStorage.setItem("mark",mark)

    
        
  

    


    function income(in1,in2,in3){
        if(in1>=in2 && in2>=in3){
        return "Annual Income For This Company Is INCREASING Consistently"
            
        }
        else{
            return "Annual Income For This Company Is NOT  Consistent"
        }
    }

    
    function profitloss(pl1,pl2,pl3){
        if(pl1>=pl2 && pl2>=pl3){
        return "Profits For This Company Is INCREASING Consistently"
            
        }
        else{
            return "This Company Is NOT Making Profits Consistently"
        }
    }

    
    function sharehold(sh1,sh2,sh3){
        if(sh1<sh2 ||sh2<sh3 || sh1<sh3){
        return "ShareHoldings Of The Promoters Are UNSTABLE"
            
        }
        else{
            return "ShareHoldings Of The Promoters Are STABLE"
        }

    }

    function div(dy){
        if(dy>1){
        return  "Divident Yield % For This Company Is EXCELLENT"
            
        }
        else{
            return "Divident Yield % For This Company Is POOR"
        }
    }
    
    function per(pe){
        if(pe>indpe){
        return  "Price to Earnings Ratio For This Company Is EXCELLENT"
            
        }
        else{
            return "Price to Earnings Ratio For This Company Is POOR"
        }
    }
    function pbr(pb){
        if(pb>=1 && pb<=3){
        return  "Price to Book Ratio For This Company Is EXCELLENT"
            
        }
        else{
            return "Price to Book Ratio For This Company Is POOR"
        }
    }
    function roer(roe){
        if(roe>=15 && pb<=20){
        return  "Return On Equity Ratio For This Company Is EXCELLENT"
            
        }
        else{
            return  "Return On Equity Ratio  For This Company Is POOR"
        }
    }
    function roar(roa){
        if(roa>=5){
        return  "Return On Assets Ratio For This Company Is EXCELLENT"
            
        }
        else{
            return "Return On Assets Ratio For This Company Is POOR"
        }
    }
    function der(de){
        if(de<=1){
        return  "Debt To Equity Ratio For This Company Is EXCELLENT"
            
            
        }
        else{
            return "Debt To Equity Ratio For This Company Is POOR"
        }
    }
    function cer(ce){
        if(ce>=1.2 && ce<=2){
        return   "Current Ratio For This Company Is EXCELLENT"
            
        }
        else{
            return "Current Ratio For This Company Is POOR"
        }
    }
    function qrr(qr){
        if(qr>=1){
        return  "Quick Ratio For This Company Is EXCELLENT"
            
        }
        else{
            return "Quick Ratio For This Company Is POOR"
        }
    }
    function psr(ps){
        if(qr<=2){
        return  "Price to Sales Ratio For This Company Is EXCELLENT"
            
        }
        else{
        
            return "Price to Sales Ratio For This Company Is POOR"
        }
    }

    
    

    
    


    }
