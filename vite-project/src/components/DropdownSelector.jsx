import '../styles/CoverLetterCreation.css';

export default function DropdownSelector({ allElements, setSelectedElement }) {

    // If the element has a .target property, then it is an event, we need .target.value.
    // Otherwise, the element itself is in the proper format.
    function handleClickOption(element) {
        let selectedValue;
        if (element.target) {
            selectedValue = element.target.value;
        } else {
            selectedValue = element;
        }
        setSelectedElement(selectedValue);
    }

    // If allElements isn't valid (undefined, null, or empty, display the custom message
    if (!allElements || allElements.length === 0) {
        return (
            <select>
                <option>Please add a document</option>
            </select>
        );
    } else {
        // if allElements is valid, then display every element's name in a dropdown menu, and
        // set up the onClick callback function.
        return (
            <select onChange={handleClickOption}>
                {allElements.map((element) => (
                    <option value={element.name} onClick={() => handleClickOption(element.name)}>
                        {element.name}
                    </option>
                ))}
            </select>
        );
    }
}
