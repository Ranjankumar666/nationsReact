import React,{useState} from "react";
import axios from "axios";
import Nav from "../components/nav/nav";
import Back from "../components/backButton/backButton";
import {ReactComponent as Icon} from "../arrow.svg";


const withError = (Component) => (props) =>{
    const [error, setError]= useState(null)
    axios.interceptors.request.use((req) => req,(err) =>{
      setError(err.message);
      return Promise.reject(err);
    })

    axios.interceptors.response.use((res) => res , (err) =>{
      setError(err.message);
      return Promise.reject(err);
    })

    const removeError = () =>{
      setError(null);
      props.history.goBack();
    }

    let show = <Component {...props} />

    if(error) show=(
      <React.Fragment>
        <Nav />
        <Back onClick={removeError}> 
         <Icon />
        Back
        </Back>
        <h3 style={{textAlign: 'center'}}> {error} </h3>
      </React.Fragment>
    )
    return show;
  }


  export default withError;