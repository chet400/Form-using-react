import "./App.css";

export default function App() {
  return (
    <main>
      <h1 className="hello">Form In React</h1>
      <form>
      <label for="firstname">First Name:</label>
        <input name="firstname" placeholder="Enter your name " required/>
         <br/><br/>
        <label for="lastname">Last Name:</label>
        <input name="lastname" placeholder="Enter your Last name " required/>
        <br/><br/>
        <label for="email">Email:</label>
        <input name="email" placeholder="Enter your Email " required/>
        <br/><br/>
        <label for="Contact">Contact:</label>
        <input name="Contact" placeholder="Enter your Contact " required/>
        <br/><br/>
        <label for="gender">Gender</label>
        <input type="radio" name="gender"/> Male
        <input type="radio" name="gender"/> Female
        <input type="radio" name="gender"/> Other
        <br/><br/>
        <label for="Subject">Choose your Favourite Subject:</label>
        <input type="checkbox" name="Subject"/> Male
        <input type="checkbox" name="Subject"/> Female
        <input type="checkbox" name="Subject"/> Other
        <br/><br/>
        <label for="resume">
          
          Upload Resume:
        </label>  
        <input name="resume" type="file" placeholder="Resume"/>
        
      </form>
    </main>
  );
}
