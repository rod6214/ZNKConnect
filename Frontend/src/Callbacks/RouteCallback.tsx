import React from 'react';


interface RouteConfigFunctionBase {
    (props?: any): JSX.Element[] | null;
}

export default RouteConfigFunctionBase;