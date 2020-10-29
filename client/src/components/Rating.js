import React from 'react';
import PropTypes from 'prop-types'

const Rating = ({value, text, color}) => {
    return (
        <div>
            {[...Array(5).keys()].map(idx => {
                    if (value >= idx + 1) {
                        return <i className="fas fa-star" style={{color}}/>
                    } else if (value >= idx + 0.5) {
                        return <i className="fas fa-star-half-alt" style={{color}}/>
                    } else {
                        return <i className="far fa-star" style={{color}}/>
                    }
                }
            )}

            <span> {text}</span>
        </div>
    );
};

Rating.defaultProps = {
    color: '#f77f00'
}

Rating.PropType = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Rating;