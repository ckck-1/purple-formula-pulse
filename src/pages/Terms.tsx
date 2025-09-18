import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <main className="min-h-screen py-28 px-6 container mx-auto text-foreground">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-bold neon-text">Terms & Conditions</h1>
          <Link to="/" className="text-sm text-muted-foreground hover:text-neon-glow underline">
            ← Back to Homepage
          </Link>
        </header>

        <div className="glass-panel rounded-xl p-6 md:p-8 space-y-10">
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-purple-600/30 border border-purple-400/30">English</span>
            </div>
            <article className="prose prose-invert prose-p:leading-relaxed prose-headings:mt-8 prose-headings:mb-3 max-w-none">
              <h2>Terms and Conditions of La Formula Capital Group</h2>
              <p>Welcome to La Formula Capital Group. Before using our business and financial consulting services, we ask you to carefully read our terms and conditions. By accessing and using our services, you agree to comply with the following terms:</p>

              <h3>1. Consulting Services:</h3>
              <p>La Formula Capital Group provides business and financial consulting services with the aim of advising and guiding our clients in strategic decision-making. Our services are based on the information provided by the client and the knowledge and experience of our consulting team.</p>

              <h3>2. Client Responsibilities:</h3>
              <p>The client is responsible for providing accurate and complete information necessary for the provision of our services. La Formula Capital Group does not assume responsibility for decisions based on inaccurate or incomplete information provided by the client.</p>

              <h3>3. Confidentiality:</h3>
              <p>La Formula Capital Group is committed to maintaining the confidentiality of the information provided by the client. However, this obligation does not apply to information that is public knowledge or has been disclosed by third parties.</p>

              <h3>4. Fees and Payments:</h3>
              <p>Fees for our services will be mutually agreed upon between La Formula Capital Group and the client before commencing any work. Payments must be made according to the terms agreed upon in the service contract.</p>

              <h3>5. Intellectual Property:</h3>
              <p>All materials, reports, and documents created as part of our services are the intellectual property of La Formula Capital Group, unless otherwise agreed in writing. The client has the right to use these materials exclusively for their internal use.</p>

              <h3>6. Limitation of Liability:</h3>
              <p>La Formula Capital Group does not assume responsibility for losses, damages, or harm arising from the use of our services or the interpretation of the provided information. Our liability is limited to the amount paid for the specific services that caused the claim.</p>

              <h3>7. Service Termination:</h3>
              <p>Either party may terminate the service contract with written notice. The client is responsible for paying for services provided up to the termination date.</p>

              <h3>8. Modifications to Terms:</h3>
              <p>We reserve the right to modify these terms and conditions at any time. Modifications will be effective from the date of publication on our website.</p>

              <h3>9. Applicable Law:</h3>
              <p>These terms and conditions are governed by the laws of United States, and any dispute will be resolved through good-faith negotiation. In case of disagreement, the parties agree to submit to the jurisdiction of the competent courts.</p>

              <p>By using our services, you agree to the terms and conditions outlined above. If you have any questions or concerns, please contact us at <a href="mailto:contact@laformulacg.net">contact@laformulacg.net</a></p>
            </article>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-purple-600/30 border border-purple-400/30">Español</span>
            </div>
            <article className="prose prose-invert prose-p:leading-relaxed prose-headings:mt-8 prose-headings:mb-3 max-w-none">
              <h2>Términos y Condiciones de La Formula Capital Group</h2>
              <p>Bienvenido a La Formula Capital Group. Antes de utilizar nuestros servicios de consultoría empresarial y financiera, le pedimos que lea cuidadosamente nuestros términos y condiciones. Al acceder y utilizar nuestros servicios, usted acepta cumplir con los siguientes términos:</p>

              <h3>1. Servicios de Consultoría:</h3>
              <p>La Formula Capital Group ofrece servicios de consultoría empresarial y financiera con el objetivo de asesorar y orientar a nuestros clientes en la toma de decisiones estratégicas. Nuestros servicios se basan en la información proporcionada por el cliente y en el conocimiento y experiencia de nuestro equipo de consultoría.</p>

              <h3>2. Responsabilidades del Cliente:</h3>
              <p>El cliente es responsable de proporcionar información precisa y completa necesaria para la prestación de nuestros servicios. La Formula Capital Group no asume responsabilidad por decisiones basadas en información inexacta o incompleta proporcionada por el cliente.</p>

              <h3>3. Confidencialidad:</h3>
              <p>La Formula Capital Group se compromete a mantener la confidencialidad de la información proporcionada por el cliente. Sin embargo, esta obligación no se aplica a la información que sea de conocimiento público o que haya sido divulgada por terceros.</p>

              <h3>4. Honorarios y Pagos:</h3>
              <p>Los honorarios por nuestros servicios serán acordados mutuamente entre La Formula Capital Group y el cliente antes de iniciar cualquier trabajo. Los pagos deberán realizarse de acuerdo con los términos establecidos en el contrato de servicios.</p>

              <h3>5. Propiedad Intelectual:</h3>
              <p>Todos los materiales, informes y documentos creados como parte de nuestros servicios son propiedad intelectual de La Formula Capital Group, a menos que se acuerde lo contrario por escrito. El cliente tiene derecho a utilizar estos materiales exclusivamente para su uso interno.</p>

              <h3>6. Limitación de Responsabilidad:</h3>
              <p>La Formula Capital Group no asume responsabilidad por pérdidas, daños o perjuicios derivados del uso de nuestros servicios o de la interpretación de la información proporcionada. Nuestra responsabilidad se limita al monto pagado por los servicios específicos que dieron lugar al reclamo.</p>

              <h3>7. Terminación del Servicio:</h3>
              <p>Cualquiera de las partes puede dar por terminado el contrato de servicios con un aviso por escrito. El cliente es responsable de pagar por los servicios prestados hasta la fecha de terminación.</p>

              <h3>8. Modificaciones a los Términos:</h3>
              <p>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones serán efectivas a partir de la fecha de su publicación en nuestro sitio web.</p>

              <h3>9. Ley Aplicable:</h3>
              <p>Estos términos y condiciones se rigen por las leyes de Estados Unidos, y cualquier disputa se resolverá mediante negociación de buena fe. En caso de desacuerdo, las partes aceptan someterse a la jurisdicción de los tribunales competentes.</p>

              <p>Al utilizar nuestros servicios, usted acepta los términos y condiciones descritos anteriormente. Si tiene alguna pregunta o inquietud, por favor contáctenos en <a href="mailto:contact@laformulacg.net">contact@laformulacg.net</a></p>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
}
