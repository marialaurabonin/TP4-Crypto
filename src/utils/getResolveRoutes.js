const resolveRoutes = (route) => {

    if (route) {
        let validRoute = route === '/' ? route : null;
        return validRoute;
    }

    return `/${route}`;
};

export default resolveRoutes;