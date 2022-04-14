import { getContentCards }  from './JsAssets/content.js'
import { createCard } from './JsAssets/card.js'
import { mount }  from './JsAssets/mount.js'
import {createButton} from './JsAssets/button.js'
import { buttonDisabled } from './JsAssets/disbutton.js'

const maxCards = 1
const state={
    quantity: maxCards,
}

createButton("Add NFT", "addNFTCard")
createButton("Remove NFT", "removeNFTCard")

const contentCard = getContentCards()

contentCard.forEach(item => { 
    const card = createCard(item)
    mount(card)
});
buttonDisabled(state.quantity)

const addCard=document.querySelector("#addNFTCard")
addCard.addEventListener('click',()=>{
    const card = createCard(contentCard[0])
    mount(card)
    state.quantity++
    buttonDisabled(state.quantity)
})
const removeCard=document.querySelector("#removeNFTCard")
removeCard.addEventListener('click',()=>{
    const parent = document.querySelector('#app')
    parent.removeChild(parent.lastElementChild)
    state.quantity--
    buttonDisabled(state.quantity)
})