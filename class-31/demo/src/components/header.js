import React from "react";
import { Navbar, Alignment, Button } from "@blueprintjs/core";
import { ThemeContext } from "../context/theme";

class Header extends React.Component {
    // Must be called contextType
    // then, we will have access to this.context
    static contextType = ThemeContext;

    render() {
        return (
            <header>
                <Navbar className={this.context.mode}>
                    <Navbar.Group align={Alignment.LEFT}>
                        <Navbar.Heading> Mode from Context: {this.context.mode}
                            <Button icon="refresh" onClick={this.context.toggleMode} />
                        </Navbar.Heading>
                    </Navbar.Group>
                </Navbar>
            </header>
        )
    }
}

export default Header;