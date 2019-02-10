import styled from 'styled-components'
import { ITheme } from 'pages/_theme'

export const Header = styled.header(
  ({ theme: { color } }: { theme: ITheme }) => `
    background: ${color.black};
    padding: 20px;
    display: flex;
    align-items: space-between;
    justify-content: center;

    a {
      flex: 1;
      text-align: center;
      color: ${color.white}
    }
  `
)
