import { Link } from 'react-router-dom';

export default function Topo (props) {

    return (
        <div className="topo">
            <Link to={"/"}>
            <h1>CINEFLEX</h1>
            </Link>
        </div>
    )
}