export function buttonDisabled(quantity){
    const btnAddCard=document.querySelector("#addNFTCard")
    const btnRemoveCard=document.querySelector("#removeNFTCard")
    
    
    if(quantity>=10){
        btnAddCard.setAttribute("disabled","")
    }else{
        if(quantity<=0){
            btnRemoveCard.setAttribute("disabled","")
        }else{
            btnAddCard.removeAttribute("disabled")
            btnRemoveCard.removeAttribute("disabled","true")
        }

    }
}