import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>Sorry!</h2>
      <p>This page cannot be found - 404</p>
      <Link to='/'>Back</Link>
    </div>
  );
}

export default NotFound;