import React from 'react';
import Input from '../../components/Urbarium/LabeledInput';
import { Column } from '../../components/Structural/index';
import Form from '../../components/Form';
import {
  PageWrapper,
  BonoHeader,
  PageContent,
  BonoFooter,
} from '../../components/PageWrapper';
import {
  Anos,
  Modalidad,
  Caracteristica,
  EntidadesBancarias,
} from './options';

const formID = 'caso-de-bono-page-form';

const CasoDeBonoPage = ({ bono, data, onSubmit }) => (
  <PageWrapper>

    <BonoHeader bono={bono} />

    <PageContent>
      <Form onSubmit={onSubmit} id={formID}>
        <Column gap={40}>
          <Column gap={20}>
            <Input
              type="dropdown"
              label="Año"
              icon="calendar"
              options={Anos}
              placeholder="Año"
              data={data.ano}
              name="ano"
              required
            />
          </Column>
          <Input
            type="checkbox"
            label="Modalidad"
            icon="none"
            options={Modalidad}
            data={data.modalidad}
            name="modalidad"
            required
          />
          <Input
            type="radio"
            label="Característica Expecial"
            icon="none"
            options={Caracteristica}
            data={data.caracteristica}
            name="caracteristica"
            required
          />
          <Input
            type="dropdown"
            label="Entidad bancaria a cargo"
            icon="none"
            placeholder="Grupo Mutual"
            options={EntidadesBancarias}
            data={data.entidad}
            name="entidad"
            required
          />
        </Column>
      </Form>
    </PageContent>

    <BonoFooter id={formID} />

  </PageWrapper>
);

// default values for the page,
// you can edit this to test how it would look once rendered with different data
CasoDeBonoPage.defaultProps = {
  bono: {
    nombre: 'Default',
    cedula: '12345678',
    numero: '12345',
    monto: '',
    modificacion: '',
    creacion: '6/24/2019',
  },
  data: {
    ano: '',
    modalidad: [],
    caracteristica: '',
    entidad: '',
  },
  // eslint-disable-next-line no-console
  onSubmit(args) { console.table(args); },
};


export default CasoDeBonoPage;
