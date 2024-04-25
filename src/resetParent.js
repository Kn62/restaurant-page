const resetParent = (parent) => {
    while (parent.children.length > 0) {
    console.log(parent.children.length)
        const remove = parent.firstChild;
        parent.removeChild(remove);
    console.log(parent.children.length)
    }
}

export default resetParent;