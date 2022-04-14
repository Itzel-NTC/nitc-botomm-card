import { getContentCards }  from './JsAssets/content.js'
import { createCard } from './JsAssets/card.js'
import { mount }  from './JsAssets/mount.js'
import {createButton} from './JsAssets/button.js';
import { buttonDisabled } from './JsAssets/disbutton.js'

const max = 10
const state={quantity: max,}

createButton("Add Card", "addCard")
createButton("Remove Card", "removeCard")
for (var i = 0; i < state.quantity; i++) {
    createCard()
}
buttonDisabled(state.quantity)

const add=document.querySelector("#add")
add.addEventListener('click',()=>{
    createCard()
    state.quantity++
    buttonDisabled(state.quantity)
})

const remove=document.querySelector("#remove")
remove.addEventListener('click',()=>{
    const parent = document.querySelector('#app')
    parent.removeChild(parent.lastElementChild)
    state.quantity--
    disbutton(state.quantity)
})
