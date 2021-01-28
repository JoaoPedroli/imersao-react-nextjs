import styled from 'styled-components';
import db from '../../../../db.json'

const {success, contrastText} = db.theme.colors

const Widget = styled.div`
  margin: 24px 0 24px 0;
  border: 1px solid ${success};
  background-color: #1c1814;
  overflow: hidden;
  color: ${contrastText};

  h1, h2, h3{
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p{
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${ ({theme}) => theme.colors.success };

  *{
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child{
    margin-top: 0;
  }
  & > *:last-child{
    margin-bottom: 0;
  }
  ul{
    list-style: none;
    padding: 0;
  }
`;

export default Widget;