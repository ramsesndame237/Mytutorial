class Avatar extends  HTMLElement{
    constructor() {
        super();
    }
    connectedCallback(){
        const shadow = this.attachShadow({mode:'open'})
        const avatarWrapper = document.createElement('div')
        avatarWrapper.setAttribute('class','avatarContainer')
        const imgProfile=document.createElement('span')
        imgProfile.setAttribute('class','profileImage')
        avatarWrapper.appendChild(imgProfile)


        const src = this.getAttribute('src')
        const name = this.getAttribute('name')
        if(src !==null){
            const img = document.createElement("img")
            img.src = src
            img.alt = name
            imgProfile.appendChild(img)
        }else{
            imgProfile.textContent = name.slice(0,2)
        }

        const style=document.createElement('style')
        style.textContent = `
                .avatarContainer{
                    width:45px;
                    height:45px;
                    border-radius:50%;
                    border:solid 1px;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                }
        `

        shadow.appendChild(avatarWrapper)
        shadow.appendChild(style)
    }
    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }

    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed.`);
    }
}

export default Avatar