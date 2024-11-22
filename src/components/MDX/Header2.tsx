import {ClassAttributes, HTMLAttributes} from "react";

export const Heading2 = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => {
    const idText = props.children ? (props.children as string).replace(/ /g, "_").toLowerCase() : undefined;
    return <h2 id={idText} {...props}>{props.children}</h2>;
};