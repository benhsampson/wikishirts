import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

import purplePattern from '../../../pattern-purple.svg';
import close from '../../../close.svg';

import {
  Wrapper,
  ModalUnderlay,
  PreviewModalContainer,
  PreviewModal,
  ModalHeader,
  ModalHeading,
  IconButton,
  IconClose,
  ModalContainer,
  ModalShirtImageContainer,
  ShirtImage,
  ModalContent,
  ModalShirtName,
  ModalShirtDescription,
  ModalShirtPrice,
  ModalActions,
  ModalButtonGroup,
  ModalButtonGroupButton,
  ModalAddToCartButton,
  BrandHeader,
  Hero,
  Container,
  Headline,
  Emphasis,
  Subtitle,
  FormBlock,
  Input,
  SearchButton,
  Error,
  Subtitle2,
  Tags,
  Tag,
  Disclaimer,
  LinkInline,
  Shirts,
  ShirtsList,
  ShirtsListItem,
  ShirtName,
  ShirtDescription,
  ShirtPreviewButton,
  FAQ,
  FAQHeading,
  QA,
  QAsContainer,
  Question,
  Answer,
} from './style';

class App extends Component {
  state = {
    loading: false,
    error: '',
    search: '',
    shirts: [],
    tags: [],
    previewModalOpen: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);

    this.callApi()
      .then(res => this.setState({ tags: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/test-tags');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  search = () => {
    this.findAndParseArticles()
      .then(shirts => {
        this.setState({ loading: false, shirts }, () => {
          scrollToComponent(this.shirts, { offset: 1, align: 'top', duration: 800, ease: 'inOutSine' });
        });
      })
      .catch(err => this.setState({ error: '* Please enter a value here', loading: false }));
  };

  findAndParseArticles = async () => {
    this.setState({ loading: true });

    const response = await fetch(`/api?search=${this.state.search}`);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }

    return body;
  };

  render() {
    return (
      <Wrapper>
        {this.state.previewModalOpen && (
          <React.Fragment>
            <ModalUnderlay onClick={() => this.setState({ previewModalOpen: false })} />
            <PreviewModalContainer>
              <PreviewModal>
                <ModalHeader>
                  <ModalHeading>
                    Preview your custom shirt
                  </ModalHeading>
                  <IconButton onClick={() => this.setState({ previewModalOpen: false })}>
                    <IconClose src={close} alt="Close preview modal" />
                  </IconButton>
                </ModalHeader>
                <ModalContainer>
                  <ModalShirtImageContainer>
                    <ShirtImage
                      src="https://www.sunspel.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/0/4041_234-web_2_2.jpg"
                      alt="Shirt"
                    />
                  </ModalShirtImageContainer>
                  <ModalContent>
                    <ModalShirtName>"Nerd" - Custom White T-Shirt</ModalShirtName>
                    <ModalShirtPrice>$40.00</ModalShirtPrice>
                    <ModalShirtDescription>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                      in reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est
                      laborum.
                    </ModalShirtDescription>
                    <ModalActions>
                      <ModalButtonGroup>
                        <ModalButtonGroupButton>
                          S
                        </ModalButtonGroupButton>
                        <ModalButtonGroupButton selected>
                          M
                        </ModalButtonGroupButton>
                        <ModalButtonGroupButton>
                          L
                        </ModalButtonGroupButton>
                      </ModalButtonGroup>
                      <ModalAddToCartButton href="https://plasso.com/s/UsDaqpLQ7c/product/custom_white_tee?size=large">
                      	Add to cart
                      </ModalAddToCartButton>
                    </ModalActions>
                  </ModalContent>
                </ModalContainer>
              </PreviewModal>
            </PreviewModalContainer>
          </React.Fragment>
        )}
        <BrandHeader src={purplePattern} />
        <Hero>
          <Container>
            <Headline>Wikishirts are <Emphasis>procedurally generated</Emphasis> T-shirts from Wikipedia.</Headline>
            <Subtitle>
              An unlimited selection of shirts on any topic you like. It doesn’t matter if you’re a nerd,
              hacker, pyromaniac, Motorsport enthusiast, or Samurai sword
              collector, there’s a Wikishirt for that.
            </Subtitle>
            <form onSubmit={(e) => { e.preventDefault(); this.search(); }}>
              <FormBlock>
                <Input
                  placeholder="What's your weird obsession?"
                  onChange={e => this.setState({ search: e.target.value })}
                  value={this.state.search}
                />
                <SearchButton>
                  {!this.state.loading ? 'Find me a shirt' : 'Searching...'}
                </SearchButton>
                {this.state.error && <Error>{this.state.error}</Error>}
              </FormBlock>
            </form>
            <Subtitle2>
              Popular searches
            </Subtitle2>
            <Tags>
              {this.state.tags.map((tag) => (
                <Tag
                  key={tag}
                  dangerouslySetInnerHTML={{ __html: tag }}
                  onClick={() => this.setState({ search: tag }, () => this.search())}
                />
              ))}
            </Tags>
            <Disclaimer>
              * All shirts cost $40 with free shipping worldwide
              <br />
              * Shirts that violate our <LinkInline to="/terms">terms of service</LinkInline> will be refunded and not printed
            </Disclaimer>
          </Container>
        </Hero>
        {this.state.shirts.length ? (
          <Shirts ref={node => (this.shirts = node)}>
            <Container>
              <ShirtsList>
                {this.state.shirts.map(({ name, description }, index) => (
                  <ShirtsListItem key={index}>
                    <ShirtName>{name}</ShirtName>
                    <ShirtDescription>{description}</ShirtDescription>
                    <ShirtPreviewButton onClick={() => this.setState({ previewModalOpen: true })}>
                      Details
                    </ShirtPreviewButton>
                  </ShirtsListItem>
                ))}
              </ShirtsList>
            </Container>
          </Shirts>
        ) : ''};
        <FAQ>
          <Container>
            <FAQHeading>
              Frequently asked questions
            </FAQHeading>
            <QAsContainer>
              <QA>
                <Question>What exactly are you making?</Question>
                <Answer>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Answer>
              </QA>
              <QA>
                <Question>How does this work?</Question>
                <Answer>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Answer>
              </QA>
              <QA>
                <Question>How long does shipping take?</Question>
                <Answer>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <LinkInline to="/shipping">Shipping & returns</LinkInline>
                </Answer>
              </QA>
              <QA>
                <Question>What's the returns policy?</Question>
                <Answer>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <LinkInline to="/shipping">Shipping & returns</LinkInline>
                </Answer>
              </QA>
              <QA>
                <Question>Is every Wikipedia article appropriate?</Question>
                <Answer>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <LinkInline to="/terms">Terms of service</LinkInline>
                </Answer>
              </QA>
            </QAsContainer>
          </Container>
        </FAQ>
      </Wrapper>
    );
  }
}

export default App;
