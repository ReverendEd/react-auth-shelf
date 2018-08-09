import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchUser } from '../../redux/actions/userActions';
import Nav from '../Nav/Nav';

import { triggerAddItem } from '../../redux/actions/addItemActions';

const mapStateToProps = state => ({
    user: state.user,
});


class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            img_url: ''
        };
    }

    componentDidMount() {
        this.props.dispatch(fetchUser());
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.description !== '' && this.state.img_url !== '') {
            this.props.dispatch(triggerAddItem(this.state))
        }else {
            alert('description or img empty')
        }
    }


    handleChangeFor = (property) => (event) => {
        console.log(property);
        
        this.setState({
            [property] : event.target.value
        })
    }

    render() {
        return (
            <div>
                <Nav />
                <form onSubmit={ this.handleSubmit}>
                    <input type="text" value={this.state.description} placeholder="description" onChange={ this.handleChangeFor('description')} />
                    <input type="text" value={this.state.img_url} placeholder="image url" onChange={this.handleChangeFor('img_url')} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps)(AddItem);

