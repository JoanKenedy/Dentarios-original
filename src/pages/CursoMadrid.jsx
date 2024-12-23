import { Hero } from "../components/CursoMadrid/Hero";
import { Resena } from "../components/CursoMadrid/Resena";
import { SectionVideo } from "../components/CursoMadrid/SectionVideo";
import { Flotantes } from "../components/Flotantes";
import { Formulario } from "../components/Formulario";
import { SliderClients } from "../components/SliderClients";
import { CallToAction } from "../components/CallToAction";

export const CursoMadrid = () => {
  return (
    <>
      <Hero />
      <SectionVideo />
      <Resena />
      <SliderClients />
      <Formulario />
      <CallToAction />
      <Flotantes />
    </>
  );
};
