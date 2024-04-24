import elementFactory from "../elementFactory";
import appendElementToParent from "../appendElementToParent";

const displayHomeContent = () => {
    const contentContainer = document.querySelector("#content")
    const restaurantName = elementFactory("div", "Jhon Doe Restaurant", "restaurant-name");
    const restaurantFeedback = elementFactory("div", "Jhon Doe's has the best foods! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that you would like to return to again and again.", "restaurant-feedback");
    const restaurantHours = elementFactory("div", "Hours: <br><br>", "restaurant-hours");
    const ulHours = elementFactory ("ul", "", "");
    const fifthLi = document.createElement("li");
    fifthLi.innerText = "Sunday: 8am - 8pm";
    // const firstLi = elementFactory ("li", "Sunday: 8am - 8pm", "");
    // const secondLi = elementFactory ("li", "&emsp;&emsp;&emsp;&emsp;&emsp;Monday: 6am - 6pm", "");
    // const thirdLi = elementFactory ("li", "&emsp;&emsp;&emsp;&emsp;&emsp;Tueasday: 6am - 6pm", "");
    // const fourthLi = elementFactory ("li", "&emsp;&emsp;&emsp;&emsp;&emsp;Wednesday: 6am - 6pm", "");
    // const fifthLi = elementFactory ("li", "&emsp;&emsp;&emsp;&emsp;&emsp;Thursday: 6am - 10pm", "");
    // const sixthLi = elementFactory ("li", "&emsp;&emsp;&emsp;&emsp;&emsp;Friday: 6am - 10pm", "");
    // const seventhLi = elementFactory ("li", "&emsp;&emsp;&emsp;&emsp;&emsp;Saturday: 8am - 10pm", "");
    const restaurantLocation = elementFactory("div", "Location: 123 Jhon Doe's road, JhonDoeville", "restaurant-location");

    contentContainer.appendChild(restaurantName.el);
    contentContainer.appendChild(restaurantFeedback.el);
    contentContainer.appendChild(ulHours.el)
    ulHours.appendChild(firstLi)
    console.log(firstLi)
    contentContainer.appendChild(restaurantLocation.el)

    
    

    // appendElementToParent(secondLi, ulHours);
    // appendElementToParent(thirdLi, ulHours);
    // appendElementToParent(fourthLi, ulHours);
    // appendElementToParent(fifthLi, ulHours);
    // appendElementToParent(sixthLi, ulHours);
    // appendElementToParent(seventhLi, ulHours);

    // ulHours.appendChild(firstLi);
    // ulHours.appendChild(secondLi);
    // ulHours.appendChild(thirdLi);
    // ulHours.appendChild(fourthLi);
    // ulHours.appendChild(fifthLi);
    // ulHours.appendChild(sixthLi);
    // ulHours.appendChild(seventhLi);
    // restaurantHours.appendChild(ulHours);
    // contentContainer.appendChild(restaurantHours);
    // contentContainer.appendChild(restaurantLocation);
}

export default displayHomeContent;