import React from 'react';
import Home from './Pages/Home/home';
import Contact from './Pages/Contact/contact';
import RouteConfigFunction from './Callbacks/RouteCallback';
import { Route } from "react-router-dom";

const ROUTES = [
    {path: '/', exact: true, component: Home },
    {path: '/contact', exact: false, component: Contact }
];

const RouteConfig: any = () => {
    return ROUTES.map((route, index) => (<Route key={index} exact={route.exact} path={route.path} component={route.component}/>));
}

export default RouteConfig;