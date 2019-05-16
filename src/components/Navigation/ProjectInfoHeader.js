import React from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'

const TextId = styled.div`
  width: 94px;
  height: 33px;
  color: rgb(55, 57, 76);
  font-size: 27px;
`

const TextBono = styled.div`
  width: 32px;
  height: 12px;
  color: rgb(153, 79, 126);
  font-size: 10.45px;
  font-family: Lato-Regular;
  font-weight: normal;
  letter-spacing: 0.14px;
`

const TextStatus = styled.div`
  width: 74px;
  height: 18px;
  color: rgb(153, 79, 126);
  font-size: 15px;
  font-family: Lato-Bold;
  font-weight: bold;
  letter-spacing: 0.01px;
`

const ProjectInfoHeader = ({ components: { Item }, to, casoId, status, ...props }) => {
  return (
    <Route
      render={({ location: { pathname } }) => (
        <Item
          component={({ children, className }) => (
            <Link className={className} to={to}>
              <div>
                <TextId>
                  {'#' + casoId}
                </TextId>
                <TextStatus>
                  {status}
                </TextStatus>
              </div>
              <TextBono>
                BONO
              </TextBono>
            </Link>
          )}
          isSelected={pathname === to}
          {...props}
        />
      )}
    />
  );
};

export default ProjectInfoHeader