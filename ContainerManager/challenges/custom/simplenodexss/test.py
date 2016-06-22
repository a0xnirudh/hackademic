import docker
from docker import utils
from docker import errors
from docker import Client

client = Client(base_url="unix://var/run/docker.sock")
cli = client.create_container(image="nodexss",
                                           ports=[8080], host_config=utils.
                                           create_host_config
                                           (port_bindings={8080: 5555}),
                                           detach=True)
client.start(cli.get("Id"))
print "http://localhost:5555/"
