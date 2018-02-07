import React, {Component} from 'react';
import styled from 'styled-components';
import {Container, Grid} from 'semantic-ui-react';
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

const QuoteWrapper = styled.div`
  ${props => props.dark && 'background-color: ' + props.theme.brandYellow + ';' };
  ${props => props.light && 'background-color: ' + props.theme.brandWhite + ';' };
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 370px;
  width: 100%;
  box-sizing: border-box;
  padding: 2em; 
  box-shadow: -5px 10px 30px rgba(0,0,0,0.3);   
`

const Quote = styled.p`
  font-size: 1.5rem; 
  ${props => props.dark && 'color: ' + props.theme.brandBlack + ';' };
  ${props => props.light && 'color: ' + props.theme.brandWhite + ';' };    
`

const Author = styled.p`
  font-size: 1.1rem; 
  font-weight: lighter;
  ${props => props.dark && 'color: ' + props.theme.brandBlack + ';' };
  ${props => props.light && 'color: ' + props.theme.brandWhite + ';' };    
`

class TopFiveQuotesPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topQuotes: [],
        }
    }

    componentDidMount() {

        const topQuotes = [];
        const popularQuotes = quotesRef.orderByChild('likes').limitToLast(4);
        popularQuotes.on('value', snap =>{
            const cloned = _.clone(snap.val());
            _(cloned).keys().forEach(key => {
                const quote = {
                    ...cloned[key],
                    key: key,
                }
                topQuotes.push(quote);
            })
            this.setState({
                topQuotes: topQuotes
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
                        <Grid padded columns={4} doubling container>
                            <Grid.Row>
                            {this.state.topQuotes.map( (quote, index) =>
                                <Grid.Column width={4}>
                                    <QuoteWrapper
                                        dark={index % 2 == 1 ? true : false}
                                        light={index % 2 == 0 ? true : false}
                                    >
                                        <Quote
                                            dark={index % 2 == 0 ? true : false}
                                            light={index % 2 == 1 ? true : false}
                                        >"{quote.text}"</Quote>
                                        <Author
                                            dark={index % 2 == 0 ? true : false}
                                            light={index % 2 == 1 ? true : false}
                                        >- {quote.author}</Author>
                                    </QuoteWrapper>
                                </Grid.Column>
                            )}
                            </Grid.Row>
                        </Grid>
                    </Container>
                </ColorOverlay>
            </FullWidthWrapper>
        );
    }
}

export default TopFiveQuotesPanel;
