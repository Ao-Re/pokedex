import Spinner from 'react-bootstrap/Spinner';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Loader = () => {
    return (
        <Jumbotron 
            className="justify-content-center align-center text-center pt-5" 
            style={{'width' : '100%', 'height' : '100vh'}}
        >
            <Spinner size="20rem" animation="grow" variant="danger" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
            <p className="text-center">Loading data</p>
        </Jumbotron>
    )
}

export default Loader;