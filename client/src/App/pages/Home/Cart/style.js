import styled from 'styled-components';
import { lighten } from 'polished';

const CartWrapper = styled.div`
  height: 100%;
`;

const CartUnderlay = styled.div`
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

const CartContainer = styled.div`
  background: #F5F5F5;
  bottom: 0;
  display: flex;
  flex-direction: column;
  max-width: 36rem;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 5;
`;

const CartHeader = styled.header`
  align-items: center;
  background: #405DCF;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 6rem 1fr 6rem;
  text-align: center;
  padding: 0.75rem 1.5rem;
  width: 100%;
`;

const IconButton = styled.button`
  justify-self: flex-start;
  align-items: center;
  background: transparent;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  outline: none;
  padding: 0.75rem;
  min-width: 44px;
  margin-left: -0.75rem;

  &:hover {
    background: rgba(0,0,0,0.05);
  }
`;

const IconClose = styled.img`
  height: 1.25rem;
  min-width: 1.25rem;
`;

const CartHeaderTitle = styled.h3`
  color: #FFFFFF;
  font-size: 1.125em;
  font-weight: 500;
  ${'' /* text-transform: uppercase; */}
`;

const CartCount = styled.p`
  color: rgba(255,255,255,0.7);
  font-size: 1.125em;
  font-weight: 500;
  justify-self: flex-end;
`;

const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;

const CartList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  ${'' /* overflow: auto; */}
`;

const CartListItem = styled.li`
  align-items: center;
  border-bottom: 1px solid #E0E0E0;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1rem;
  padding: 1.5rem;
`;

const CartListItemName = styled.h5`
  color: rgba(0,0,0,0.8);
  font-size: 1.25em;
`;

const CartListItemPrice = styled.h5`
  color: #449C6C
  font-size: 1.25em;
`;

const CartListItemSelect = styled.div`
  overflow: visible;
  position: relative;
`;

const CartListItemSelectButton = styled.button`
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  color: rgba(0,0,0,0.8);
  cursor: pointer;
  font-family: 'Inter UI', -apple-system, system-ui, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 1em;
  font-weight: 500;
  ${'' /* justify-self: flex-start; */}
  outline: none;
  padding: 0.5rem 2rem 0.5rem 0.75rem;
  position: relative;

  &:focus {
    border-color: #757575;
  }

  &:after {
    position: absolute;
    content: "";
    top: 18px;
    right: 12px;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-color: rgba(0,0,0,0.8) transparent transparent transparent;
  }
`;

const CartListItemSelectOptions = styled.div`
  display: ${({ open }) => open ? 'block' : 'none'};
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  padding: 0.25rem 0;
  z-index: 6;
`;

const CartListItemSelectOptionsHeader = styled.header`
  color: rgba(0,0,0,0.8);
  font-size: 0.875em;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
`;

const CartListItemSelectOption = styled.div`
  color: rgba(0,0,0,0.6);
  cursor: pointer;
  padding: 0.5rem 1rem;
`;

const RemoveIcon = styled.img`
  height: 1.25rem;
  min-width: 1.25rem;
`;

const CartContinueButton = styled.button`
  background: #5978f3;
  border: 1px solid #5978f3;
  border-radius: 8px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.1);
  color: #FFFFFF;
  cursor: pointer;
  font-family: 'Inter UI', -apple-system, system-ui, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 1.25em;
  font-weight: 500;
  margin: 1.5rem 1.5rem 0;
  outline: none;
  padding: 1.25rem 2rem;

  &:hover {
    background: ${lighten(0.1, '#5978f3')};
    border-color: ${lighten(0.1, '#5978f3')};
  }

  &:focus {
    background: ${lighten(0.1, '#5978f3')};
    border-color: ${lighten(0.1, '#5978f3')};
  }
`;

const CartFooter = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 1.5rem;
`;

const CartFooterPrompt = styled.p`
  color: rgba(0,0,0,0.6);
  margin-bottom: 1.25rem;
`;

const ButtonLink = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  border-radius: 4px;
  color: #405DCF;
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
    background: rgba(0,0,0,0.05);
  }

  &:focus {
    background: rgba(0,0,0,0.05);
  }
`;

// BreadcrumbsContainer,
// Breadcrumb,
// BillingInfo,
// FormGroup,
// FormField,
// Label,
// Input,
// ShippingInfo,

const BreadcrumbsContainer = styled.header`
  align-items: center;
  background: rgba(0,0,0,0.2);
  display: flex;
  padding: 1rem 1.5rem;
  width: 100%;
`;

const Breadcrumb = styled.span`
  color: rgba(0,0,0,0.6);
`;

const BreadcrumbSeperator = styled.span`
  margin: 0 1rem;
`;

const BillingInfo = styled.section`

`;

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-gap: 1rem;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: rgba(0,0,0,0.6);
  font-size: 0.875em;
  text-transform: uppercase;
`;

const Input = styled.input`
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  padding: 0.5rem 0.75rem;
`;

const ShippingInfo = styled.section`

`;

export {
  CartWrapper,
  CartUnderlay,
  CartContainer,
  CartHeader,
  IconButton,
  IconClose,
  CartHeaderTitle,
  CartCount,
  CartContent,
  CartList,
  CartListItem,
  CartListItemName,
  CartListItemPrice,
  CartListItemSelect,
  CartListItemSelectButton,
  CartListItemSelectOptions,
  CartListItemSelectOptionsHeader,
  CartListItemSelectOption,
  RemoveIcon,
  CartContinueButton,
  CartFooter,
  CartFooterPrompt,
  ButtonLink,
  BreadcrumbsContainer,
  Breadcrumb,
  BreadcrumbSeperator,
  BillingInfo,
  FormGroup,
  FormField,
  Label,
  Input,
  ShippingInfo,
};
