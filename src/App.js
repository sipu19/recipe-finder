import styled from "styled-components";
import {
  AppNameComponent,
  AppIcon,
  SearchComponent,
  SearchInput,
  SearchIcon,
  Header,
} from "./components/headerComponents";

const Container=styled.div`
display: flex;
flex-direction:column; 
`;
const RecipeListContainer = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
gap:20px;
padding:20px;
justify-content: space-evenly;

`;
const RecipeContainer = styled.div`
display: flex;
flex-direction: column;
width:300px;
 padding:30px;
box-shadow:0 3px 10px 0 #aaa;
border-radius:2px;

`;
const CoverImage= styled.img`
height:200px;
`;
const RecipeName=styled.span`
font-size:18px;
font-weight:bold;
color:black;
margin:10px 0;
`;
const IngridentsText=styled.span`
font-size:18px;
border:solid 1px green;
color:black;
cursor:pointer;
padding:10px 15px;
border-radius:4px;
color:green;
text-align:center;
margin-bottom:12px;

`;
const SeeCompleteRecipeText=styled.span`
font-size:18px;
border:solid 1px red;
color:black;
cursor:pointer;
padding:10px 15px;
border-radius:4px;
color:red;
text-align:center;
`;
function App() {
  return (
<Container>
  <Header>
    <AppNameComponent>
      <AppIcon  src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png "/> 
      Recipe Finder</AppNameComponent>
    <SearchComponent>
      <SearchIcon src="/314807_search_icon.svg"/>
      <SearchInput placeholder="Search Recipe"/>
    </SearchComponent>
  </Header>
  <RecipeListContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  <RecipeContainer>
  <CoverImage src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png"/>
  <RecipeName>Matar Panner</RecipeName>
  <IngridentsText>Ingridents</IngridentsText>
  <SeeCompleteRecipeText>See complete Recipe</SeeCompleteRecipeText>
  </RecipeContainer>
  </RecipeListContainer>
  
</Container>
    );
}

export default App;
