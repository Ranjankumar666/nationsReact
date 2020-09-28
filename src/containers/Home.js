import React, { Component } from "react";
import Card from "../components/card/Card";
import axios from "axios";
import Container from "../components/container/container";
import Nav from "../components/nav/nav";
import Search from "../components/search/searchAndFilter";
import {withRouter} from "react-router-dom";
import { fetchApi } from "../store/action";
import { connect } from "react-redux";
import Spinner from "../components/UI/spinner/spinner";
import withError from "../hoc/withError";

const CancelToken = axios.CancelToken;
let cancel;

class Home extends Component {
  state = {
    nations: [],
    isLoading: true,
    query: "",
    showOptions: false,
  };
  async componentDidMount() {
    this._isMounted = true;
    const region = this.props.region;
    await this.props.fetchNames();

    let data;
    try {
      if (region !== "/all") {
        data = await axios.get(`/region/${region}`, {
          cancelToken: new CancelToken(function executor(c) {
            cancel = c;
          }),
        });
      } else {
        data = await axios.get(`/`, {
          cancelToken: new CancelToken(function executor(c) {
            cancel = c;
          }),
        });
      }

      this.setState({ nations: data.data.slice(0,9) });
      this.setState({ isLoading: false });
    } catch (thrown) {
      if (axios.isCancel(thrown)) {
        console.log(thrown.message);
      } else {
        console.log(thrown);
      }
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.props.region !== prevProps.region ||
      this.state.nations !== prevState.nations
    ) {
      this.setState({ isLoading: true });
      const region = this.props.region;

      let data;
      try {
        if (region !== "/all") {
          data = await axios.get(`/region/${region}`, {
            cancelToken: new CancelToken(function executor(c) {
              cancel = c;
            }),
          });
        } else {
          data = await axios.get(`/`, {
            cancelToken: new CancelToken(function executor(c) {
              cancel = c;
            }),
          });
        }

        this.setState({ nations: data.data.slice(0,9) });
        this.setState({ isLoading: false });
      } catch (thrown) {
        if (axios.isCancel(thrown)) {
          console.log(thrown.message);
        } else {
          console.log(thrown);
        }
      }
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    cancel();
  }

  queryHandler = (e) => {
    const value = e.target.value;
    // const { nationNames } = this.props;
    // if (nationNames) {
    //   Object.values(nationNames);
    //   nationNames.forEach((name) => {
    //     if (name.includes(value));
    //     console.log(name);
    //   });
    // }
    this.setState({ query: value });
    return;
  };

  regionHandler = (region) => {
    this.props.history.push(`/${region}`);
  };
  countryHandler = (country) => {
    this.props.history.push(`/country/${country}`);
  };
  inputHandler = () => {
    this.props.history.push(`/country/${this.state.query}`);
  };
  optionsHandler = () => {
    let show;

    if (this.state.showOptions) show = false;
    else show = true;
    this.setState({
      showOptions: show,
    });
    console.log(show);
  };
  render() {
    let show = <Spinner />;
    let type = "column";
    if (this.state.nations.length) {
      show = this.state.nations.map((nation) => (
        <Card
          key={nation.name}
          name={nation.name}
          population={nation.population}
          region={nation.region}
          capital={nation.capital}
          flag={nation.flag}
          href={this.countryHandler}
        />
      ));

      type = "row";
    }
    return (
      <div>
        <Nav />
        <Search
          countryHandler={this.inputHandler}
          href={this.regionHandler}
          change={this.queryHandler}
          optionsHandler={this.optionsHandler}
          showOptions={this.state.showOptions}
        />
        <Container type={type}>{show}</Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nationNames: state.codeToName,
});
const mapDispatchToProps = (dispatch) => ({
  fetchNames: () => dispatch(fetchApi()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(React.memo(withError(Home))));
