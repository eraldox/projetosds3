import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import DataTable from 'components/DataTable';
import BarChart from 'components/BarChart';
import DonutChart from 'components/DonutChart';
function App() {
  return (
    <>
      <NavBar/>
      <div className="container">
      <h1 className="text-primary px-3">Dashboard de Vendas</h1>

      <div className="row px-3">
        <div className="col-sm-6">
          <br></br>
         
          <h5 className="d-flex justify-content-center text-secondary">Taxa de sucesso (%)</h5>
          <hr></hr>
          <BarChart/>
        </div>
        <div className="col-sm-6">
          <br></br>
         
          <h5 className="d-flex justify-content-center text-secondary">Todas as vendas (%)</h5>
          <hr></hr>
          <DonutChart/>
        </div>
      </div>
      <h2 className="text-primary px-3">Vendas Realizadas</h2>
      <DataTable/>
      </div>
      
      <Footer/>
    </>
  );
}

export default App;
