import styled from 'styled-components';
import { transparentize, lighten } from 'polished';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: 100%;
`;

const ModalUnderlay = styled.div`
  background: rgba(0,0,0,0.6);
  bottom: 0;
  height: 100vh;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: 4;
`;

const PreviewModalContainer = styled.div`
  left: 50%;
  margin: 4rem auto;
  position: fixed;
  transform: translateX(-50%);
  z-index: 5;
`;

const PreviewModal = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  max-width: 50rem;
  width: 100%;
`;

const ModalHeader = styled.header`
  align-items: center;
  border-bottom: 1px solid #E0E0E0;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
`;

const ModalHeading = styled.h5`
  color: rgba(0,0,0,0.6);
  font-size: 0.875em;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const IconButton = styled.button`
  align-items: center;
  background: #FFFFFF;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  outline: none;
  padding: 0.75rem;

  &:hover {
    background: #F5F5F5;
  }
`;

const IconClose = styled.img`
  height: 1.25rem;
  min-width: 1.25rem;
`;

const ModalContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ModalShirtImageContainer = styled.div`
  padding: 3rem;
`;

const ShirtImage = styled.img`
  width: 100%;
`;

const ModalContent = styled.section`
  padding: 2rem;
`;

const ModalShirtName = styled.h3`
  color: rgba(0,0,0,0.8);
  font-size: 1.25em;
  margin-bottom: 1rem;
`;

const ModalShirtPrice = styled.p`
  color: rgba(0,0,0,0.8);
  font-size: 1.125em;
  margin-bottom: 1rem;
`;

const ModalShirtDescription = styled.p`
  color: rgba(0,0,0,0.6);
  font-size: 1em;
`;

const ModalActions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-top: 2rem;
`;

const ModalButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ModalButtonGroupButton = styled.button`
  background: #FFFFFF;
  border: 1px solid;
  border-color: ${({ selected }) => selected ? '#333333' : '#E0E0E0'};
  cursor: pointer;
  font-family: 'Inter UI', -apple-system, system-ui, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  font-weight: 500;
  outline: none;
  padding: 1rem 1rem;

  &:first-child {
    border-left-width: 1px;
    border-radius: 4px 0 0 4px;
  }

  &:last-child {
    border-radius: 0 4px 4px 0;
  }
`;

const ModalAddToCartButton = styled.a`
  align-items: center;
  background: #5978f3;
  border: 1px solid #5978f3;
  border-radius: 4px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.1);
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  font-family: 'Inter UI', -apple-system, system-ui, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 1em;
  font-weight: 500;
  justify-content: center;
  outline: none;
  padding: 0.5rem 1rem;
  text-decoration: none;

  &:hover {
    background: ${lighten(0.1, '#5978f3')};
    border-color: ${lighten(0.1, '#5978f3')};
  }

  &:focus {
    background: ${lighten(0.1, '#5978f3')};
    border-color: ${lighten(0.1, '#5978f3')};
  }
`;

const BrandHeader = styled.header`
  align-items: flex-end;
  background: ${({ src }) => `url(${src})`};
  display: flex;
  width: 100%;
  overflow: hidden;
  height: 0.625rem;
`;

const Hero = styled.section`
  background: #F3F7F9;
  width: 100%;
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 58rem;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
`;

const Headline = styled.h1`
  color: rgba(0,0,0,0.8);
  font-size: 1.75em;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Emphasis = styled.span`
  color: #405dcf;
`;

const Subtitle = styled.h4`
  color: rgba(0,0,0,0.5);
  font-size: 1.25em;
  margin-bottom: 2rem;
`;

const FormBlock = styled.div`
  display: flex;
  height: 4.5rem;
  margin-bottom: 2.5rem;
  font-family: 'Inter UI', -apple-system, system-ui, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  position: relative;
