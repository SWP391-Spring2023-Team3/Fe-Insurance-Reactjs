import 'axios';


export const getAllUser = () => {
    axios.get(`https://insurance-card.herokuapp.com/api/oauth/token`)
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
    .catch(error => console.log(error));
}