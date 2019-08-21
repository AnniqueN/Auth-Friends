import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { getFriends } from '../../actions';

import FriendCard from './FriendCard';

const FriendsList = props => {
  

  return (
    <div className="friends-list-container">
      <h1 className="friends-list-title">Friends List</h1>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th onClick={() => props.getFriends()}>Get Friends</th>
          </tr>
          {props.friends && props.friends.map(friend => {
            console.log(friend)
            return <FriendCard key={friend.email} friend={friend} />;
          })}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    friends: state.friends,
    loginIsLoading: state.loginIsLoading
  };
};

export default connect(
  mapStateToProps,
  { getFriends },
)(FriendsList);
