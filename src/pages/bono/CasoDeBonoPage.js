import React from 'react';
import PageTitle from '../../components/PageTitle';
import Input from '../../components/Urbarium/LabeledInput';
import { Column, Row } from '../../components/Structural/index';
import ButtonRound from '../../components/Urbarium/ButtonRound';
import Form, { submitForm } from '../../components/Form';
import {
  PageWrapper,
  PageHeader,
  PageContent,
  PageFooter,
} from '../../components/PageWrapper';
import {
  Anos,
  Modalidad,
  Caracteristica,
  EntidadesBancarias,
} from './options';

const formID = 'caso-de-bono-page-form';

const CasoDeBonoPage = ({ data, onSubmit }) => (
  <PageWrapper>
    <PageHeader>
      <PageTitle>{data.title}</PageTitle>
    </PageHeader>

    <PageContent>
      <Form onSubmit={onSubmit} id={formID}>
        <Column gap={40}>
          <Input
            type="dropdown"
            label="Año"
            options={Anos}
            placeholder="Año"
            data={data.ano}
            name="ano"
            required
          />
          <Input
            type="checkbox"
            label="Modalidad"
            options={Modalidad}
            data={data.modalidad}
            right
            name="modalidad"
            required
          />
          <Input
            type="radio"
            label="Característica Expecial"
            options={Caracteristica}
            data={data.caracteristica}
            right
            name="caracteristica"
            required
          />
          <Input
            type="dropdown"
            label="Entidad bancaria a cargo"
            placeholder="Grupo Mutual"
            options={EntidadesBancarias}
            data={data.entidad}
            name="entidad"
            required
          />
        </Column>
      </Form>
    </PageContent>

    <PageFooter>
      <Row justify="end">
        <ButtonRound id={formID} onClick={(submitForm(formID))}>
          GUARDAR Y CONTINUAR
        </ButtonRound>
      </Row>
    </PageFooter>
  </PageWrapper>
);

// default values for the page,
// you can edit this to test how it would look once rendered with different data
CasoDeBonoPage.defaultProps = {
  data: {
    title: 'Casos de Bono',
    ano: '',
    modalidad: [],
    caracteristica: '',
    entidad: '',
  },
  // eslint-disable-next-line no-console
  onSubmit(args) { console.table(args); },
};


export default CasoDeBonoPage;
