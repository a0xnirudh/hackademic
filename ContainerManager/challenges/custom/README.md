Adding custom challenges
========================

Till now, ContainerManager supports only challenges based on the standard Dockerfile but from now on, you can upload your own Dockerfiles to have more control over the challenges you create. Here are the steps to create a custom challenge:

1. Create a new folder with the `challenge_name` (without spaces please!). For example take a look at `samplechallenge`.

2. Put all the necessary challenge files inside the newly created folder along with the Dockerfile that is used to build the image. You can take a look at the `Dockerfile` inside samplechallenge for example.

3. When students click on challenge, pass the string in the following format to `container_daemon.py`: `create_container:challenge_name:custom`. The custom flag indicates that the challenge has a DOckerfile and an image should be built from the existing `hackademic` base image.

4. It is strongly recommeded to use `hackademic` docker image (created during the installation) as the base image in Dockerfile.

If you come across any bugs/issues while doing this, please open a ticket !
