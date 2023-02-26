import React from "react";
import {
  AiOutlineDesktop,
  AiOutlineWoman,
  AiOutlineFileExcel,
  AiOutlineEllipsis,
} from "react-icons/ai";
import { BiBone } from "react-icons/bi";

import {
  Container,
  Content,
  Title,
  DivServices,
  Service,
  TitleService,
  DescriptionService,
} from "./styles";

export default function Services() {
  return (
    <Container id="servicos">
      <Content>
        <Title>Serviços</Title>
        <DivServices>
          <Service>
            <AiOutlineDesktop size={44} color="#5183a6" />
            <TitleService>Ultrassonografia</TitleService>
            <DescriptionService>
              A ultrassonografia ou ecografia é um método diagnóstico muito
              recorrente na medicina moderna que utiliza o eco gerado através de
              ondas ultrassônicas de alta frequência para visualizar, em tempo
              real, as estruturas internas do organismo.
            </DescriptionService>
          </Service>
          <Service>
            <BiBone size={44} color="#5183a6" />
            <TitleService>Densitometria Óssea</TitleService>
            <DescriptionService>
              A Densitometria Óssea é um método de diagnóstico para a
              osteoporose e osteopenia, considerado o exame de referência para
              se medir a densidade mineral óssea. O equipamento mais utilizado
              para este exame usa a técnica de Absorciometria de Energia Dupla
              de Raios X ou DEXA.
            </DescriptionService>
          </Service>
          <Service>
            <AiOutlineFileExcel size={44} color="#5183a6" />
            <TitleService>Raio X</TitleService>
            <DescriptionService>
              A radiação X é uma forma de radiação eletromagnética, de natureza
              semelhante à luz. A maioria dos raios X possuem comprimentos de
              onda entre 0,01 a 10 nanómetros, correspondendo a frequências na
              faixa de 30 petahertz a 30 exahertz e energias entre 100 eV até
              100 keV.
            </DescriptionService>
          </Service>
          <Service>
            <AiOutlineDesktop size={44} color="#5183a6" />
            <TitleService>Tomografia Computadorizada</TitleService>
            <DescriptionService>
              Tomografia computadorizada ou tomografia computorizada,
              originalmente apelidada tomografia axial computadorizada /
              computorizada - em inglês: X-ray computed tomography - é um exame
              complementar de diagnóstico por imagem, que consiste numa imagem
              que representa uma secção ou "fatia" do corpo.
            </DescriptionService>
          </Service>
          <Service>
            <AiOutlineWoman size={44} color="#5183a6" />
            <TitleService>Mamografia</TitleService>
            <DescriptionService>
              A mamografia ou mastografia é um exame de rastreio por imagem, que
              tem como finalidade estudar o tecido mamário. Esse tipo de exame
              pode detectar um nódulo, mesmo que este ainda não seja palpável.
            </DescriptionService>
          </Service>
          <Service>
            <AiOutlineEllipsis size={44} color="#5183a6" />
            <TitleService>Outros Serviços</TitleService>
            <DescriptionService>
              Consultas com Clínico e Nutricionista, Cirurgia Gástrica,
              Ortopedia e Odontologia.
            </DescriptionService>
          </Service>
        </DivServices>
      </Content>
    </Container>
  );
}
