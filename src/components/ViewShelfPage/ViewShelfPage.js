import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { fetchUser } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import { fetchItems } from '../../redux/actions/shelfActions';

const mapStateToProps = state => ({
  user: state.user,
  item: state.items.itemName
});

class ViewShelfPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUser());
    this.props.dispatch(fetchItems());
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {
    const displayItems = this.props.item.map((item, index) => {
      return (<p key={index}>{item.description}<img src={item.image_url}height='200px'width='auto'/></p>)
    })
    console.log(this.props.item)
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h1>SHELF</h1>
          <ul>
            {displayItems}
          </ul>
        </div>
      );
    }

    return (
      <div>
        <Nav />
        {content}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ViewShelfPage);

