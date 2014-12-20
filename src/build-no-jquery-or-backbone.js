({
    baseUrl: "../",
    name: "components/almond/almond.js",
    out: "../builds/converse.nojquery-backbone-underscore.min.js",
    include: ['main'],
    mainConfigFile: '../main.js',
    paths: {
        "converse-dependencies":    "src/deps-full",
        "jquery":                   "src/jquery-external",
        "jquery-private":           "src/jquery-private-external",
        "backbone":                 "src/backbone-external",
        "backbone-private":         "src/backbone-private-external",
    }
})
