if (process.env.NODE_ENV === 'development') {
    import(
        /* webpackChunkName: "autoreload", webpackMode: "lazy" */
        './misc/autoreload'
    ).then(({ autoreload }) => autoreload())
}