import PropTypes  from "prop-types"
import Button from "./Button"

const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} Text={showAdd ? 'Close' : 'Add'} onClick={onAdd}></Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Webfejl 2. project',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
