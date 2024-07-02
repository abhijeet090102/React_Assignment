import logo from './logo.svg';
import './App.css';
import ProductAccept from './Product/ProductAccept.jsx';
import Profilecard from './Product/profileCard/ProfileCard.jsx';
import TodoList from './TodoList/TodoList.jsx';
import ArticleList from './ArticleList/ArticleList.jsx';
import EventSchedule from './EventScedule/EventSchedule.jsx';

function App() {
  const products = [{
    name: "BlueBarry",
    price: 400,
    imageUrl: "https://unsplash.com/s/photos/fruit",
    description: "This is the fruite with sweet flavor ."
  },
  {
    name: "Graphes",
    price: 100,
    imageUrl: "https://unsplash.com/s/photos/fruit",
    description: "This is the fruite with sweet and acidic flavor ."
  },
  {
    name: "Apple",
    price: 200,
    imageUrl: "https://unsplash.com/s/photos/fruit",
    description: "This is the fruite with sweet and salty flavor ."
  },
  {
    name: "Pinnaple",
    price: 100,
    imageUrl: "https://unsplash.com/s/photos/fruit",
    description: "This is the fruite with sweet and acidic flavor ."
  }];
  const UserProfile = [{
    name:"abhi",
    email:"abhijeetkarmakar@gmail.com",
    address:{
        street:"kumartuli",
        city:"malda",
        state:"west bengal",
        zip:79028
    }
},
{
    name:"ranjay",
    email:"ranjaykarmakar@gmail.com",
    address:{
        street:"chandpur",
        city:"malda",
        state:"west bengal",
        zip:79080
    }
}];
const Todo = [{
    title:"30 Minutes of walk",
    completed:true
  }
,{
    title:"30 Minutes Exercise",
    completed:false
  }
,
{
    title:"Read Books regularly",
    completed:false
  },
{
    title:"30 Minutes of Coading Everyday",
    completed:true
  }
];
const Article = [{
  title:"Physics Solid-state Physics",
  content:"These comprehensive lecture notes cover various topics in solid-state physics. Professor Simon has put effort into making them clear, complete, and error-free.",
  author:{
    name:"Professor Steven H. Simon",
    bio:"Steven H. Simon is an American theoretical physics professor at Oxford University since 2009. He also holds the position of professorial fellow at Somerville College, Oxford."
  }
},
{
  title:"Quantum Mechanics",
  content:"*Path Integral Formulation: Feynman developed the path integral formulation of quantum mechanics, which provides a powerful way to describe quantum processes. *Feynman Diagrams: He introduced Feynman diagrams, a visual representation of particle interactions.",
  author:{
    name :"Richard Feynman",
    bio:"Richard Phillips Feynman (1918–1988) was an American theoretical physicist. He made significant contributions to quantum mechanics, quantum electrodynamics, and the superfluidity of liquid helium."
  }
}];
const Event = [{
  title:"Science Fair",
  date:"18/9/2023",
  location:"Pakur JH",
  description:"A science fair is an event where students conduct independent science projects and present their results. It can occur at different levels, including classroom, school-wide, regional, state, and international"
},
{
  
    title:"Book Fair",
    date:"16/2/2023",
    location:"West Bengal",
    description:"A book fair is a sales event which focuses on the sale of books. Many publishers participate in book fairs and sell their books23. The main purpose of a book fair is not sales, but it offers a rare opportunity to assess the advancement made in the publication of books . "
  
}]
// const incompleteTodo = Todo.filter((todo)=> !todo.completed);
Event.sort((a,b)=>a.date-b.date);
  return (
    
      <div className="App">
        <div className='product'>

        {
          products.map((prod, index) => {
            return <ProductAccept names = {prod.name} prices ={prod.price} imageUrls={prod.imageUrl} descriptions={prod.description} />
          })
          
        }
        </div>
        <div className='userProfile'>
        {
          UserProfile.map((profile,index) =>{
            return <Profilecard user ={profile.name} userema ={profile.email} useradd = {profile.address}/>
          })
        }
        </div>
        <div>
        {
          Todo.map((tod,index)=>{
            return <TodoList tit={tod}  />
          })
          
        }
        </div>
        <div>
          {
            Article.map((arti,index)=>{
              return <ArticleList titl={arti.title} conts={arti.content} auth={arti.author}/>
            })
          }
        </div>
        <div>
          {
            Event.map((eve,index)=>{
              return <EventSchedule tit={eve.title} dat={eve.date} loc={eve.location} des={eve.description}/>
            })
          }
        </div>
      </div>
  );
}

export default App;
