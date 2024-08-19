# DevGpt Studio

[![PyPI version](https://badge.fury.io/py/pydevgptstudio.svg)](https://badge.fury.io/py/pydevgptstudio)
[![Downloads](https://static.pepy.tech/badge/devgptstudio/week)](https://pepy.tech/project/devgptstudio)

![ARA](./docs/ara_stockprices.png)

DevGpt Studio is an DevGpt-powered AI app (user interface) to help you rapidly prototype AI agents, enhance them with skills, compose them into workflows and interact with them to accomplish tasks. It is built on top of the [DevGpt](https://khulnasoft.github.io/devgpt) framework, which is a toolkit for building AI agents.

Code for DevGpt Studio is on GitHub at [khulnasoft/devgpt](https://github.com/khulnasoft/devgpt/tree/main/samples/apps/devgpt-studio)

> **Note**: DevGpt Studio is meant to help you rapidly prototype multi-agent workflows and demonstrate an example of end user interfaces built with DevGpt. It is not meant to be a production-ready app.

> [!WARNING]
> DevGpt Studio is currently under active development and we are iterating quickly. Kindly consider that we may introduce breaking changes in the releases during the upcoming weeks, and also the `README` might be outdated. Please see the DevGpt Studio [docs](https://khulnasoft.github.io/devgpt/docs/devgpt-studio/getting-started) page for the most up-to-date information.

**Updates**

> April 17: DevGpt Studio database layer is now rewritten to use [SQLModel](https://sqlmodel.tiangolo.com/) (Pydantic + SQLAlchemy). This provides entity linking (skills, models, agents and workflows are linked via association tables) and supports multiple [database backend dialects](https://docs.sqlalchemy.org/en/20/dialects/) supported in SQLAlchemy (SQLite, PostgreSQL, MySQL, Oracle, Khulnasoft SQL Server). The backend database can be specified a `--database-uri` argument when running the application. For example, `devgptstudio ui --database-uri sqlite:///database.sqlite` for SQLite and `devgptstudio ui --database-uri postgresql+psycopg://user:password@localhost/dbname` for PostgreSQL.

> March 12: Default directory for DevGpt Studio is now /home/<user>/.devgptstudio. You can also specify this directory using the `--appdir` argument when running the application. For example, `devgptstudio ui --appdir /path/to/folder`. This will store the database and other files in the specified directory e.g. `/path/to/folder/database.sqlite`. `.env` files in that directory will be used to set environment variables for the app.

Project Structure:

- _devgptstudio/_ code for the backend classes and web api (FastAPI)
- _frontend/_ code for the webui, built with Gatsby and TailwindCSS

### Installation

There are two ways to install DevGpt Studio - from PyPi or from source. We **recommend installing from PyPi** unless you plan to modify the source code.

1.  **Install from PyPi**

    We recommend using a virtual environment (e.g., conda) to avoid conflicts with existing Python packages. With Python 3.10 or newer active in your virtual environment, use pip to install DevGpt Studio:

    ```bash
    pip install pydevgptstudio
    ```

2.  **Install from Source**

    > Note: This approach requires some familiarity with building interfaces in React.

    If you prefer to install from source, ensure you have Python 3.10+ and Node.js (version above 14.15.0) installed. Here's how you get started:

    - Clone the DevGpt Studio repository and install its Python dependencies:

      ```bash
      pip install -e .
      ```

    - Navigate to the `samples/apps/devgpt-studio/frontend` directory, install dependencies, and build the UI:

      ```bash
      npm install -g gatsby-cli
      npm install --global yarn
      cd frontend
      yarn install
      yarn build
      ```

For Windows users, to build the frontend, you may need alternative commands to build the frontend.

```bash

  gatsby clean && rmdir /s /q ..\\devgptstudio\\web\\ui 2>nul & (set \"PREFIX_PATH_VALUE=\" || ver>nul) && gatsby build --prefix-paths && xcopy /E /I /Y public ..\\devgptstudio\\web\\ui

```

### Running the Application

Once installed, run the web UI by entering the following in your terminal:

```bash
devgptstudio ui --port 8081
```

This will start the application on the specified port. Open your web browser and go to `http://localhost:8081/` to begin using DevGpt Studio.

DevGpt Studio also takes several parameters to customize the application:

- `--host <host>` argument to specify the host address. By default, it is set to `localhost`. Y
- `--appdir <appdir>` argument to specify the directory where the app files (e.g., database and generated user files) are stored. By default, it is set to the a `.devgptstudio` directory in the user's home directory.
- `--port <port>` argument to specify the port number. By default, it is set to `8080`.
- `--reload` argument to enable auto-reloading of the server when changes are made to the code. By default, it is set to `False`.
- `--database-uri` argument to specify the database URI. Example values include `sqlite:///database.sqlite` for SQLite and `postgresql+psycopg://user:password@localhost/dbname` for PostgreSQL. If this is not specified, the database URIL defaults to a `database.sqlite` file in the `--appdir` directory.

Now that you have DevGpt Studio installed and running, you are ready to explore its capabilities, including defining and modifying agent workflows, interacting with agents and sessions, and expanding agent skills.

## Contribution Guide

We welcome contributions to DevGpt Studio. We recommend the following general steps to contribute to the project:

- Review the overall DevGpt project [contribution guide](https://github.com/khulnasoft/devgpt?tab=readme-ov-file#contributing)
- Please review the DevGpt Studio [roadmap](https://github.com/khulnasoft/devgpt/issues/737) to get a sense of the current priorities for the project. Help is appreciated especially with Studio issues tagged with `help-wanted`
- Please initiate a discussion on the roadmap issue or a new issue to discuss your proposed contribution.
- Please review the devgptstudio dev branch here [dev branch](https://github.com/khulnasoft/devgpt/tree/devgptstudio) and use as a base for your contribution. This way, your contribution will be aligned with the latest changes in the DevGpt Studio project.
- Submit a pull request with your contribution!
- If you are modifying DevGpt Studio, it has its own devcontainer. See instructions in `.devcontainer/README.md` to use it
- Please use the tag `studio` for any issues, questions, and PRs related to Studio

## FAQ

Please refer to the DevGpt Studio [FAQs](https://khulnasoft.github.io/devgpt/docs/devgpt-studio/faqs) page for more information.

## Acknowledgements

DevGpt Studio is Based on the [DevGpt](https://khulnasoft.github.io/devgpt) project. It was adapted from a research prototype built in October 2023 (original credits: Gagan Bansal, Adam Fourney, Victor Dibia, Piali Choudhury, Saleema Amershi, Ahmed Awadallah, Chi Wang).
