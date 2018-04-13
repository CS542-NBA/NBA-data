# DataBase Management test project

This project uses original setting from ReduxSimpleStarter made by [Stephen Grider](https://github.com/StephenGrider).


In this project we intend to build both server and application in local, in the same repository.
Here we build up the server first. Steps are as follows:

1 Create a directory named "server", it you pull from github then don't need to do so.

2 Under "server", "npm init". If you have not installed npm and node, install it before "npm init".

3 Since we have to use oracle database, we need to install oracle node.js package, named oracledb. 
This step will be a little bit confusing, I will post just the Mac version and the steps I work out with
Maoyu Chien.

Go to Oracle's [page](https://github.com/oracle/node-oracledb/blob/master/INSTALL.md#instosx), follow the instruction, download oracle-instant-client, version is 12_1 since our oracle verision is older.

cd ~, mkdir lib, move the oracle-instant-client into lib. You can also execute this line which I think did not work pretty well: ln -s instantclient_12_1/libclntsh.dylib.12.1 ~/lib/

Go back to server directory, npm install oracledb oracle-client, right now you should see these two packages in your node_module.

4 npm install --save nodemon.


5 sudo npm install -g create-react-app

6 Under "server", "create-react-app client", "npm install --save concurrently"

7 modify package.json file about "engines" and "script" as my file, then "npm run dev" can run the server and application the same time at the same terminal


# ISSUE
I found that if I opened up the server to listen to port:5000, then I cannot terminate the process simply by ctrl+C. I've looked up some posts having the same issues but they are all windows. The workaround is


"lsof -i:5000" find out the pid

"kill -9 PID" then kill the process. Now you can restart the server.