import { useParams} from "react-router";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Portfolio = () => {
    let { id } = useParams();
    return (
        <div>
            Portfolio component
            <p>Topic: {id}</p>
        </div>
    );
};

export default Portfolio