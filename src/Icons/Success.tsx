import type { SVGProps } from 'react';


export function Component(props : SVGProps<SVGSVGElement>) : JSX.Element
{
	return (
        <svg
            {...props}
            xmlns   = {"http://www.w3.org/2000/svg"}
            width   = {"100%"}
            height  = {"100%"}
            viewBox = {"0 0 36 36"}
        >
            <path
                fill      = {"currentColor"}
                d         = {"M13.72 27.69L3.29 17.27a1 1 0 0 1 1.41-1.41l9 9L31.29 7.29A1 1 0 0 1 32.7 8.7Z"}
                className = {"clr-i-outline clr-i-outline-path-1"}
            />
            <path
                fill = {"none"}
                d    = {"M0 0h36v36H0z"}
            />
        </svg>
    );
};
