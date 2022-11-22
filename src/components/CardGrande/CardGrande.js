import React from 'react';
import { ImgCardGrande, LayoutCardGrande, TituloCardGrande, InfosCardGrande} from "./styles"


function CardGrande(props) {
   
    return (
        <LayoutCardGrande>
            <ImgCardGrande src={ props.imagem } />
            <InfosCardGrande>
                <TituloCardGrande>{ props.nome }</TituloCardGrande>
                <p>{ props.descricao }</p>
            </InfosCardGrande>
        </LayoutCardGrande>
    )
}

export default CardGrande