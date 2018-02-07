import React, {Component} from 'react';
import styled from 'styled-components';
import {Container} from 'semantic-ui-react';

const FullWidthWrapper = styled.div`{
  background: transparent url("top-five-bg.jpg") 0 0;
}
`
const ColorOverlay = styled.div`
    padding: ${props => props.theme.sectionPadding};
    background-color: ${props => props.theme.blueOverlay};
    width: 100%;
    text-align: center;
`

const H1 = styled.h1`
  font-size: ${props => props.theme.h1Size};
  margin-bottom: 0.6em;
  color: ${props => props.theme.brandWhite};
`

const H3 = styled.h3`
  font-size: ${props => props.theme.h3Size};
  margin-bottom: 1em;
  margin-top: 0;
  font-weight: normal;
  color: ${props => props.theme.brandWhite};
`

class TopFiveQuotesPanel extends Component {
    render() {
        return (
            <FullWidthWrapper>
                <ColorOverlay>
                    <Container>
                        <H1>Today's popular quotes</H1>
                        <H3>Help us spread the word</H3>
                    </Container>
                </ColorOverlay>
            </FullWidthWrapper>
        );
    }
}

export default TopFiveQuotesPanel;
