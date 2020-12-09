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
                    <nav>
                        <ul>
                            <li>
                            <a href="/page">Go Home</a><br/>
                            <a href="/page/new">Add A New Project</a>
                            <a href="/page/contact">Contact Me</a>
                            </li>
                        </ul>
                    </nav>
                </footer>
            </html>
        )
    }
}

module.exports = Layout;