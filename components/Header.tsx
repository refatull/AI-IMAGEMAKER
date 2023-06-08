import Image from "next/image";

function Header() {
  return <header>
    {/* left-div */}
    <div className= "flex space-x-2 items-center">
        <Image src = 'https://media.istockphoto.com/id/540716966/vector/happy-cartoon-duck.jpg?s=612x612&w=0&k=20&c=pCypV3vH3an983rIEBXEjvg4ION6DvJynLWEyNFq5U4=' 
            alt ='logo'
            height = {30}
            width = {30}
        />

        <div>
            <h1 className = "font-bold">
                DUCK <span className= "text-yellow-500"> AI</span> Image Generator</h1>
            <h2>
                Powered by DALL.E 2, Chat GPT & Microsoft Azure
            </h2>
        </div>

    </div>





    {/* right-div */}

  </header>;
}

export default Header