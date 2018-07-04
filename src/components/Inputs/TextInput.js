/* eslint react/prop-types: 0 */
import React from 'react';
import { Input } from 'semantic-ui-react'

/**
 * TEXT INPUT COMPONENT
 *
 * Takes Props ->
 * 1. label
 * 2. title
 * 3. disabled
 * 4. type
 * 5. onChange
 * 6. placeholder
 * 7. value
 * 8. required
 * 9. autoFocus
 * 10. maxLength
 * 11. onClick
 * 12. id
 * 13. errors
 * 14. smallmsg
 * 15. name
 * 16. disabled
 *
 */

const TextInput = (props) => (
	<div className="text-input-container">
		<label
			htmlFor={props.name}
			className={props.labelClass}
		>{props.label} {props.required && <span className="required-field-star">*</span>}</label>
		<div className="text-input">
			<Input
				type={props.type}
				name={props.name}
				className={props.className}
				onChange={props.onChange}
				placeholder={props.placeholder}
				value={props.value}
				autoFocus={(props.errors[props.name] && props.errors[props.name].focused) || props.autoFocus}
				disabled={props.disabled}
				title={props.title}
				maxLength={props.maxLength}
				onClick={props.onClick}
				id={props.id}
			/>
			{props.errors[props.name] &&
				<span className="help-block m-b-none">{props.errors[props.name].message}</span>
			}
			{props.smallmsg &&
				<em className="form-text text-muted">{props.smallmsg}</em>}
		</div>
	</div>
);

export default TextInput;
