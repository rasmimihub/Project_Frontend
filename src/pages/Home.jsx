import '../styles/Home.css';
import {useState } from "react";
function Home () {
    const [count, setCount] = useState(0);
    return (
        <>
        <div id="small_banner"style={{ textAlign: "center", marginTop: "0" }}>
        <h2>Welcome to Our Awesome Store! 🎉</h2>
        <p>Shop the latest trends and enjoy smooth checkout!</p>
      </div>
      <div style={{textAlign: "center", background: "seagreen", height: "100px"}}>
       < p>Clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>Click me</button> {/* Using useState for updating values internally  */}
      </div>
</>
    );
}

export default Home;