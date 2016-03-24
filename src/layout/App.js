import React from 'react';
import Header from './../components/Header';
import Container from './../components/grid/Container';

class AppComponent extends React.Component {
    render() {
        return (
            <div>
                <Header/>

                <Container>

                    {this.props.children}

                </Container>
            </div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
