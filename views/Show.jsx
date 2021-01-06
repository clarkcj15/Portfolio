const React = require('react');
const items = require('../models/items.js');
const Layout = require('./Layout/Layout.jsx');
class Show extends React.Component{
    render() {
        const item = this.props.item;
        return (
            <Layout
            title={`${item.title}`}
             stylesheet="/css/show.css">
                {/* <h1>{item.title}</h1> */}
                <p>{item.description}</p>
                <p><iframe src={item.link} width='700px' height='500px' ></iframe></p>
                <a href={`/${item._id}/edit`}>Edit Project</a>
            </Layout>
        )
    }
}

module.exports = Show;