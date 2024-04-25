import elementFactory from "../elementFactory";

const displayHomeContent = () => {
    const contentContainer = document.querySelector("#content");

    const restaurantName = elementFactory("div", "Jhon Doe Restaurant", "restaurant-name");
    const restaurantFeedback = elementFactory("div", "Jhon Doe's has the best foods! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that you would like to return to again and again.", "restaurant-feedback");
    const restaurantHours = elementFactory("div", "Hours:", "restaurant-hours");
    const sundayHours = elementFactory("div", "Sunday: 8am - 8pm", "");
    const mondayHours = elementFactory("div", "Monday: 6am - 6pm", "");
    const tuesdayHours = elementFactory("div", "Tuesday: 8am - 8pm", "");
    const wednesdayHours = elementFactory("div", "Wednesday: 8am - 8pm", "");
    const thursdayHours = elementFactory("div", "Thursday: 8am - 8pm", "");
    const fridayHours = elementFactory("div", "Friday: 8am - 8pm", "");
    const saturdayHours = elementFactory("div", "Saturday: 8am - 8pm", "");
    const restaurantLocation = elementFactory("div", "Location: 123 Jhon Doe's road, JhonDoeville", "restaurant-location");

    contentContainer.appendChild(restaurantName.el);
    contentContainer.appendChild(restaurantFeedback.el);
    contentContainer.appendChild(restaurantHours.el);
    contentContainer.appendChild(restaurantLocation.el);
    restaurantHours.el.appendChild(sundayHours.el)
    restaurantHours.el.appendChild(mondayHours.el)
    restaurantHours.el.appendChild(tuesdayHours.el)
    restaurantHours.el.appendChild(wednesdayHours.el)
    restaurantHours.el.appendChild(thursdayHours.el)
    restaurantHours.el.appendChild(fridayHours.el)
    restaurantHours.el.appendChild(saturdayHours.el)
}

export default displayHomeContent;