
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