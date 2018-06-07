Doco at: 
1) https://github.com/angular/angular-cli/wiki
2)Stories describing how to do more with the CLI : https://github.com/angular/angular-cli/wiki/stories
3) changes in Angular cli 6 https://medium.com/@beeman/how-to-do-x-in-angular-cli-v6-db7530c23066
5) Angular CLI workspace file (angular.json) schema https://github.com/angular/angular-cli/wiki/angular-workspace

6)There are several stories which will walk you through setting up additional aspects of Angular applications. at https://github.com/angular/angular-cli/wiki/stories

-------------------------------
configure the default HTTP host and port used by the development server with two command-line options :
ng serve --host 0.0.0.0 --port 4201

main commands
-----------------
ng generate
ng lint
ng build
ng serve
ng test
ng e2e 
ng doc
ng help

ng new appnamexxx --skip-install #without npm install
np new appnamexxx --dry-run #dont write files report them

ng config #Set a value in the Angular CLI configuration. ( replaces ng set/get)
ng config [key] [value] Get/set configuration values / project wise settings. [key] should be in JSON path format.
         Example: a[3].foo.bar[2].
    If only the [key] is provided it will get the value. 
    If both the [key] and [value] are provided it will set the value.

 ng g c componentname
 ng g s servicename
 ng g cl classname
 ng g d directivename
 ng g p pipename
 ng g i interface interfacename
 ng g e enumName

 ng g m moduleName --routing
 ng new appname --routing
 ng g gaurd auth #canACtivate gaurd with name auth.gaurd.ts
 ng g c modulename/componentname # to create a new component under the specified module

 ng build --help #developer build by default
 ng build #outputs to /dist folder by default refer .angular.json
 ng build --prod
 ng build --target=development --environment=dev
 ng build --target=production  --environment=prod
 ng build --dev -e=dev #similarly for prod

 #use sourcemap to draw dependency map, 
 npm install source-map-explorer --save-dev
 node_modules/.bin/source-map-explorer dist/main.bundle.js
 
evironment.prod.ts and environment.ts 
TODO: Refer comparing dev and prod build target differences (cli -m6 slide)
in prod - uglification , tree shaking, aot , extracting css to css files are done

 ng serve --help


 ng test #runs only unit tests , executed via karma , runs all *.spc.ts files
 ng test -sr or ng test -w false # to run the tests only a single time e.g on a build server
 ng test --code-coverage # ng test -cc , report is generated in /coverage folder (is configurable in the .angular.json)
 
 ng e2e #run end to end tests , using protractor,  Default config loc is protractor.conf.js. use --config to change
 ng e2e --element-explorer # or -ee flag to debug 

  





 



---------------
TO explore 
1) view-encapsulation strategy

2)free templates -google for 'angular 6 templates free'

3) https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html