import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

function Navbar() {

  // Objeto responsável por redirecionar o usuario para uma outra rota
  const navigate = useNavigate();

  //Consumo do Contexto AuthContext (usamos a desestruturação para selecionar apenas o precisamos)
    const { handleLogout } = useContext(AuthContext);

    function  logout(){
      handleLogout();
      alert("O Usuario foi desconectado com successo!");
      navigate("/");
    }

  return (
    <>
      <header 
      className="w-full flex justify-center py-4 bg-indigo-900 text-white">
        <div 
        className="container flex justify-between text-lg mx-8">
           <Link to= "/home" className="text-2xl font-bold">
            Blog Pessoal
          </Link>
            <nav 
            className="flex gap-4">
              <Link to="/postagens">
                Postagens
                </Link>
                <Link to='/temas' className='hover:underline'>Temas</Link>
                <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                <Link to='/perfil' className='hover:underline'>Perfil</Link>
                <Link to= "" onClick={logout} className="hover:underline">
                Sair
                </Link>

            </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
