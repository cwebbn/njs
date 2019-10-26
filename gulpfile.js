const { watch } = require('gulp');
const {exec} = require('child_process');

exports.default = function() {
  watch('app/*/*.ts', { events: 'change' }, function(cb) {
    console.log("Compiling TypeScript file...");
    exec("tsc", (error, stdout, stderr)=>{
        if(error){
            console.log(error);
            cb();
        }else{
            cb();
        }
    })
    
  });
};