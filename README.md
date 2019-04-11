# egg-csv-cli

[![Build Status](https://travis-ci.org/itenl/egg-csv-cli.svg?branch=master)](https://travis-ci.org/itenl/egg-csv-cli)
[![NPM Version](http://img.shields.io/npm/v/egg-csv-cli.svg?style=flat)](https://www.npmjs.org/package/egg-csv-cli)
[![NPM Downloads](https://img.shields.io/npm/dm/egg-csv-cli.svg?style=flat)](https://npmcharts.com/compare/egg-csv-cli?minimal=true)
[![install size](https://packagephobia.now.sh/badge?p=egg-csv-cli)](https://packagephobia.now.sh/result?p=egg-csv-cli)

## Install

```bash
$ npm i egg-csv-cli -g
```


## What egg-csv

```javascript
c => controller
s => service
v => view
```

## Usage

create a new controller
```bash
$ egg-csv g c list
or
$ egg-csv g c activity/list
```
create a new service
```bash
$ egg-csv g s list
or
$ egg-csv g s activity/list
```
create a new view
```bash
$ egg-csv g v list
or
$ egg-csv g v activity/list
```

```
The default will be created in the corresponding directory(./app/controller|service|view), if not found, the current directory
```