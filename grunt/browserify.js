'use strict';

module.exports = {
    options: {},
    upstreamProject: {
        options: {
            debug: true,
            browserifyOptions: {
                debug: true
            },
            alias: {
                '@example/upstream-es6-project/thing1' : './lib/thing1.js',
                '@example/upstream-es6-project/thing2' : './lib/thing2.js'
            },
            transform: [
                'decomponentify',
                [
                    "babelify",
                    {
                        presets: [
                            [
                                'env',
                                {
                                    targets: {
                                        browsers: [
                                            'last 2 versions',
                                            'ie >= 10'
                                        ]
                                    }
                                }
                            ]
                        ],
                        plugins: [
                            'babel-plugin-transform-es2015-modules-amd',
                        ]
                    }
                ]
            ]
        },
        files: {
            'dist/@example/upstream-es6-project.js': ['lib/upstream-es6-project.js']
        }
    }
};
