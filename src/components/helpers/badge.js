class Badge extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode: "open"})
        const wrapper = document.createElement("div")
        wrapper.setAttribute("class", "badgeContainer")
        const icon = document.createElement("span")
        icon.setAttribute("class", "icon")
        const bageValue = document.createElement("span")
        bageValue.setAttribute("class", "badge")
        const displayBadgeStatus = this.getAttribute("status")
        const typeBadge = this.getAttribute("variant")
        const imgUrl = this.getAttribute("icon")
        const name = this.getAttribute("name")
        const countBadge = this.getAttribute("value")
        if (!displayBadgeStatus) {
            bageValue.textContent = countBadge ?? "0"
        } else {
            bageValue.classList.add("hide")
        }
        if (!!displayBadgeStatus && typeof typeBadge === "string" && typeBadge !== undefined) {
            bageValue.setAttribute("class", `badge_${typeBadge} `)
        }
        if (imgUrl === null && name) {
            let text = name
            icon.textContent = text.slice(0, 1)
        }
        if (imgUrl) {
            console.log("this is the icon value", imgUrl)

            const img = document.createElement("img")
            img.src = imgUrl
            img.alt = name
            icon.appendChild(img)
        }
        const defaultBadgeVariant = ["success","danger","info","warning"]
        bageValue.classList.add(defaultBadgeVariant.includes(typeBadge) ? typeBadge : typeBadge === null ? "success" : "custom-variant")



        const style = document.createElement("style")
        style.textContent = `
            .badgeContainer{
                position:relative;
            }
            .hide{
                display:none;
            }
            .icon{
                width:45px;
                height:45px;
                display:flex;
                align-items:center;
                justify-content:center;
            }
            .icon img{
                width:100%;
                height:100%;
                object-fit:contain
            }
            .success{
            background:#097D1AFF;
            }
            .danger{background:#ca001a;}
            .info{background:#31c3ef}
            .warning{background:#EF6F3CD5}
           .custom-variant{background:${typeBadge}}
            .badge{
                height:25px;
                min-width:25px;
                border-radius:50%;
                display:flex;
                align-items:center;
                justify-content:center;
                color:white;
                font-weight:500;
                max-width:80px;
                position:absolute;
                top:-2px;
                right:-2px;
            }
            
        `
        shadow.appendChild(style)
        shadow.appendChild(wrapper)
        wrapper.appendChild(icon)
        wrapper.appendChild(bageValue)
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

export default Badge