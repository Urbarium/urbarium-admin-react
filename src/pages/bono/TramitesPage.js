import React from 'react';
import ContentWrapper from '../../components/ContentWrapper';
import PageTitle from '../../components/PageTitle';
import Accordion from '../../components/Urbarium/AccordionItem';
import Input from '../../components/Urbarium/LabeledInput';
import Label from '../../components/Urbarium/Label';
import Button from '../../components/Urbarium/ButtonRound';
import { Column, Row } from '../../components/Structural/index';
import fonts from '../../fonts';
import { secondary } from '../../colors';

// TODO: FIX SCROLL ON ACCORDION MENU
const AccordionMenu = ({ data }) => (
  <Column gap={5} style={{ height: '100%', overflowY: 'scroll' }}>
    <Accordion index={1} data={data[0]} title="Visita preliminar solicitada" />
    <Accordion index={2} data={data[1]} title="En conformación" columns="3fr 1fr">
      <Input
        grid={150}
        type="checkbox"
        label="Expediente"
        options={[
          'Bienes inmuebles',
          'Informe registral',
          'Reporte CSS',
          'Formulario de utilidad',
          'Nacimientos',
          'Declaraciones Juradas',
          'Justificación de propiedades',
          'Escritura de hipoteca',
          'Constancia Salarial',
          'Impuestos al día',
          'Estado Civil',
        ]}
      />
      <Input type="checkbox" label="Avalúo" options={['Recibo de Pago']} checkColor="blue" />
    </Accordion>
    <Accordion index={3} data={data[2]} title="Enviado a entidad" columns="1fr 4fr">
      <Input
        type="checkbox"
        grid={200}
        options={['Solicitud de cambio por avalúo', 'Solicitud de cambios en trámites']}
      />
    </Accordion>
    <Accordion index={4} data={data[3]} title="Cambios tramitados y enviados" />
    <Accordion index={5} data={data[4]} title="Análisis en entidad" />
    <Accordion index={6} data={data[5]} title="FHA solicitado por entidad" />
    <Accordion index={7} data={data[6]} title="En espera de postulación" />
    <Accordion index={8} data={data[7]} title="Postulada a Bahnvi" columns="2fr 3fr 1fr">
      <Input
        type="checkbox"
        grid={200}
        options={['Inconscistencias', 'Declaratoria emitida']}
      />
      <Input
        type="textarea"
        placeholder="Notas"
        height={58}
        fill
      />
    </Accordion>
    <Accordion index={9} data={data[8]} title="Preparación de documentos para APC" columns="1fr 1fr 1fr">
      <Input
        type="checkbox"
        grid={200}
        options={['Planos en sharepoint', 'Documentos en Sharepoint']}
      />
      <Input
        type="dropdown"
        placeholder="Adjuntar documento"
        options={['This should be a document input', 'not a dropdown', 'working on it...']}
      />
    </Accordion>
    <Accordion index={10} data={data[9]} title="Listos para APC" />
    <Accordion index={11} data={data[10]} title="Subida a APC" />
    <Accordion index={12} data={data[11]} title="CFIA" columns="1fr 3fr">
      <Input
        type="checkbox"
        grid={200}
        options={['Condicionado', 'Aprobado']}
      />
    </Accordion>
    <Accordion index={13} data={data[12]} title="Trámite con Municipalidad" columns="1fr 1fr">
      <Input
        type="checkbox"
        label="Rechazado"
        grid={200}
        options={['En solicitud de requisito', 'En solicitud de cambios de diseño']}
      />
      <Input
        type="checkbox"
        label="Avalúo"
        grid={200}
        options={['Aprobado']}
      />
    </Accordion>
    <Accordion index={14} data={data[13]} title="En espera de Ins y permiso municipal" />
  </Column>
);

AccordionMenu.defaultProps = {
  data: Array(14).fill({
    startDate: '-',
    endDate: '-',
    user: '-',
    state: 0,
  }),
};

const headerFont = ` ${fonts.subLabel} color: ${secondary.lightgray};`;

const TramitesPage = () => (
  <ContentWrapper>
    <Column>
      <PageTitle>Trámites</PageTitle>
      <Row columns="4fr 2fr 2fr 2fr 2fr 0.5fr">
        <Label font={headerFont}>TRÁMITE</Label>
        <Label font={headerFont}>FECHA INICIO</Label>
        <Label font={headerFont}>FECHA CONCLUSIÓN</Label>
        <Label font={headerFont}>ASIGNADO</Label>
        <Label font={headerFont}>STATUS</Label>
      </Row>
      <AccordionMenu />
      <Button>GUARDAR Y CONTINUAR</Button>
    </Column>
  </ContentWrapper>
);

export default TramitesPage;
