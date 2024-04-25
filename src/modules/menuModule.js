import elementFactory from "../elementFactory";
// import drinkOneImageSrc from "../images/DrinkOne.jpg";

const displayMenuContent = () => {
    const contentContainer = document.querySelector("#content");

    const menuName = elementFactory("div", "Menu", "menu-name");

    const menuDrink = elementFactory("div", "Drink", "menu-drink-container");
    const drinkOne = elementFactory("div", "Ice Tea $2:", "drink-one");
    const drinkOneImage = elementFactory("div", "", "drink-one-img-container")
    const drinkTwo = elementFactory("div", "Cola $2:", "drink-two");
    const drinkTwoImage = elementFactory("img", "", "drink-two-img-container");
    const drinkThree = elementFactory("div", "Water $1:", "drink-three");
    const drinkThreeImage = elementFactory("img", "", "drink-three-img-container");

    const menuEat = elementFactory("div", "Dishes", "menu-eat-container");
    const dishesOne = elementFactory("div", "Salmon Steak with Rice $20", "dishes-one");
    const dishesOneImage = elementFactory("img", "", "dishes-img-one");
    const dishesOneText = elementFactory("p", "This recipe is inspired by the Anglicised Spaghetti Carbonara Recipe from Great British Chefs. It’s a simple yet delicious version of the classic Italian dish with a British twist. Enjoy!", "dishes-one-text");
    const dishesTwo = elementFactory("div", "Spaghetti Carbonara $20", "dishes-two");
    const dishesTwoImage = elementFactory("img", "", "dishes-img-two");
    const dishesTwoText = elementFactory("p", ". This recipe never fails to be a hit, whether we broil the salmon in the oven or grill it outdoors. Pair it with some homemade teriyaki fried rice to complete your meal.", "dishes-two-text");

    contentContainer.appendChild(menuName.el);

    contentContainer.appendChild(menuDrink.el);
    menuDrink.el.appendChild(drinkOne.el);
    drinkOne.el.appendChild(drinkOneImage.el);
    menuDrink.el.appendChild(drinkTwo.el);
    drinkTwo.el.appendChild(drinkTwoImage.el);
    menuDrink.el.appendChild(drinkThree.el);
    drinkThree.el.appendChild(drinkThreeImage.el);

    contentContainer.appendChild(menuEat.el);
    menuEat.el.appendChild(dishesOne.el);
    dishesOne.el.appendChild(dishesOneImage.el);
    dishesOne.el.appendChild(dishesOneText.el);
    menuEat.el.appendChild(dishesTwo.el);
    dishesTwo.el.appendChild(dishesTwoImage.el);
    dishesTwo.el.appendChild(dishesTwoText.el);
}

export default displayMenuContent;