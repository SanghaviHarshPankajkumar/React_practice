import React, { Component } from 'react';

export default class UserList extends Component {
  
  render() {
    const { userList } = this.props;
    console.log(userList);
    console.log('in ');
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {userList.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

