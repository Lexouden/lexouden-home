import React, { Component } from "react";
import axios from "axios";

// Components
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Link,
} from "@material-ui/core";

// Icons
import { GitHub } from "@material-ui/icons";

// Styles
import "./Repo.scss";

class Repo extends Component {
  constructor(props) {
    super();

    this.state = {
      languages: [],
    };
  }

  componentDidMount() {
    this.getRepoLanguages();
  }

  async getRepoLanguages() {
    try {
      const response = await axios.get(`${this.props.data.languages_url}`);
      this.setState({
        ...this.state,
        languages: Object.keys(response.data),
      });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <Card className="Card">
        <CardContent>
          <div className="title">
            <GitHub />
            <Typography variant="h6">{this.props.data.name}</Typography>
          </div>

          <div className="languages">
            {this.state.languages.map((lang) => (
              <Typography className="lang" key={lang} variant="body2">
                {lang}
              </Typography>
            ))}
          </div>

          <Typography variant="caption" color="textSecondary">
            {this.props.data.description}
          </Typography>
        </CardContent>
        <CardActions className="Actions">
          <Link href={this.props.data.html_url} color="inherit">
            Learn More
          </Link>

          {this.props.data.archived ? (
            <Typography
              className="archived"
              variant="caption"
              color="textSecondary">
              Archived
            </Typography>
          ) : null}
        </CardActions>
      </Card>
    );
  }
}

export default Repo;
