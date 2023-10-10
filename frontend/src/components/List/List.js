import "./list.css";
const List = ({ children }) => {

    return(
        <div className={"list_cells"}>
            { children }
        </div>
    );

}

export default List;