import React from 'react'
import classes from './MenuToggle.module.css'
import cn from 'classnames';
import PropTypes from "prop-types";

const propTypes = {
    isOpen: PropTypes.bool.isRequired
}

const MenuToggle = props => {

    const {isOpen, onToggle} = props;

    const cls = cn(
        classes.MenuToggle, 'fa', 'fa-bars', {
            'fa-times': isOpen,
            [classes.open]: isOpen
        })

    return (
        <i
            className={cls}
            onClick={onToggle}
        />
    )
}

MenuToggle.propTypes = propTypes;

export default MenuToggle