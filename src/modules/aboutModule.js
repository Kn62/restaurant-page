import elementFactory from "../elementFactory";

const displayAboutContent = () => {
    const contentContainer = document.querySelector("#content");
    const aboutName = elementFactory("div", "Contact Us", "about-name");
    const contactContainer = elementFactory("div", "Jhon Doe:", "contact-container");
    const numContact = elementFactory("div", "Call me: 555-555-5554", "");
    const emailContact = elementFactory("div", "JhonDoe123@Test.com", "");

    contentContainer.appendChild(aboutName.el);
    contentContainer.appendChild(contactContainer.el);
    contactContainer.el.appendChild(numContact.el);
    contactContainer.el.appendChild(emailContact.el);
}

export default displayAboutContent;