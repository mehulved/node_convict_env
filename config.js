var convict = require("convict");

//define a schema

var conf = convict({
    env: {
        doc: "The application environment",
        format: ["production", "test", "development"],
        default: "development",
        env: "NODE_ENV"
    },
    queue_ip: {
        doc: "IP Address of Task Queue",
        format: "ipaddress",
        default: "127.0.0.1",
        env: "QUEUE_IP"
    },
    queue_port: {
        doc: "Port of Task Queue",
        format: "port",
        default: "11300",
        env: "QUEUE_PORT"
    },
    queue_prefix: {
        doc: "Prefix for the queues",
        format: String,
        default: "",
        env: "QUEUE_PREFIX"
    },
    ip: {
        doc: "IP Address for the nodejs service",
        format: "ipaddress",
        default: "127.0.0.1",
        env: "NODE_IP"
    },
    port: {
        doc: "Port for the nodejs service",
        format: "port",
        default: "10000",
        env: "NODE_PORT"
    }
});

var env = conf.get('env');
conf.validate();

module.exports = conf;
