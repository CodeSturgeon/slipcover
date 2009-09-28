# Slipcover - Pyjamas for your Couch  
  
## Overview  
Slipcover is an exploration in the use of [Pyjamas][] with [CouchDB][]. Currently this consists of a very basic editor and view displayer.  
  
## Introductory warnings
SlipCover is in a _very_ alpha state right now. In fact, you can't even currently compile it with [Pyjamas][] without patching.
  
## Installing the easy way (vendor)
Install [Couchapp][] and set up a project. Once you are setup, install slipcover as a vendor:  
    couchapp vendor install git://github.com/CodeSturgeon/slipcover.git
That will pull the pre-compiled [Pyjamas][] app from github and install it in to your [Couchapp][] project. Once you have pushed your project, go to:  
    http://localhost:5984/my_db/_design/my_design_doc/vendor/slipcover/cbrow.html
  
[Pyjamas]: http://pyjs.org/  
[CouchDB]: http://couchdb.apache.org/  
[Couchapp]: http://github.com/couchapp/couchapp  
