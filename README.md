Clone this repository and add path to the environment file in your ~/.bashrc.
Run a login shell so the environment variables are set. A good way to do it is,
to ssh to localhost.
Run `env` to check if the environment variables have been exported.

Once the environment is setup, run npm install to download all the dependencies.
Then run `node server.js` to start the nodejs service. Note the IP and port on
the console and open it in the browser to verify whether nodejs has picked up
the environment variables.
