
## Install

```bash
$ npm i egg-csv-cli -g
```


## What csv

```javascript
c => controller
s => service
v => view
```

## Usage

create a new controller
```bash
$ csv g c list
or
$ csv g c activity/list
```
create a new service
```bash
$ csv g s list
or
$ csv g s activity/list
```
create a new view
```bash
$ csv g v list
or
$ csv g v activity/list
```

```
The default will be created in the corresponding directory(./app/controller|service|view), if not found, the current directory
```