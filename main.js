var str =  'return _.snakeCase(s)';
var f = new Function('s', str);

var foobar = f('Foo Bar');

//WScript.Echo(f.toString());

//WScript.Echo(foobar);

//var doc = jsyaml.load('greeting: hello\nname: world');

var doc = {
    "name":"Topology1",
    "description":"This is a topology",
    "environment":"os-single-controller-n-compute",
    "secret_file":"data_bags/example_data_bag_secret",
    "run_sequentially":false,
    "concurrency":10,
    "nodes": [
        {
            "name": "controller",
            "description": "This is the controller node",
            "fqdn":"controllername.company.com",
            "password":"passw0rd",
            "run_order_number":1,
            "quit_on_error":true,
            "chef_client_options": [
                "-i 3600",
                "-s 600"
            ],
            "runlist": [
                "role[ibm-os-single-controller-node]"
            ]
        },
        {
            "name": "KVM qemu compute",
            "description": "This is a KVM qemu compute node",
            "fqdn":"computename.company.com",
            "user":"admin",
            "identity_file":"/root/identity.pem",
            "run_order_number":2,
            "allow_update": false,
            "runlist": [
                "role[ibm-os-compute-node-kvm]"
            ],
            "attributes":"{\"openstack\":{\"compute\":{\"libvirt\":{\"virt_type\":\"qemu\"}}}}"
        }
    ]
}

//WScript.Echo(JSON.stringify(doc, undefined, 2));

var yamlOptions = {sortKeys:false};
var yaml = jsyaml.safeDump(doc, yamlOptions);
WScript.Echo(yaml);

doc = jsyaml.safeLoad(yaml);

var json = JSON5.stringify(doc, undefined, 2);

doc = JSON5.parse(json);
json = JSON5.stringify(doc, undefined, 4);
WScript.Echo(json);

// name: Topology1
// description: This is a topology
// environment: os-single-controller-n-compute
// secret_file: data_bags/example_data_bag_secret
// run_sequentially: false
// concurrency: 10
// nodes:
//   - name: controller
//     description: This is the controller node
//     fqdn: controllername.company.com
//     password: passw0rd
//     run_order_number: 1
//     quit_on_error: true
//     chef_client_options:
//       - -i 3600
//       - -s 600
//     runlist:
//       - 'role[ibm-os-single-controller-node]'
//   - name: KVM qemu compute
//     description: This is a KVM qemu compute node
//     fqdn: computename.company.com
//     user: admin
//     identity_file: /root/identity.pem
//     run_order_number: 2
//     allow_update: false
//     runlist:
//       - 'role[ibm-os-compute-node-kvm]'
//     attributes: '{"openstack":{"compute":{"libvirt":{"virt_type":"qemu"}}}}'


//{
//    "name": "Topology1",
//    "description": "This is a topology",
//    "environment": "os-single-controller-n-compute",
//    "secret_file": "data_bags/example_data_bag_secret",
//    "run_sequentially": false,
//    "concurrency": 10,
//    "nodes": [
//        {
//            "name": "controller",
//            "description": "This is the controller node",
//            "fqdn": "controllername.company.com",
//            "password": "passw0rd",
//            "run_order_number": 1,
//            "quit_on_error": true,
//            "chef_client_options": [
//                "-i 3600",
//                "-s 600"
//            ],
//            "runlist": [
//                "role[ibm-os-single-controller-node]"
//            ]
//        },
//        {
//            "name": "KVM qemu compute",
//            "description": "This is a KVM qemu compute node",
//            "fqdn": "computename.company.com",
//            "user": "admin",
//            "identity_file": "/root/identity.pem",
//            "run_order_number": 2,
//            "allow_update": false,
//            "runlist": [
//                "role[ibm-os-compute-node-kvm]"
//            ],
//            "attributes": "{\"openstack\":{\"compute\":{\"libvirt\":{\"virt_type\":\"qemu\"}}}}"
//        }
//    ]
//}

//var foo = {
//  name: "Topology1",
//  description: "This is a topology",
//  environment: "os-single-controller-n-compute",
//  secret_file: "data_bags/example_data_bag_secret",
//  run_sequentially: false,
//  concurrency: 10,
//  nodes: [
//    {
//      name: "controller",
//      description: "This is the controller node",
//      fqdn: "controllername.company.com",
//      password: "passw0rd",
//      run_order_number: 1,
//      quit_on_error: true,
//      chef_client_options: [
//        "-i 3600",
//        "-s 600",
//      ],
//      runlist: [
//        "role[ibm-os-single-controller-node]",
//      ],
//    },
//    {
//      name: "KVM qemu compute",
//      description: "This is a KVM qemu compute node",
//      fqdn: "computename.company.com",
//      user: "admin",
//      identity_file: "/root/identity.pem",
//      run_order_number: 2,
//      allow_update: false,
//      runlist: [
//        "role[ibm-os-compute-node-kvm]",
//      ],
//      attributes: "{\"openstack\":{\"compute\":{\"libvirt\":{\"virt_type\":\"qemu\"}}}}",
//    },
//  ],
//}
