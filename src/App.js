
import './App.css';

function App() {
  
  const onSubmit = (data) =>console.log(data)
  return (
    <>
    <div className="App">
   <form action=""onSubmit={handleSubmit(onSubmit)}>
     <input {...register("username")}type="text" />
     <br/>
<input {...register("password")}type="password" />
<br/>
<input type="submit" value="submit" />
</form>
    </div>
    </>
  );
}

export default App;
