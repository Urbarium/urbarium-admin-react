/* eslint-disable eol-last */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ContentWrapper from '../../components/ContentWrapper';
import PageTitle from '../../components/PageTitle';
import Input from '../../components/Urbarium/LabeledInput';
import { Column } from '../../components/Structural/index';

class CasoDeBonoPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <ContentWrapper>
        <PageTitle>{data.title}</PageTitle>
        <Column gap={4}>
          <Input type="dropdown" label="Año" placeholder="2019" options={years} />
          <Input type="checkbox" label="Modalidad" options={['CLP', 'Bono Crédito', 'Bono RAMT', 'Vivienda Nueva']} right />
          <Input type="radio" label="Característica Expecial" options={['Ninguna', 'Adulto Mayor', 'Discapacidad']} right />
          <Input type="dropdown" label="Entidad bancaria a cargo" placeholder="Grupo Mutual" options={entidadesBancarias} />
        </Column>
      </ContentWrapper>
    );
  }
}

// default values for the page,
// you can edit this to test how it would look once rendered with different data
CasoDeBonoPage.defaultProps = {
  data: {
    title: 'Casos de Bono',
    año: [1],
    modalidad: [2],
    caractersitica: [2],
    entidad: [5],
  },
};

// TODO: gotta find a way to dynamically get years
// wonder what range of options are they expecting here?
const years = [2017, 2018, 2019, 2020, 2021];


// TODO: these look awful due to their size
// have to style the dropdown menu options anyway so i'll deal with this later...
const entidadesBancarias = [
  'Grupo Mutual',
  'Mutual Cartago',
  'Fundación Costa Rica – Canadá',
  'Banco Nacional (Oficinas Centrales)',
  'Banco de Costa Rica (Centrales)',
  'Banco Popular',
  'BAC SanJosé',
  'Instituto Nacional de Vivienda y Urbanismo (Invu)',
  'COOCIQUE R.L',
  'COOPENAE R.L',
  'COOPESERVIDORES R.L',
  'COOPEUNA R.L',
  'COOPESANMARCOS R.L',
  'COOPEANDE #1',
  'COOPESANRAMÓN R.L',
  'CREDECOOP R.L',
  'COOPESPARTA R.L',
  'Asociación Solidarista de Empleados de Demasa (ASEDEMASA)',
  'Asociación Solidarista de Empleados de INA (ASEMINA)',
];

export default CasoDeBonoPage;