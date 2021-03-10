import React from "react";
import { Icon } from "semantic-ui-react";
import { HeaderContainer, LogoContainer, Logo, OptionsContainer, OptionLink } from "./HeaderStyles"

const Header = () => {

     return (
          <HeaderContainer>
            <LogoContainer to="/">
              <Icon  name="home" size="large" />
            </LogoContainer>
            <OptionsContainer>
              <OptionLink to="/mapper">MAP</OptionLink>
              <OptionLink to="/mapper">CONTACT</OptionLink>
              {/* {currentUser ? (
                <OptionLink as="div" onClick={signOutStart}>
                  SIGN OUT
                </OptionLink>
              ) : (
                <OptionLink className="option" to="/signin">
                  SIGN IN
                </OptionLink>
              )} */}
            
            </OptionsContainer>
          
          </HeaderContainer>
        );

}

export default Header 