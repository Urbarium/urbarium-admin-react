import styled from 'styled-components';

export const PageWrapper = styled.div`
    box-sizing: border-box;
    height: 100%;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 12.5% 75% 12.5%;
    grid-template-areas:
        '  .   header   .  '
        '  .   content  .  '
        '  .   footer   .  '
`;

export const PageHeader = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding-top: 40px;
    grid-area: header;
    position: relative;
`;

export const PageContent = styled.div`
    box-sizing: border-box;
    padding: 40px 10px;
    grid-area: content;
    overflow-y: hidden;
    height: 100%;
`;

export const PageFooter = styled.div`
    box-sizing: border-box;
    padding: 40px 0px;
    grid-area: footer;
    position: relative
`;
