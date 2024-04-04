import type { SVGProps } from "react";


export function Component(props : SVGProps<SVGSVGElement>)
{
	return (
        <svg
            {...props}
            xmlns   = {"http://www.w3.org/2000/svg"}
            width   = {"100%"}
            height  = {"100%"}
            viewBox = {"0 0 32 32"}
        >
            <g fill={"currentColor"}>
                <path d = {"M1.5 32h14a.5.5 0 0 0 0-1h-14a.5.5 0 0 1-.5-.5v-29a.5.5 0 0 1 .5-.5h21a.5.5 0 0 1 .5.5v5a.5.5 0 0 0 1 0v-5c0-.827-.673-1.5-1.5-1.5h-21C.673 0 0 .673 0 1.5v29c0 .827.673 1.5 1.5 1.5"}/>
                <path d = {"M18 10.5v20c0 .827.673 1.5 1.5 1.5h11c.827 0 1.5-.673 1.5-1.5v-20c0-.827-.673-1.5-1.5-1.5h-11c-.827 0-1.5.673-1.5 1.5m13 0v20a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-20a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5"}/>
                <circle
                    cx = {12}
                    cy = {28}
                    r  = {1}
                />
                <circle
                    cx = {25}
                    cy = {28}
                    r  = {1}
                />
            </g>
        </svg>
    );
};