`;

const Input = styled.input`
  background: #FFFFFF;
  box-shadow: 0 8px 28px rgba(0,0,0,0.1);
  border: 1px solid #FFFFFF;
  border-right: 0;
  border-radius: 8px 0 0 8px;
  font-family: 'Inter UI', -apple-system, system-ui, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 1.25em;
  flex: 1;
  line-height: 5rem;
  padding: 1rem 2rem;
  outline: none;

  ::placeholder {
    color: rgba(0,0,0,0.4);
    font-family: 'Inter UI', -apple-system, system-ui, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  &:focus {
    border-color: #0635EC;
  }
`;

const SearchButton = styled.button`
  background: #5978f3;
  border: 1px solid #5978f3;
  border-radius: 0 8px 8px 0;
  box-shadow: 0 8px 28px rgba(0,0,0,0.1);
  color: #FFFFFF;
  cursor: pointer;
  font-family: 'Inter UI', -apple-system, system-ui, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 1.25em;
  font-weight: 500;
  outline: none;
  padding: 1rem 2rem;

  &:hover {
    background: ${lighten(0.1, '#5978f3')};
    border-color: ${lighten(0.1, '#5978f3')};
  }

  &:focus {
    background: ${lighten(0.1, '#5978f3')};
    border-color: ${lighten(0.1, '#5978f3')};
  }
`;

const Error = styled.p`
  bottom: -2rem;
  color: #CC2B2B;
  font-size: 1em;
  right: 0;
  position: absolute;
`;

const Subtitle2 = styled.h6`
  color: rgba(0,0,0,0.4);
  font-size: 0.875em;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const Tags = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 100%;
  margin-bottom: -0.75rem;
`;

const Tag = styled.span`
  background: ${transparentize(0.94, '#405dcf')};
  border-radius: 4px;
  color: ${transparentize(0.4, '#405dcf')};
  cursor: pointer;
  font-size: 0.875em;
  font-weight: 500;
  padding: 0.5rem 1.5rem;
  margin: 0 0.75rem 0.75rem 0;

  &:hover {
    background: ${transparentize(0.92, '#405dcf')};
  }

  &:focus {
    background: ${transparentize(0.92, '#405dcf')};
  }
`;

const Disclaimer = styled.p`
  color: rgba(0,0,0,0.5);
  font-size: 0.875em;
  margin-top: 2rem;
`;

const LinkInline = styled(Link)`
  color: #405dcf;
  text-decoration: none;
`;

const Shirts = styled.section`
  background: #405dcf;
  width: 100%;
  padding: 5rem 0;
  min-height: 101vh;
`;

const ShirtsList = styled.ul`
  display: grid;
  grid-gap: 2rem;
`;

const ShirtsListItem = styled.li`
  background: #405dcf;
  border-radius: 8px;
  padding: 1.5rem;

  &:hover {
    background: ${lighten(0.04, '#405dcf')};
  }
`;

const ShirtName = styled.h4`
  color: #FFFFFF;
  font-size: 1.5em;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const ShirtDescription = styled.p`
  color: rgba(255,255,255,0.6);
  font-size: 1em;
  line-height: 1.8;
  margin-bottom: 1rem;
`;

const ShirtPreviewButton = styled.button`
  background: transparent;
  border: 1px solid #FFFFFF;
  border-radius: 4px;
  color: #FFFFFF;
  cursor: pointer;
  font-family: 'Inter UI', -apple-system, system-ui, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 1em;
  font-weight: 500;
  outline: none;
  padding: 0.5rem 1rem;
`;

const FAQ = styled.section`
  width: 100%;
  padding: 4rem 0;
`;

const FAQHeading = styled.h2`
  color: rgba(0,0,0,0.8);
  font-size: 1.75em;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

const QAsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const QA = styled.div`
  border-bottom: 1px solid #E0E0E0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  padding: 1.5rem 0;

  &:first-child {
    border-top: 1px solid #E0E0E0;
  }
`;

const Question = styled.h5`
  color: rgba(0,0,0,0.8);
  font-size: 1em;
  font-weight: 500;
`;

const Answer = styled.p`
  color: rgba(0,0,0,0.6);
  font-size: 1em;
  grid-column: 2 / span 2;
`;

export {
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
  ModalShirtPrice,
  ModalShirtDescription,
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
  QAsContainer,
  QA,
  Question,
  Answer,
};
