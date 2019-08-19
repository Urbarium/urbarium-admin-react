import React from 'react';
import { ConnectedLabeledInput as Input } from 'components/Urbarium/LabeledInput';
import { Column } from 'components/Structural';
import Form from 'components/Form';
import {
  PageWrapper,
  BonoHeader,
  PageContent,
  BonoFooter,
} from 'components/PageWrapper';
import {
  Anos,
  Modalidad,
  Caracteristica,
  EntidadesBancarias,
} from './options';

const formID = 'caso-de-bono-page-form';

const CasoDeBonoPage = ({ bono }) => (
  <PageWrapper>

    <BonoHeader bono={bono} />

    <PageContent>
      <Form id={formID}>
        <Column gap={40}>
          <Column gap={20}>
            <Input
              type="dropdown"
              label="Año"
              icon="calendar"
              options={Anos}
              placeholder="Año"
              name="ano"
              required
            />
          </Column>
          <Input
            type="checkbox"
            label="Modalidad"
            icon="none"
            options={Modalidad}
            name="modalidad"
            required
          />
          <Input
            type="radio"
            label="Característica Expecial"
            icon="none"
            options={Caracteristica}
            name="caracteristica_especial"
            required
          />
          <Input
            type="dropdown"
            label="Entidad bancaria a cargo"
            icon="none"
            placeholder="Grupo Mutual"
            options={EntidadesBancarias}
            name="entidad_bancaria"
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
};


export default CasoDeBonoPage;
