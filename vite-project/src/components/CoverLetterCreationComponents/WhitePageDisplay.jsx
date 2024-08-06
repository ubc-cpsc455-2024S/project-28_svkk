import '../../styles/CoverLetterCreation.css';

export default function WhitePageDisplay({ displayText }) {

    // Checking if the displayText is valid
    if (displayText !== undefined && displayText !== null && displayText !== "") {

        // Checking if displayText is an object
        if (displayText.content) {
            return (
                <pre>
                {displayText.content}
            </pre>
            );
        } else {
            // displayText is a large or small and displayed differently (Can be changed later)
            if (displayText.length > 200) {
                return (
                    <pre>
                        {displayText}
                    </pre>
                );
            } else {
                return (
                    <div className="group_member_div">
                        <div className="small-rounded-textbox">
                            {displayText}
                        </div>
                    </div>
                );
            }
        }
    }
    return (
        <div>

        </div>
    );
}
