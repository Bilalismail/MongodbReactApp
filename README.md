# intel-proj



## Instructions
After cloning into repo, cd to project root directory and install dependencies:

```
$ npm install
```

To run dev server, install Turbo CLI globally:

```
$ sudo npm install turbo-cli -g
```

Then run devserver from project root directory:

```
$ turbo devserver
```

To build for production, run build:

```
$ npm run build
```

To Import data
change the julia file into a profiles.json file and put in the initial folder then in terminal 

```
$ mongoimport --db mongo-roj --collection profiles --files profiles.json 
```
