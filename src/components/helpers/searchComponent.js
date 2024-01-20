class SearchComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode: "open"})
        const wrapper = document.createElement("div")
        wrapper.setAttribute("class","search")
        const icon = document.createElement("span")
        icon.setAttribute("class", "icon-search")
        const inputElement = document.createElement("input")
        const typeSearch = this.getAttribute("type")
        const iconProps = this.getAttribute("icon")

        if (typeSearch === "icon" && iconProps) {
            console.log("this is the icon of the search bar", iconProps)

            const img = document.createElement("img")
            img.src = iconProps
            icon.appendChild(img)
            const wrapperSearch = document.createElement("div")
            wrapperSearch.setAttribute("class", "wrapper-search")
            wrapperSearch.classList.add("inactive")
            wrapperSearch.appendChild(inputElement)
            wrapper.appendChild(wrapperSearch)
            icon.addEventListener("click",(e)=>{
                if(wrapperSearch.classList.contains("inactive")){
                    wrapperSearch.classList.remove("inactive")
                    wrapperSearch.classList.add("active")
                }else {
                    wrapperSearch.classList.remove("active")
                    wrapperSearch.classList.add("inactive")
                }
            })

        }

        const style = document.createElement("style")
        style.textContent = `
        .search{position:relative}
        .icon-search{
            cursor:pointer;
            height:45px;
            width:45px;
        }
        
        .inactive{display:block;translate:0px -500px}
        .active{display:inline-block;animation:5s fade ease-in-out}
        .wrapper-search{
            height:80px;
            width:25vw;
            border:solid 1px;
            position:absolute;
            background:#fff;
            left:-23.5vw;
            bottom:-8vh;
            transition: 0.5s ease-in-out;
        }
        .wrapper-search input{
            height:60px;
            padding-left:10px;
        }
        
        @keyframe fade{
        from{
        translate:-500px
        }to{
        translate:0px
        }
        }
        
        `

        shadow.appendChild(style)
        shadow.appendChild(wrapper)
        wrapper.appendChild(icon)
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

export default SearchComponent