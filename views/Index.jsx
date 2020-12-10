const React = require('react');
const Layout = require('./Layout/Layout.jsx');
class Index extends React.Component{
    render() {
        console.log(this.props.items);
        return (
            <Layout
            title="Project Directory"
             stylesheet="/css/index.css">
            <ul className="index-page">
                {
                    this.props.items.map((item, index) => {
                        return(
                            <li>
                            <h2><a href={'/aboutme'}>Learn More About CJ Clark - Web Developer</a></h2>
                            <p id='name'><a href={`/page/${item._id}`}>{item.title}</a></p>
                            <p><img src={item.img} alt="" width="800px" height="500px"/></p>
                            <p>{item.description}</p>
                            <p>{item.isComplete? 'This project is complete' : 'This project is a work in progress'}</p>
                            </li>
                        )
                    })
                }
            </ul>
            </Layout>
        )
    }
}

module.exports = Index;