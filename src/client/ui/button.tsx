import React, { Component } from "@rbxts/react";

interface ButtonInterface {
	// Properties
	text?: string;
	size?: UDim2;
	anchorPoint?: Vector2;
	position?: UDim2;

	// Appearance
	background3?: Color3;
	textColor3?: Color3;
	font?: Enum.Font;

	// Events
	onClick?: () => void;
	onEnter?: () => void;
	onLeave?: () => void;
}

export function Button(props: ButtonInterface) {
	const { onClick, onEnter, onLeave } = props;

	const events = {
		Activated: onClick && (() => onClick()),
		MouseEnter: onEnter && (() => onEnter()),
		MouseLeave: onLeave && (() => onLeave()),
	};

	return (
		<textbutton
			Text={props.text}
			Size={props.size}
			AnchorPoint={props.anchorPoint}
			Position={props.position}
			BackgroundColor3={props.background3}
			TextColor3={props.textColor3 || new Color3(255, 255, 255)}
			Font={props.font || Enum.Font.Arial}
			Event={events}
		></textbutton>
	);
}
