import { Container } from "@/components/container";

export default function Contato() {
  return (
    <Container>
      <main className="flex flex-col items-center justify-center min-h-screen max-w-3xl m-auto px-2 mt-6">
        <div className=" flex flex-col items-center justify-center gap-2 pb-3">
          <h2 className="mb-3 text-xl md:text-4xl">Entre em contato conosco</h2>
          <p className="text-center px-2">
            Estamos aqui para ajudar! Se você tem alguma dúvida sobre nossos
            carros, serviços ou quer agendar um atendimento personalizado, entre
            em contato conosco.
          </p>
        </div>

        <form className="flex flex-col items-center justify-center w-full gap-3 pb-4">
          <div className="w-full">
            <label>Nome completo</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="rounded-md px-2 w-full border py-2"
            />
          </div>
          <div className="flex flex-col justify-between w-full gap-3 md:flex-row">
            <div className="w-full flex-1">
              <label>Email</label>
              <input
                type="text"
                placeholder="Digite seu email"
                className="rounded-md px-2 w-full border py-2"
              />
            </div>
            <div className="w-full flex-1">
              <label>Telefone</label>
              <input
                type="text"
                placeholder="Digite seu telefone"
                className="rounded-md px-2 w-full border py-2"
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label>Digite uma mensagem</label>
            <textarea
              placeholder="Digite uma mensagem"
              className="rounded-md px-2 py-2 h-40 border resize-none "
            />
          </div>
          <button className="bg-[#F17C0E] py-3 rounded-md w-full text-white hover:opacity-75">
            Enviar
          </button>
        </form>
      </main>
    </Container>
  );
}
