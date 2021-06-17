import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Ripple from '../../Animations/Ripple';
import './style.scss';

const ButtonContainer = (props) => {
	const { type = 'default', size, children } = props;

	const buttonRef = useRef(null);
	const [effects, setEffects] = useState([]);

	const onClickButton = (e) => {
		updateEffects(e);
	};

	const updateEffects = ({ pageX, pageY }) => {
		const now = Date.now();

		setEffects((prev) => {
			const activeEffects = prev.filter(({ date }) => now - date < 650);
			return [...activeEffects, { date: now, pageX, pageY }];
		});
	};

	return (
		<button
			ref={buttonRef}
			className={`btn btn-small btn__${type}`}
			onClick={onClickButton}
		>
			<Ripple buttonRef={buttonRef} toggle={effects} type={type}>
				<span className='btn__label'>{children}</span>
			</Ripple>
		</button>
	);
};

ButtonContainer.prototype = {
	type: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger', 'dark']),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default ButtonContainer;
