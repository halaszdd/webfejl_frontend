import PropTypes  from "prop-types"

const Button = ({color, Text, onClick}) => {
    return (
        <button 
        onClick = {onClick}
        style={{backgroundColor: color}} className='btn'>{Text}</button>
    )   
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    Text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button
