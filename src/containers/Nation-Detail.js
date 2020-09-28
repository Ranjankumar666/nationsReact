import React, { Component } from "react";
import axios from "axios";
import Paragraph from "../components/paragraph/paragraph";
import Nav from "../components/nav/nav.js";
import Back from "../components/backButton/backButton";
import { fetchApi } from "../store/action";
import { connect } from "react-redux";
import {ReactComponent as Icon} from "../arrow.svg"
import Border,{
  Container,
  Flag,
  ImageContainer,
  Header,
  Details,
  DetailsBox,
  NeighborButton
} from "./nationDetailStyles.js";
import Spinner from "../components/UI/spinner/spinner";

const CancelToken = axios.CancelToken;
let cancel;

class NationDetail extends Component {
  state = {
    details: null,
    isLoading: true
  };

  async componentDidMount() {
    this._isMounted = true;
    await this.props.fetchApi();
    const countryName = this.props.match.params.params;
    const countryDetails = await axios.get(
      `/name/${countryName}?fullText=true`,
      {
        cancelToken: new CancelToken(function executor(c) {
          cancel = c;
        }),
      }
    );
    this.setState({ details: countryDetails.data[0], isLoading: false });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.props.match.params.params !== prevProps.match.params.params ||
      this.state.details !== prevState.details
    ) {
      const countryName = this.props.match.params.params;
      const countryDetails = await axios.get(
        `/name/${countryName}?fullText=true`,
        {
          cancelToken: new CancelToken(function executor(c) {
            cancel = c;
          }),
        }
      );
      this.setState({ details: countryDetails.data[0], isLoading: false });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    cancel();
  }

  backHandler = () => {
    this.props.history.goBack();
  };

  sendToNext = (name) => {
    name = name.toLowerCase();
    this.props.history.push(`/country/${name}`);
  };

  render() {
   
    const details = this.state.details;
    let show = <Spinner />;

    if (!this.state.isLoading) {
      show = (
        <Container>
          <ImageContainer>
            <Flag src={details.flag} alt="flag" />
          </ImageContainer>
          <Details>
            <Header>{details.name}</Header>
            <DetailsBox>
              <Paragraph title="Population">{details.population}</Paragraph>
              <Paragraph title="Languages">
                {details.languages.map((lang) => (
                  <p key={lang.name}>{lang.name}</p>
                ))}
              </Paragraph>
              <Paragraph title="Region">{details.region}</Paragraph>
              <Paragraph title="Demonym">{details.demonym}</Paragraph>
              <Paragraph title="Top Level Domain">
                {details.topLevelDomain}
              </Paragraph>
              <Paragraph title="Capital">{details.capital}</Paragraph>
              <Paragraph title="Subregion">{details.subregion}</Paragraph>
            </DetailsBox>
            <Border title="Border Countries" center={true}>
              {details.borders.map((country) => (
                <NeighborButton
                  key={country}
                  onClick={() =>
                    this.sendToNext(this.props.codeToName[country])
                  }
                >
                  {this.props.codeToName[country]}
                </NeighborButton>
              ))}
            </Border>
          </Details>
        </Container>
      );
    }

    return (
      <React.Fragment>
        <Nav />
        <Back onClick={this.backHandler}>
        <Icon />
        Back
        </Back>
        {show}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  codeToName: state.codeToName,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(fetchApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NationDetail);
