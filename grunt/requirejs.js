/**
 * Created By: btilford
 * Date: 3/20/18 11:20 AM
 */
// // 
// 
'use strict';

module.exports = {
    project2: {
        options: {
            baseUrl: 'lib/',
            findNestedDependencies: true,
            out: 'dist/downstream-amd-project.js',
            optimize: 'none',
            paths: {
                '@example/upstream-es6-project' : '../dist/@example/upstream-es6-project'
            },
            name: 'downstream-amd-project',
            preserveLicenseComments: false,
            useStrict: true,
            wrap: true
        }
    }
};