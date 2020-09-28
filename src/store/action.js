import axios from 'axios';

export const send = (type, data) =>({
    type: 'SEND',
    data
})

export const fetchApi = () => async dispatch => {
  const fetchedData = await axios.get('/');
  const data = fetchedData.data;

  const codeToName = data.map((country) =>{
    const {name, alpha3Code} = country;
    const obj =[alpha3Code, name];
    return obj;
  })

  console.log(codeToName.reduce((o, [k, v])=>Object.assign(o, {[k]: v}), {}))

  dispatch(send('SEND',codeToName.reduce((o, [k, v])=>Object.assign(o, {[k]: v}), {}) ))
}


