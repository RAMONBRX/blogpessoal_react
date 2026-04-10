import { GithubLogoIcon,  LinkedinLogoIcon } from "@phosphor-icons/react";
import { useContext, type ReactNode } from "react";
import { AuthContext } from "../../contexts/AuthContext.tsx";


function Footer() {

     const { usuario } = useContext(AuthContext);
     
    let data = new Date().getFullYear();

    let component: ReactNode;

    if(usuario.token !== ""){
      component = (
        <footer
    className="flex justify-center bg-indigo-900 text-white">
        <div className="container flex flex-col items-center py-4">
            <p
            className=" text-xl font-bold">
                Blog Pessoal Ramon | Copyrigth: {data}

            </p>
            <p className="text-lg"> Acesse minhas redes sociais</p>
            <div className="flex gap-2">
                <LinkedinLogoIcon size={48} weight="bold"/>
                <GithubLogoIcon size={48} weight="bold"/>

            </div>

        </div>

    </footer>
      )
    }

  return (
    <>
        {component}
    </>
  )
}

export default Footer