import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
import { fetchCountAction } from '../../redux/actions/shelfActions';

const mapStateToProps = state => ({
  reduxState: state.itemsCount
})

class Stats extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCountAction());
  }

  render() {
    let info = this.props.reduxState.itemCount.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.username}</td>
          <td>{item.count}</td>
        </tr>
      )
    })

    return (
      <div>
        <Nav />
        {/* {JSON.stringify(this.props.reduxState.itemCount)} */}
        <h1>Stats</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Number of Items</th>
            </tr>
          </thead>
          <tbody>
            {info}
          </tbody>
        </table>
      </div>
    )
  }
}
export default connect(mapStateToProps)(Stats);
