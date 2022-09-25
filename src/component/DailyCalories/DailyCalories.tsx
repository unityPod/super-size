import React, {Component} from "react";
import axios from "axios";
// import {handleYelp} from './httpServce';
import styles from "./DailyCalories.module.css";
const apiKey = 'qMR174__T9L-JWrMUQsmX4bNnkgjkw6OwwpA42j8KzdOhXvoq2OdwggyJM7-mwq5XcQST-CtrmcuU2m3CFydKv5lXNsnWRdF4bNwLrbEySUYIKaRbiwuoDHEOpYvY3Yx'
const baseUrl = 'https://api.yelp.com/v3/businesses/asian-restaurant-san-francisco'
const herokuapp = 'https://cors-anywhere.herokuapp.com/'
const config = {
  headers:{
    Authorization: `Bearer ${apiKey}`
  }, 
  params:{
    term:'term',
    location: 'location'
  }
}


class DailyCalories extends Component {
    state = {
        restaurant: [],
    };

    componentDidMount() {

    axios
    .get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/asian-restaurant-san-francisco`, {
      headers: {
      Authorization: `Bearer ${apiKey}`
  },
    params: {
    categories: 'breakfast_brunch',
  }
  })
    .then((response) => {
        this.setState({
        restaurant: response.data.businesses,
      });
    });
}

render() {
    const restaurantInfo = this.state.restaurant; 
    return (
      <>
    {restaurantInfo.map((info) => {
        return (
    <div className="App">
      <img src={info} alt="restaurant image" />
      console.log(info)
    </div>
        );
    })}
    </>
  );
}
}

export default DailyCalories;
