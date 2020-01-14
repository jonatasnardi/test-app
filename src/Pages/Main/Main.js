import React, { Component } from 'react';
import { FlatList } from 'react-native';

import {
  Wrapper,
  ProductContainer,
  ProductImageWrapper,
  ProductDescriptionWrapper,
  ProductImage,
  ContainerPrices,
} from './Main.style';

import MainTitle from '../../Components/Texts/MainTitle/MainTitle';
import TextDefault from '../../Components/Texts/TextDefault/TextDefault';
import ButtonPrimary from '../../Components/Buttons/ButtonPrimary/ButtonPrimary';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  renderProductItem = () => {
    return (
      <ProductContainer>
        <ProductImageWrapper>
          <ProductImage
            source={{uri: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_130,f_auto,fl_progressive,q_auto:best/v1/imagens/5/carolina-herrera-212-own-the-party-copo-51916-3520948609418638679.jpg'}}
          />
          <TextDefault
            text={'cod: 21312'}
            color={Colors.grey}
            fontSize={14} />
        </ProductImageWrapper>
        <ProductDescriptionWrapper>
          <TextDefault
            text={'Good Girl Velvet Fatale Carolina Herrera Eau de Parfum - Perfume Feminino 80ml'}
            color={'#434343'}
            fontSize={16}
            letterSpacing={-0.5} />

          <ContainerPrices>
            <TextDefault
              text={'R$ 231,10'}
              color={Colors.grey}
              fontSize={14}
              striked={true} />

            <TextDefault
              text={'R$ 231,10'}
              color={Colors.primary}
              fontSize={18} />
          </ContainerPrices>

          <ButtonPrimary
            onPress={() => {}}
            title={'VER DETALHES'} />
        </ProductDescriptionWrapper>
      </ProductContainer>
    )
  }

  render() {
    return (
      <>
        <Wrapper>
          <MainTitle
            text={'LISTA DE PRODUTOS'}
            color={Colors.black}
            fontSize={20}
            fontWeight={'bold'} />

          <FlatList
            data={['a', 'b']}
            renderItem={({ item }) => (
              this.renderProductItem()
            )}
          />


        </Wrapper>
      </>
    )
  }
}

export default Main;
