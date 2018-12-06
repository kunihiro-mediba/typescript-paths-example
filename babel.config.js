module.exports = {
    presets: [
        ['@babel/preset-env', {
            loose: true,
            modules: false,
            targets: {
                chrome: 64,
            },
            useBuiltIns: false,
        }],
    ],
};
