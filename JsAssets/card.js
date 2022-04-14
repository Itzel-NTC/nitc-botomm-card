export function createCard(item){
    
    const container=document.createElement('div')
    container.className="Container"
    
    const ContainerTop=document.createElement('div')
    ContainerTop.className="Container-CardTop"
    container.appendChild(ContainerTop)
    
    const MainImage=document.createElement('img')
    MainImage.src=item.image_NFT
    MainImage.alt="NFT image"
    ContainerTop.appendChild(MainImage)
    
    const CardTop=document.createElement('div')
    CardTop.className="CardTop"
    ContainerTop.appendChild(CardTop)
    
    const ViewNFT=document.createElement('img')
    ViewNFT.src=item.ViewImage
    ViewNFT.alt="NFT image view"
    CardTop.appendChild(ViewNFT)
    
    const CardBottom=document.createElement('div')
    CardBottom.className="CardBottom"
    container.appendChild(CardBottom)
    
    const DescriptionCard=document.createElement('div')
    DescriptionCard.className="description-g"
    CardBottom.appendChild(DescriptionCard)
    
    const title=document.createElement('p')
    title.textContent=item.title
    DescriptionCard.appendChild(title)
    
    const description1 = document.createElement('p')
    description1.textContent=item.description1
    DescriptionCard.appendChild(description1)
    
    const description2 = document.createElement('p')
    description2.textContent=item.description2
    DescriptionCard.appendChild(description2)
    
    const DescripcionNFT=document.createElement('div')
    DescripcionNFT.className="description-e"
    CardBottom.appendChild(DescripcionNFT)
    
    const eth=document.createElement('div')
    eth.className="eth"
    DescripcionNFT.appendChild(eth)
    
    const ethereum_icon=document.createElement('img')
    ethereum_icon.src=item.ethereum_icon
    ethereum_icon.alt="ethereum-icon"
    eth.appendChild(ethereum_icon)
    
    const cost=document.createElement('span')
    cost.textContent=item.cost
    eth.appendChild(cost)
    
    const TimeLeft=document.createElement('div')
    TimeLeft.className="timeLeft"
    DescripcionNFT.appendChild(TimeLeft)
    
    const clock_icon=document.createElement('img')
    clock_icon.src=item.clock_icon
    clock_icon.alt="clock icon"
    TimeLeft.appendChild(clock_icon)
    
    const time=document.createElement('span')
    time.textContent=item.time
    TimeLeft.appendChild(time)
    
    const AutoNFT = document.createElement('div')
    AutoNFT.className="autor"
    CardBottom.appendChild(AutoNFT)
    
    const avatar_image=document.createElement('img')
    avatar_image.src=item.avatar_image
    avatar_image.alt="avatar image"
    AutoNFT.appendChild(avatar_image)
    
    const creation=document.createElement('p')
    creation.textContent=item.creation
    AutoNFT.appendChild(creation)
    
    const autor=document.createElement('span')
    autor.textContent=item.autor
    creation.appendChild(autor)

    return container
}