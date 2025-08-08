interface SvgProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    className?: string;
}

// declare module '*.svg' {
//     import * as React from 'react';
//     const SvgComponent: React.FunctionComponent<
//         React.SVGProps<SVGSVGElement> & { title?: string }
//     >;
//     export default SvgComponent;
// }

declare module '*.svg?url' {
    const content: string;
    export default content;
}
