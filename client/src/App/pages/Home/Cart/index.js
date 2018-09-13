import React from 'react';

import {
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
} from './style';

import closeIconWhite from '../../../../closewhite.svg';
import closeIcon from '../../../../close.svg';

class Cart extends React.Component {
  state = {
    cartOpen: true,
    optionsOpen: false,
    step: 1,
  };

  incrementStep = () => this.setState((prevState) => ({ step: prevState.step + 1 }));

  goToStep = (step) => this.setState({ step });

  renderStep = () => {
    switch (this.state.step) {
      case 1:
        return (
          <React.Fragment>
            <CartList>
              <CartListItem>
                <CartListItemName>
                  "Nerd" White T-shirt
                </CartListItemName>
                <CartListItemPrice>
                  $40
                </CartListItemPrice>
                <CartListItemSelect>
                  <CartListItemSelectButton onClick={() => this.setState({ optionsOpen: !this.state.optionsOpen })}>
                    Medium
                  </CartListItemSelectButton>
                  <CartListItemSelectOptions open={this.state.optionsOpen}>
                    <CartListItemSelectOptionsHeader>Size</CartListItemSelectOptionsHeader>
                    <CartListItemSelectOption value="small">Small</CartListItemSelectOption>
                    <CartListItemSelectOption value="medium">Medium</CartListItemSelectOption>
                    <CartListItemSelectOption value="large">Large</CartListItemSelectOption>
                  </CartListItemSelectOptions>
                </CartListItemSelect>
                <IconButton>
                  <IconClose src={closeIcon} alt="Remove item from cart" />
                </IconButton>
              </CartListItem>
              <CartListItem>
                <CartListItemName>
                  "Nerd" White T-shirt
                </CartListItemName>
                <CartListItemPrice>
                  $40
                </CartListItemPrice>
                <CartListItemSelect>
                  <CartListItemSelectButton onClick={() => this.setState({ optionsOpen: !this.state.optionsOpen })}>
                    Medium
                  </CartListItemSelectButton>
                  <CartListItemSelectOptions open={this.state.optionsOpen}>
                    <CartListItemSelectOption value="small">Small</CartListItemSelectOption>
                    <CartListItemSelectOption value="medium">Medium</CartListItemSelectOption>
                    <CartListItemSelectOption value="large">Large</CartListItemSelectOption>
                  </CartListItemSelectOptions>
                </CartListItemSelect>
                <IconButton>
                  <IconClose src={closeIcon} alt="Remove item from cart" />
                </IconButton>
              </CartListItem>
            </CartList>
            <CartContinueButton onClick={this.incrementStep}>
              $80.00 • Continue
            </CartContinueButton>
          </React.Fragment>
        );
        break;
      case 2:
        return (
            <BreadcrumbsContainer>
              <Breadcrumb onClick={this.goToStep(1)}>Cart</Breadcrumb>
              <BreadcrumbSeperator>•</BreadcrumbSeperator>
              <Breadcrumb>Address</Breadcrumb>
              <BreadcrumbSeperator>•</BreadcrumbSeperator>
              <Breadcrumb>Payment</Breadcrumb>
            </BreadcrumbsContainer>
        );
        break;
      case 3:
        break;
      default:
        return (
          <p>Something broke</p>
        );
        break;
    }
  };

  render() {
    return this.state.cartOpen ? (
      <CartWrapper>
        <CartUnderlay onClick={() => this.setState({ cartOpen: false })} />
        <CartContainer>
          <CartHeader>
            <IconButton onClick={() => this.setState({ cartOpen: false })}>
              <IconClose src={closeIconWhite} alt="Close the shopping cart" />
            </IconButton>
            <CartHeaderTitle>
              Your cart
            </CartHeaderTitle>
            <CartCount>
              2 items
            </CartCount>
          </CartHeader>
          <CartContent>
            {this.renderStep()}
          </CartContent>
          <CartFooter>
            <CartFooterPrompt>
              Have any questions? Need some help?
            </CartFooterPrompt>
            <ButtonLink>
              Talk to us
            </ButtonLink>
          </CartFooter>
        </CartContainer>
      </CartWrapper>
    ) : '';
  }
}

export default Cart;
