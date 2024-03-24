
//Don't want to manually set other custom props for button, like type or onClick
//so we will spread the rest of the props in the button
export default function Button({children, textOnly, className, ...props}){
    //Is this a text button or a styled button
    let cssClasses = textOnly ? 'text-button' : 'button';
    cssClasses += ' ' + className;
    return (
        <button className={cssClasses}{...props}>
            {children}
        </button>);
}