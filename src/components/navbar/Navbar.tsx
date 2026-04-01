function Navbar() {
  return (
    <>
      <header 
      className="w-full flex justify-center py-4 bg-indigo-900 text-white">
        <div 
        className="container flex justify-between text-lg mx-8">
            Blog Pessoal

            <nav 
            className="flex gap-4">
                Postagens
                Temas
                Cadastrar Tema
                Perfil
                Sair

            </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
