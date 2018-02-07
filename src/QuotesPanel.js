import React, {Component} from 'react';
import styled from 'styled-components';
import {quotesRef, tagsRef} from './firebase';
import _ from 'lodash';
import {Grid, Container, Checkbox} from 'semantic-ui-react';


const Wrapper = styled(Container)`
    &&&&&{
      padding: ${props => props.theme.sectionPadding};
    }
`

const Avatar = styled.img`
  width: 100%;
  height: auto;    
`

const QuoteContentWrapper = styled.div`
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.15);    
`

const QuoteText = styled.p`
    font-size: 1.3rem;
    padding: 25px;
    padding-bottom: 15px;
    color: ${props => props.theme.brandBlack};
    margin: 0;
`

const MetaInfoWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding:0px 25px 25px 25px;
`

const Author = styled.p`
     &&&&&&{
      color:${props => props.theme.brandBlue};
      font-size: 1.1rem;
      margin: 0 1em 0 0;
    }
`

const Likes = styled.p`
    &&&&&&{
        color: ${props => props.theme.redColor};
        font-size: 1.1rem;
        font-weight: bold;
        margin: 0;
    }
`
const TagCheckbox = styled(Checkbox)`
    margin-bottom: 0.5em;
`;

class QuotesPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            tags: [],
        }
    }

    componentDidMount() {
        const quotes = [];
        quotesRef.on('value', snap => {
            const cloned = _.clone(snap.val());
            const keys = _(cloned).keys();
            keys.forEach( key => {
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

        const tags = [];
        tagsRef.on('value', snap => {
            const cloned = _.clone(snap.val());
            const keys = _(cloned).keys();
            keys.forEach( key => {
                const tag = {
                    name: cloned[key],
                    key: key,
                }
                tags.push(tag);
            })
            this.setState({
                tags: tags
            })
        })
    }


    render() {
        return (
            <Wrapper>
                <Grid columns={2} stackable>
                    <Grid.Column width={12}>
                        <h2>Quotes</h2>
                        {this.state.quotes.map(quote =>
                            <Grid>
                                <Grid.Column width={2}>
                                    <Avatar src="avatar.jpg"></Avatar>
                                </Grid.Column>
                                <Grid.Column width={14}>
                                    <QuoteContentWrapper>
                                        <QuoteText>"{quote.text}"</QuoteText>
                                        <MetaInfoWrapper>
                                            <Author>- {quote.author}</Author>
                                            <Likes>{quote.likes} likes</Likes>
                                        </MetaInfoWrapper>
                                    </QuoteContentWrapper>
                                </Grid.Column>
                            </Grid>
                        )}
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <h2>Tags</h2>
                        {this.state.tags.map(tag =>
                        <div>
                            <TagCheckbox label={tag.name}></TagCheckbox>
                        </div>)}
                    </Grid.Column>
                </Grid>
            </Wrapper>
        );
    }
}

export default QuotesPanel;
