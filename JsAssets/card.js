export function createCard(item){

const card = document.createElement(`div`)
card.className="card"
// app.appendChild(Card)
 // console.log(Card)

const CardTop = document.createElement(`div`)
CardTop.className="card-top"
card.appendChild(CardTop)
 // console.log(CardTop)

const imageclass = document.createElement(`div`)
imageclass.className="image"
CardTop.appendChild(imageclass)

const imagen = document.createElement(`img`)
imagen.src=`./assets/image-equilibrium.jpg`
imageclass.appendChild(imagen)


const app = document.querySelector(`#app`)
app.appendChild(card)



const iconclass = document.createElement(`div`)
iconclass.className="icon"
imageclass.appendChild(iconclass)

const imaicon = document.createElement(`img`)
imaicon.src=`./assets/icon-view.svg`
iconclass.appendChild(imaicon)

const cardbot = document.createElement(`div`)
cardbot.className="card-bottom"
card.appendChild(cardbot)

const cardbotcon = document.createElement(`div`)
cardbotcon.className="card-bottom-contexto"
cardbot.appendChild(cardbotcon)

 const equilibr = document.createElement(`p`)
 equilibr.textContent=item.equilibr
 cardbotcon.appendChild(equilibr)

 const our = document.createElement(`p`)
 our.textContent=item.our
cardbotcon.appendChild(our)

 const balance = document.createElement(`p`)
 balance.textContent=item.balance
cardbotcon.appendChild(balance)

const cardbotin = document.createElement(`div`)
cardbotin.className="card-bottom-info"
cardbot.appendChild(cardbotin)

const ether = document.createElement(`div`)
ether.className="ether-card"
cardbotin.appendChild(ether)

const etheric = document.createElement(`img`)
etheric.src=`./assets/icon-ethereum.svg`
ether.appendChild(etheric)

const et = document.createElement(`span`)
et.textContent=item.et
ether.appendChild(et)

const clock = document.createElement(`div`)
clock.className="clock-card"
cardbotin.appendChild(clock)

const imclock = document.createElement(`img`)
imclock.src=`./assets/icon-clock.svg`
imclock.alt=`clock image`
clock.appendChild(imclock)

const days = document.createElement(`span`)
 days.textContent=item.days
 clock.appendChild(days)

 const creation = document.createElement(`div`)
 creation.className="card-bottom-creation"
 cardbot.appendChild(creation)
 
 const avatar = document.createElement(`img`)
avatar.src=`./assets/image-avatar.png`
avatar.alt=`avatar image`
creation.appendChild(avatar)

const crea = document.createElement(`p`)
crea.textContent=item.crea
 creation.appendChild(crea)

const jule = document.createElement(`span`)
jule.textContent=item.jule
creation.appendChild(jule)


 return card
}