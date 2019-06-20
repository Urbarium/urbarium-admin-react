import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 12px;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Col = styled.div`
  position: relative;
  width: 50%;
  height: 50px;
`;

const TextId = styled.div`
  width: 94px;
  height: 33px;
  color: rgb(55, 57, 76);
  font-size: 27px;
  fonst-family: Sans-serif;
  text-align: right;
  position: absolute;
  right: 0;
`;

const TextBono = styled.div`
  width: 32px;
  height: 18px;
  color: rgb(153, 79, 126);
  font-size: 10.45px;
  fonst-family: Sans-serif;
  font-weight: normal;
  letter-spacing: 0.14px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const TextStatus = styled.div`
  width: 100%;
  height: 16px;
  color: rgb(153, 79, 126);
  font-size: 15px;
  fonst-family: Sans-serif;
  font-weight: bold;
  letter-spacing: 0.01px;
`;

const ProjectInfoHeader = ({ casoId, status }) => (
  <Container>
    <Row>
      <Col>
        <TextId>
          {`#${casoId}`}
        </TextId>
      </Col>
      <Col>
        <TextBono>
            BONO
        </TextBono>
      </Col>
    </Row>
    <Row>
      <TextStatus>
        {status}
      </TextStatus>
    </Row>
  </Container>
);

export default ProjectInfoHeader;
