import React from 'react';
import PageTitle from '../../components/PageTitle';
import Input from '../../components/Urbarium/LabeledInput';
import { Column, Row } from '../../components/Structural/index';
import ButtonRound from '../../components/Urbarium/ButtonRound';
import Form, { submitForm } from '../../components/Form';

import {
  PageWrapper, PageHeader, PageContent, PageFooter,
} from '../../components/PageWrapper';

const entidadesBancarias = [
  { name: 'Grupo Mutual', value: 'grupo_mutual' },
  { name: 'Mutual Cartago', value: 'mutual_cartago' },
  { name: 'Fundación Costa Rica – Canadá', value: 'fundacion_cr-canada' },
  { name: 'Banco Nacional (Oficinas Centrales)', value: 'bn' },
  { name: 'Banco de Costa Rica (Centrales)', value: 'bcr' },
  { name: 'Banco Popular', value: 'banco_popular' },
  { name: 'BAC SanJosé', value: 'bac' },
  { name: 'Instituto Nacional de Vivienda y Urbanismo (Invu)', value: 'invu' },
  { name: 'COOCIQUE R.L', value: 'coocique' },
  { name: 'COOPENAE R.L', value: 'coopenae' },
  { name: 'COOPESERVIDORES R.L', value: 'coopeservidores' },
  { name: 'COOPEUNA R.L', value: 'coopeuna' },
  { name: 'COOPESANMARCOS R.L', value: 'coopesanmarcos' },
  { name: 'COOPEANDE #1', value: 'coopeande' },
  { name: 'COOPESANRAMÓN R.L', value: 'coopesanramon' },
  { name: 'CREDECOOP R.L', value: 'credecoop' },
  { name: 'COOPESPARTA R.L', value: 'coopesparta' },
  { name: 'Asociación Solidarista de Empleados de Demasa (ASEDEMASA)', value: 'asedemasa' },
  { name: 'Asociación Solidarista de Empleados de INA (ASEMINA)', value: 'asemina' },
];

const modalidad = [
  { name: 'CLP', value: 'clp' },
  { name: 'Bono Crédito', value: 'bono_credito' },
  { name: 'Bono RAMT', value: 'bono_ramt' },
  { name: 'Vivienda Nueva', value: 'vivienda_nueva' },
];

const caracteristica = [
  { name: 'Ninguna', value: 'ninguna' },
  { name: 'Adulto Mayor', value: 'mayor' },
  { name: 'Persona con Discapacidad', value: 'discapacidad' },
];

const anos = [
  { name: '2018', value: 2018 },
  { name: '2019', value: 2019 },
  { name: '2020', value: 2010 },
  { name: '2021', value: 2021 },
];

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
            options={anos}
            placeholder="Año"
            data={data.ano}
            name="ano"
            required
          />
          <Input
            type="checkbox"
            label="Modalidad"
            options={modalidad}
            data={data.modalidad}
            right
            name="modalidad"
            required
          />
          <Input
            type="radio"
            label="Característica Expecial"
            options={caracteristica}
            data={data.caracteristica}
            right
            name="caracteristica"
            required
          />
          <Input
            type="dropdown"
            label="Entidad bancaria a cargo"
            placeholder="Grupo Mutual"
            options={entidadesBancarias}
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
