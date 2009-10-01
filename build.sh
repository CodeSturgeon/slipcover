#!/bin/bash

BUILD='pyjsbuild -o vendor/slipcover/_attachments'
for py in *.py; do $BUILD $py; done
