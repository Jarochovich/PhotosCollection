import classes from './Pagination.module.css';

function Pagination(props) {
    return (
      <ul className="pagination">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>
    );
}

export default Pagination;