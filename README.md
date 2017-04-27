# fade-away

[![Build Status](https://travis-ci.org/simongregory/fade-away.svg?branch=master)](https://travis-ci.org/simongregory/fade-away)

Simple backoff strategies.

## Install

    yarn add fade-away
    
## Useage

    > const fade = require('fade-away');
    
    > [0,1,2,3,4,5,6,7,8,9].map(fade.exponential);
      [ 0, 2, 8, 24, 64, 160, 384, 896, 2048, 4608 ]
    
    > [0,1,2,3,4,5,6,7,8,9].map(fade.fibonacci);
      [ 0, 1, 4, 9, 20, 40, 78, 147, 272, 495 ]
