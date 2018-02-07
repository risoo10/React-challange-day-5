import React, {Component} from 'react';
import styled from 'styled-components';
import {Container} from 'semantic-ui-react';
import {tagsRef, quotesRef} from './firebase';
import _ from 'lodash';

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

    constructor(props) {
        super(props);
        this.state = {
            quotes: {},
            tags: {}
        }
    }

    componentDidMount() {

        let tags = [];

        tagsRef.on('value', snap => {
            const cloned = _.clone(snap.val());
            _(cloned).keys().forEach(key => {
                const newTag = {
                    key: key,
                    name: cloned[key],
                }
                tags.push(newTag);
            })
            this.setState({
                tags: tags
            })
        });

        const quotes = [];

        quotesRef.once('value', snap =>{
            const cloned = _.clone(snap.val());
            _(cloned).keys().forEach(key => {
                const quote = {
                    ...cloned[key],
                    key: key,
                }
                quotes.push(quote);
            })
            this.setState({
                quotes: quotes
            })
        })

    }

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
