const React = require('react');

class Layout extends React.Component {
    render () {
        return(
            <html>
                <head>
                    <meta charSet="utf-8"/>
                    {/* <link rel="stylesheet" href="/css/styles.css"/> */}
                    <link rel="stylesheet" href={this.props.stylesheet}/>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <h1>{this.props.title}</h1>
                    {this.props.children}
                    <script scr="/server.js"></script>
                </body>
                <footer>
                    <nav id="nav-tag">
                            <a href="/">Go Home</a>
                            {/* <a href="/new">Add A New Project</a> */}
                            <a href="/contact">Contact Me</a>
                    </nav>
                </footer>
            </html>
        )
    }
}

module.exports = Layout;