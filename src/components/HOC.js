import React, { Component } from 'react';
const HOC = (UserList, data) => {
  return class extends Component {
    render() {
      console.log(data);
       return <UserList  data={data} />;
    }
  };
};

export default HOC;
