import React from "@rbxts/react";
import { Button } from "client/ui/button";

export function Buttons() {
	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			Size={new UDim2(0, 400, 0, 250)}
			BackgroundTransparency={1}
		>
			<uigridlayout CellSize={new UDim2(0, 100, 0, 100)} CellPadding={new UDim2(0, 10, 0, 10)}></uigridlayout>
			<Button
				text="Click me"
				background3={new Color3(255, 0, 0)}
				onClick={() => {
					print("Button clicked!");
				}}
				onEnter={() => {
					print("Enter");
				}}
			/>
			<Button
				text="Click me"
				background3={new Color3(0, 0, 255)}
				onClick={() => {
					print("Button clicked!");
				}}
				onEnter={() => {
					print("Enter");
				}}
			/>
			<Button
				text="Click me"
				background3={new Color3(0, 255, 0)}
				onClick={() => {
					print("Button clicked!");
				}}
				onEnter={() => {
					print("Enter");
				}}
			/>
		</frame>
	);
}
