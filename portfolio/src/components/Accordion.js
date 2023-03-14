import {useState} from 'react';

const Accordion = () => {
    const [expand, setExpand] = useState(false);
    const toggleExpand = () => {
        setExpand((prevExpand) => !prevExpand);
        console.log({expand});
    }

    return (
        <div className="accordion">
            <button type={"button"} onClick={toggleExpand} className={`btn btn-primary + ${expand}`}>Test</button>
        </div>
    );
};
export default Accordion;