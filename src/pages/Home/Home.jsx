import React, { Component } from "react";
import axios from "axios";

// Style
import "./Home.scss";

// Components
import { Typography } from "@material-ui/core";
import Repo from "../../components/Repo/Repo";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      repos: [],
    };

    // Binds
    this.getProjects = this.getProjects.bind(this);
  }

  componentDidMount() {
    this.getProjects();
  }

  async getProjects() {
    try {
      // Query github api for public repos
      const response = await axios.get(
        `https://api.github.com/users/Lexouden/repos`
      );

      // Update state with repos
      await this.setState({
        ...this.state,
        repos: response.data,
      });
    } catch (e) {
      console.error(`Unable to request repos:\n${e}`);
    }
  }

  render() {
    return (
      <div className="Page">
        <Typography variant="h3">
          Hi, my name is Alex van den Oudenhoven
        </Typography>

        <Typography variant="h4">Projects</Typography>

        <div className="repo-container">
          {this.state.repos.map((repo) => (
            <Repo className="Repo" key={repo.node_id} data={repo} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
