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
                Postagens
                Temas
                Cadastrar Tema
                Perfil
                
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
