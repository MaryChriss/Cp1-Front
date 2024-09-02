import { Layout } from "../../Components/Layout/Layout";
import { Lista } from "../../Components/Lista/Lista";
import { StyledTodoContainer } from "../../Components/Lista/Lista.style";
import { StyledH1, Styledh6 } from "./NovaLista.style";



export default function NovaLista() {
    return (
        <Layout>
            <StyledTodoContainer>
                <StyledH1>Nova lista</StyledH1>
                <Styledh6>Adicionar Item</Styledh6>
                <Lista />
            </StyledTodoContainer>
        </Layout>
    );
}
