# Button Component guide

This is a component to create new default button for the landingpage

## Params

The parameters that component accepts are:

- text		| String	- This is the text to be shown into the button, this is a REQUIRED parameter
- height	| String	- The height property to the button, If not provided it will assume 32px by default
- width		| String	- The width property to the button, If not provided it will assume 80px by default
- radius	| String	- The border radius property to the button, If not provided it will assume 30px by default
- isClicked	| Boolean	- This is to inform if the button should use a diferent style(Violet) and be marked as a clicked button, If not provided it will asume false by default
- action	| React.MouseEvent<HTMLButtonElement> - This is the function name to be called when onClick in the button happens

## Colors

- The button uses the background by default the primary color: --color-primary-cyan
- For the hover the button uses the primary color hover: --color-primary-cyan-hover
- When isClicked is true the background color changes to the neutral color: --color-neutral-cery-dark-violet

### Examples

- All parameters informed:
<Button
	text="MY_BUTTON"
 	height="50px"
 	width ="80px"
 	radius="10px"
	isClicked=false
	action={functionName}
/>

- You can also pass different measures such as rem or em:
<Button
	text="MY_BUTTON"
 	height="2rem"
 	width ="8rem"
	isClicked=false
	action={functionName}
/>

- Also you can pass %:
<Button
	text="MY_BUTTON"
	width="100%"
/>

- You can create a simple button passing only the required parameter:
<Button text="MY_BUTTON" />