# fade-away

[![Unix Build Status](https://travis-ci.org/simongregory/fade-away.svg?branch=master)](https://travis-ci.org/simongregory/fade-away)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/simongregory/fade-away?branch=master&svg=true)](https://ci.appveyor.com/project/SimonGregory/fade-away)


Simple backoff strategies.

## Install

    yarn add fade-away
    
## Usage

    const { exponential, fibonacci } = require('fade-away');
    const ten = [0,1,2,3,4,5,6,7,8,9];
    
    ten.map(v => { return exponential(v)});    // [ 1000, 2000, 4000, 8000, 16000, 32000, 64000, 128000, 256000, 512000 ]
    ten.map(v => { return exponential(v, 1)}); // [ 1, 2, 4, 8, 16, 32, 64, 128, 256, 512 ]
      
    ten.map(v => { return fibonacci(v)});     // [ 1000, 1000, 2000, 3000, 5000, 8000, 13000, 21000, 34000, 55000 ]
    ten.map(v => { return fibonacci(v, 1)});  // [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
    