class Header{
    selectors = {
        root: '[data-js-header]',
        overlay: '[date-js-header-modal-overlay]',
        modalBtn:'[date-js-header-modal-btn]',
        list: '[data-js-header-list]',
        navButton: '[data-js-list-item]',
    }

    constructor(){
        this.rootElement = document.querySelector(this.selectors.root)
        this.listEements = this.rootElement.querySelector(this.selectors.list)
        this.navButtons = this.listEements.querySelectorAll(this.selectors.navButton)
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
        this.modalBtnElement = this.rootElement.querySelector(this.selectors.modalBtn)
        // console.log(this.navButtons);
        this.navAddLisen()
        this.modalBtnAddLisen()
    }

    navAddLisen = () => {
        this.navButtons.forEach((element, index)=>{
            element.addEventListener('click', () => {this.onNavClick(element)})
        })
    }

    onNavClick = (element) => {
        console.log(element);
        if(this.overlayElement.classList.contains('modalWindow')) {this.isModalWindow()}
        const toScrollElement = document.getElementById(element.getAttribute('data-js-list-item'));
        toScrollElement.scrollIntoView({ block: "center", behavior: "smooth" })
    }

    isModalWindow = () => {
        this.overlayElement.classList.toggle('modalWindow')
        document.querySelector('body').classList.toggle('is-lock')
    }

    modalBtnAddLisen = () =>{
        this.modalBtnElement.addEventListener('click', () => {this.isModalWindow()})
    }
}

export default Header;