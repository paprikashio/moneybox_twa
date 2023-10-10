import PropTypes from "prop-types";

const AddSquare28 = ({ color, size }) => {

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 28 28" fill="none">
            <path d="M17.924 3C19.8822 3.02068 20.8787 3.2317 21.912 3.78431C22.9011 4.31328 23.6833 5.09549 24.2123 6.08458C24.7649 7.11786 24.9759 8.11438 24.9966 10.0726V17.924C24.9759 19.8822 24.7649 20.8787 24.2123 21.912C23.6833 22.9011 22.9011 23.6833 21.912 24.2123C20.8787 24.7649 19.8822 24.9759 17.924 24.9966H10.0726C8.11438 24.9759 7.11786 24.7649 6.08458 24.2123C5.09549 23.6833 4.31328 22.9011 3.78431 21.912C3.2317 20.8787 3.02068 19.8822 3 17.924V10.0726C3.02068 8.11438 3.2317 7.11786 3.78431 6.08458C4.31328 5.09549 5.09549 4.31328 6.08458 3.78431C7.11786 3.2317 8.11438 3.02068 10.0726 3H17.924ZM17.5886 4.99829H10.408L9.85062 5.00317C8.37134 5.03122 7.70897 5.18363 7.02777 5.54793C6.38723 5.8905 5.8905 6.38723 5.54793 7.02777C5.18363 7.70897 5.03122 8.37134 5.00317 9.85062L4.99829 10.408V17.5886L5.00317 18.146C5.03122 19.6252 5.18363 20.2876 5.54793 20.9688C5.8905 21.6094 6.38723 22.1061 7.02777 22.4486C7.70897 22.813 8.37134 22.9654 9.85062 22.9934L10.408 22.9983H17.5886L18.146 22.9934C19.6252 22.9654 20.2876 22.813 20.9688 22.4486C21.6094 22.1061 22.1061 21.6094 22.4486 20.9688C22.813 20.2876 22.9654 19.6252 22.9934 18.146L22.9983 17.5886V10.408L22.9934 9.85062C22.9654 8.37134 22.813 7.70897 22.4486 7.02777C22.1061 6.38723 21.6094 5.8905 20.9688 5.54793C20.2876 5.18363 19.6252 5.03122 18.146 5.00317L17.5886 4.99829ZM14 9C14.5523 9 15 9.44772 15 10V13H18C18.5523 13 19 13.4477 19 14C19 14.5523 18.5523 15 18 15H15V18C15 18.5523 14.5523 19 14 19C13.4477 19 13 18.5523 13 18V15H10C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13H13V10C13 9.44772 13.4477 9 14 9Z" fill={color}/>
        </svg>
    );

}

AddSquare28.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number
};

AddSquare28.defaultProps = {
    color: "#000000",
    size: 28
};

export default AddSquare28;