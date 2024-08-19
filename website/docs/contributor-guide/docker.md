# Docker for Development

For developers contributing to the DevGpt project, we offer a specialized Docker environment. This setup is designed to streamline the development process, ensuring that all contributors work within a consistent and well-equipped environment.

## Autogen Developer Image (devgpt_dev_img)

- **Purpose**: The `devgpt_dev_img` is tailored for contributors to the DevGpt project. It includes a suite of tools and configurations that aid in the development and testing of new features or fixes.
- **Usage**: This image is recommended for developers who intend to contribute code or documentation to DevGpt.
- **Forking the Project**: It's advisable to fork the DevGpt GitHub project to your own repository. This allows you to make changes in a separate environment without affecting the main project.
- **Updating Dockerfile**: Modify your copy of `Dockerfile` in the `dev` folder as needed for your development work.
- **Submitting Pull Requests**: Once your changes are ready, submit a pull request from your branch to the upstream DevGpt GitHub project for review and integration. For more details on contributing, see the [DevGpt Contributing](https://khulnasoft.github.io/devgpt/docs/Contribute) page.

## Building the Developer Docker Image

- To build the developer Docker image (`devgpt_dev_img`), use the following commands:

  ```bash
  docker build -f .devcontainer/dev/Dockerfile -t devgpt_dev_img https://github.com/khulnasoft/devgpt.git#main
  ```

- For building the developer image built from a specific Dockerfile in a branch other than main/master

  ```bash
  # clone the branch you want to work out of
  git clone --branch {branch-name} https://github.com/khulnasoft/devgpt.git

  # cd to your new directory
  cd devgpt

  # build your Docker image
  docker build -f .devcontainer/dev/Dockerfile -t devgpt_dev-srv_img .
  ```

## Using the Developer Docker Image

Once you have built the `devgpt_dev_img`, you can run it using the standard Docker commands. This will place you inside the containerized development environment where you can run tests, develop code, and ensure everything is functioning as expected before submitting your contributions.

```bash
docker run -it -p 8081:3000 -v `pwd`/devgpt-newcode:newstuff/ devgpt_dev_img bash
```

- Note that the `pwd` is shorthand for present working directory. Thus, any path after the pwd is relative to that. If you want a more verbose method you could remove the "`pwd`/devgpt-newcode" and replace it with the full path to your directory

```bash
docker run -it -p 8081:3000 -v /home/DevGptDeveloper/devgpt-newcode:newstuff/ devgpt_dev_img bash
```

## Develop in Remote Container

If you use vscode, you can open the devgpt folder in a [Container](https://code.visualstudio.com/docs/remote/containers).
We have provided the configuration in [devcontainer](https://github.com/khulnasoft/devgpt/blob/main/.devcontainer). They can be used in GitHub codespace too. Developing DevGpt in dev containers is recommended.
