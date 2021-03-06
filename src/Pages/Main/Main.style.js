import styled from 'styled-components/native';

import { Colors, Layout } from '../../Styleguide';

export const Wrapper = styled.View`
  ${Layout.Type.wrapper};
  flex: 1;
  background: ${Colors.lightGrey};
`;

export const ProductContainer = styled.View`
  flex-direction: row;
  background: ${Colors.white};
  height: 210px;
  border-radius: 8px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 1.4px;
  elevation: 2;
  margin-bottom: 20px;
`;

export const ProductImageWrapper = styled.View`
  width: 35%;
  height: 100%;
  padding: 10px 0 10px 10px;
  align-items: center;
`;

export const ProductDescriptionWrapper = styled.View`
  flex: 1;
  width: 65%;
  height: 100%;
  padding: 10px;
  justify-content: space-around;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 80%;
  margin-bottom: 10px;
  resize-mode: stretch;
`;

export const ContainerPrices = styled.View`
`;

export const ContainerList = styled.ScrollView`
  margin-bottom: 20px;
`;
