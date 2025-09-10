declare module '*.svg?url' {
    const content: string;
    export default content;
}

declare module '*.svg?svgo=false' {
    import * as React from 'react';
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}

