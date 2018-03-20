## Issue

Paths are incorrect when consuming a babelified es6 (or commonjs) module with requirejs. 

**ERROR**
```
Running "browserify:standalone" (browserify) task
>> Bundle dist/@example/upstream-es6-project.js created.

Running "requirejs:project2" (requirejs) task
Error: ENOENT: no such file or directory, open '/home/btilford/work/issues/browserify-amd-issue/lib/@example/thing1.js'
In module tree:
    downstream-amd-project
      @example/upstream-es6-project

{ Error: Error: ENOENT: no such file or directory, open '/home/btilford/work/issues/browserify-amd-issue/lib/@example/thing1.js'
In module tree:
    downstream-amd-project
      @example/upstream-es6-project
```

### Expectations 

That there would be a way to consume the _(upstream)_ babelified library with the `r.js` compiler in a downstream 
project easily. Preferably in a way that eliminates unused code (something other than exporting all the public APIs in 1
file). 

For commonjs modules consumed by both browser and nodejs it would also be nice to be able to use those from nodejs 
without the need for compilation. 
 
#### For bundled files
Paths and exports would be updated to include the root context _"@example/upstream-es6-project"_. 

`thing1.js` would be exported as `@example/upstream-es6-project/lib/thing1` **not** `@example/thing1`.

#### Alternatively Babelify individual files
Not creating a bundle js file but outputting each module to it's own file in the dist directory. This would eliminate 
needing to name the AMD modules since requirejs compiler could add an entry for the root directory for this library into 
the paths option.
 
 
### Actual
 
The export file `lib/upstream-es6-project.js` imports with a relative path `./lib/thing1`, the bundle js file generated 
from this updates the import/require path to `lib/@example/thing1`.  

I think using aliases the downstream project can require/import the individual files however any imports those files 
contain fail.