import React, { useState } from "react";
import "./App.css";

const nameButtons = [
  {
    id: 0,
    name: "30 oct",
    folders: [
      {
        id: 0,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 1,
        name: "Actividad grafoplastica 2022",
      },
      {
        id: 2,
        name: "Cierre de Act. 2022",
      },
      {
        id: 3,
        name: "Dia de los Jardines",
      },
      {
        id: 4,
        name: "Festejo Aniversario 2022",
      },
      {
        id: 5,
        name: "Inicio Jardin Maternal",
      },
      {
        id: 6,
        name: "Jornada 2022",
      },
    ],
  },
  {
    id: 1,
    name: "st-maris",
    folders: [
      {
        id: 0,
        name: "Juegoteca 2022",
      },
      {
        id: 1,
        name: "Desayuno compartido 2022",
      },
    ],
  },
  {
    id: 2,
    name: "Evita",
    folders: [
      {
        id: 0,
        name: "13° Aniversario",
      },
      {
        id: 1,
        name: "25 de Mayo 2022",
      },
      {
        id: 2,
        name: "38° Aniversario",
      },
      {
        id: 3,
        name: "Actividad Bandera 2022",
      },
      {
        id: 4,
        name: "Act.Recreativa",
      },
      {
        id: 5,
        name: "Agroalimentos 2022",
      },
      {
        id: 6,
        name: "Egreso Jardin Maternal 2022",
      },
      {
        id: 8,
        name: "Prevencion de incendios 2022",
      },
      {
        id: 9,
        name: "Dia de la Madre 2022",
      },
      {
        id: 10,
        name: "Dia de la Tradicion 2022",
      },
      {
        id: 11,
        name: "Esc.614 2022",
      },
      {
        id: 12,
        name: "Festejo de las Infancias 2022",
      },
      {
        id: 13,
        name: "Primavera Adultos Mayores 2022",
      },
      {
        id: 14,
        name: "Jornada Pedagogica 2022",
      },
      {
        id: 15,
        name: "Juegoteca Familiar 2022",
      },
      {
        id: 16,
        name: "Parque Saavedra 2022",
      },
      {
        id: 17,
        name: "Pro Huerta 2023",
      },
      {
        id: 18,
        name: "Reunion con Familias 2022",
      },
      {
        id: 19,
        name: "Taller Productos Navideños",
      },
      {
        id: 20,
        name: "Taller de Mosaiquismo 2022",
      },
      {
        id: 21,
        name: "Historias y Anecdotas 2022",
      },
      {
        id: 22,
        name: "Dia Jardines 2022",
      },
    ],
  },
  {
    id: 3,
    name: "San Martin",
    folders: [
      {
        id: 0,
        name: "30° Aniversario",
      },
      {
        id: 1,
        name: "Act. Dia de la Bandera 2022",
      },
      {
        id: 2,
        name: "Actividades Pedagogicas 2022",
      },
      {
        id: 3,
        name: "Boletin Buen Comer 2022",
      },
      {
        id: 4,
        name: "Act. Adultos Mayores 2022",
      },
      {
        id: 5,
        name: "Desayuno Compartido 2022",
      },
      {
        id: 6,
        name: "Dia Tradicion 2022",
      },
      {
        id: 7,
        name: "Maestras Jardineras 2022",
      },
      {
        id: 8,
        name: "Dia Mundial del Agua 2022",
      },
      {
        id: 9,
        name: "Dia Mundial del Medio Ambiente 2022",
      },
      {
        id: 10,
        name: "Ecobotellas 2022",
      },
      {
        id: 11,
        name: "Encuentro Crecimiento Personal 2022",
      },
      {
        id: 12,
        name: "Festejo 25 de Mayo 2022",
      },
      {
        id: 13,
        name: "Previa dia de la Primavera 2022",
      },
      {
        id: 14,
        name: "Verano Adultos Mayores 2022",
      },
      {
        id: 15,
        name: "Verano Adultos Mayores2",
      },
      {
        id: 16,
        name: "Semana de la Amistad 2022",
      },
      {
        id: 17,
        name: "Taller 2022",
      },
    ],
  },
  {
    id: 4,
    name: "Los Grillitos",
    folders: [
      {
        id: 0,
        name: "Festejo dia de las Infancias 2022",
      },
      
    ],
  },
  {
    id: 5,
    name: "Maximo Abasolo",
    folders: [
      {
        id: 0,
        name: "24° Aniversario",
      },
      {
        id: 1,
        name: "Abuelas Cuenta Cuentos 2022",
      },
      {
        id: 2,
        name: "Act. Receso Invernal 2022",
      },
      {
        id: 3,
        name: "Actividades junio 2022",
      },
      {
        id: 4,
        name: "Armado de Bijouterie",
      },
      {
        id: 5,
        name: "Capacitacion",
      },
      {
        id: 6,
        name: "Cierre de Juegotecas 2022",
      },
      {
        id: 7,
        name: "Cierre de Talleres 2022",
      },
      {
        id: 8,
        name: "Cierre Taller de Arte 2022",
      },
      {
        id: 9,
        name: "Desfile Patrio 2022",
      },
      {
        id: 10,
        name: "Dia Infancias 2022",
      },
      {
        id: 11,
        name: "Jornada Entre Equipos 2022",
      },
      {
        id: 12,
        name: "Kermesse Barrial 2022",
      },
      {
        id: 13,
        name: "Programa Nacional Jugar 2022",
      },
      {
        id: 14,
        name: "Propuesta de Verano",
      },
      {
        id: 15,
        name: "Taller de Literatura 2022",
      },
      {
        id: 16,
        name: "Taller Recreativo 2022",
      },
      {
        id: 17,
        name: "Te Bingo 2022",
      },
    ],
  },
  {
    id: 7,
    name: "Don Bosco",
    folders: [
      {
        id: 0,
        name: "Inta",
      },
      {
        id: 1,
        name: "Cierre 2022",
      },
      {
        id: 2,
        name: "Dia de los Jardines 2022",
      },
      {
        id: 3,
        name: "Red Barrial 2022",
      },
      {
        id: 4,
        name: "Inicio Jardin Maternal 2022",
      },
      {
        id: 5,
        name: "Jornada Familiar Jardin Maternal 2022",
      },
      {
        id: 6,
        name: "Taller Carpinteria Artesanal 2022",
      },
    ],
  },
  {
     id: 8,
     name: "I.Quiroga",
     folders: [
    {
      id: 0,
      name: "25° Aniversario",
    },
    {
      id: 1,
      name: "Act. Intergeneracional 2022",
    },
    {
      id: 3,
      name: "Dia de los Jardines2022",
    },
    {
      id: 4,
      name: "25 Mayo 2022",
    },
    {
      id: 5,
      name: "Dia de las Infancias 2022",
    },
    {
      id: 6,
      name: "Dia de la Bandera 2022",
    },
    {
      id: 7,
      name: "Jardin Maternal",
    },
    {
      id: 8,
      name: "Jornada Recreativa 2023",
    },
    {
      id: 9,
      name: "Juegoteca Familiar 2022",
    },
    {
      id: 10,
      name: "J.Maternal",
    },
  ],
},
{
  id: 9,
  name: "P.Palazzo",
  folders: [
 {
   id: 0,
   name: "Campaña Vacunacion 2022",
 },
 {
   id: 1,
   name: "Cierre de Act.2022",
 },
 {
   id: 2,
   name: "Dia de la Tradicion 2022",
 },
 {
   id: 3,
   name: "Infancias P.Palazzo 2022",
 },
 {
   id: 4,
   name: "Jornada Personal Salud",
 },
 {
   id: 5,
   name: "Programa Girajuegos 2022",
 },
 {
   id: 6,
   name: "Armado de Barriletes 2022",
 },
 {
  id: 7,
  name: "Actividad 2022",
},
{
  id: 8,
  name: "Jornada Ludica 2022",
},
],
},
{
  id: 10,
  name: "Diadema",
  folders: [
 {
   id: 0,
   name: "Cierre de Actividades2022",
 },
 {
   id: 1,
   name: "Cierre mes de la Independencia 2022",
 },
 {
   id: 2,
   name: "Fortalecimiento Familiar",
 },
 {
   id: 3,
   name: "Jardin Maternal2023",
 },
 {
   id: 4,
   name: "Manitos Huerteras",
 },
 {
   id: 5,
   name: "Medio Ambiente J.maternal2023",
 },
 {
   id: 6,
   name: "Presentacion Libro",
 },
 {
  id: 7,
  name: "Proyecto 2023",
},
{
  id: 8,
  name: "RCP-Primeros Auxilios",
},
{
  id: 9,
  name: "Visita Personal de Salud 2022",
},
{
  id: 10,
  name: "Perspectiva de Genero 2022",
},
],
},
{
  id: 11,
  name: "P.Ortiz",
  folders: [
 {
   id: 0,
   name: "Apoyo Escolar 2022",
 },
 {
   id: 1,
   name: "Cierre de Actividades",
 },
 {
   id: 2,
   name: "Dia de las Infancias 2022",
 },
 {
   id: 3,
   name: "Elaboracion de Galletas",
 },
 {
   id: 4,
   name: "Encuentro Interg.2022",
 },
 {
   id: 5,
   name: "Feria del Libro 2022",
 },
 {
   id: 6,
   name: "Fortalecimiento R.E",
 },
 {
  id: 7,
  name: "Jardines 2022",
},
{
  id: 8,
  name: "Jornada de Act. km5",
},
{
  id: 9,
  name: "Karmesse Familias 2022",
},
{
  id: 10,
  name: "Mural",
},
{
  id: 11,
  name: "Semana de la Familia 2022",
},
{
  id: 12,
  name: "Taller Familiar 2022",
},
],
},

];

const imageFolders = {
  "Acompañamiento a las Trayectorias Escolares cierre 2022": require.context(
    "../src/images/treinta-oct/Acompañamiento",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Actividad grafoplastica 2022": require.context(
    "../src/images/treinta-oct/Actividad",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Cierre de Act. 2022": require.context(
    "../src/images/treinta-oct/Cierre",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Dia de los Jardines": require.context(
    "../src/images/treinta-oct/Dia",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Festejo Aniversario 2022": require.context(
    "../src/images/treinta-oct/aniversario30oct",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Inicio Jardin Maternal": require.context(
    "../src/images/treinta-oct/iniciojardinmaternal",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Jornada 2022": require.context(
    "../src/images/treinta-oct/Jornada2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Red Barrial 2022": require.context(
    "../src/images/cpb-donbosco/redbarrial",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Cierre 2022": require.context(
    "../src/images/cpb-donbosco/Cierre2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Dia de los Jardines 2022": require.context(
    "../src/images/cpb-donbosco/Jardines",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Inicio Jardin Maternal 2022": require.context(
    "../src/images/cpb-donbosco/Inicio2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Jornada Familiar Jardin Maternal 2022": require.context(
    "../src/images/cpb-donbosco/jornadafamiliar2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Taller Carpinteria Artesanal 2022": require.context(
    "../src/images/cpb-donbosco/taller2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Inta": require.context(
    "../src/images/cpb-donbosco/Inta",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Juegoteca 2022": require.context(
    "../src/images/st-maris/Juegoteca2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Desayuno compartido 2022": require.context(
    "../src/images/st-maris/Desayuno",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "13° Aniversario": require.context(
    "../src/images/cpb-evita/Aniversario",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "25 de Mayo 2022": require.context(
    "../src/images/cpb-evita/25",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "38° Aniversario": require.context(
    "../src/images/cpb-evita/Aniversario2",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Act.Recreativa": require.context(
    "../src/images/cpb-evita/Recreativa",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Agroalimentos 2022": require.context(
    "../src/images/cpb-evita/Agroalimentos2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Actividad Bandera 2022": require.context(
    "../src/images/cpb-evita/ActividadBandera",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Dia de la Madre 2022": require.context(
    "../src/images/cpb-evita/Madre2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Dia de la Tradicion 2022": require.context(
    "../src/images/cpb-evita/Tradicion2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Dia Jardines 2022": require.context(
    "../src/images/cpb-evita/Jardines2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Egreso Jardin Maternal 2022": require.context(
    "../src/images/cpb-evita/Egreso2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Esc.614 2022": require.context(
  "../src/images/cpb-evita/Escuela",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Festejo de las Infancias 2022": require.context(
    "../src/images/cpb-evita/Festejo2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Historias y Anecdotas 2022": require.context(
    "../src/images/cpb-evita/Anecdotas2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Jornada Pedagogica 2022": require.context(
    "../src/images/cpb-evita/Jornada2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Juegoteca Familiar 2022": require.context(
    "../src/images/cpb-evita/Juegotecafamiliar",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Parque Saavedra 2022": require.context(
    "../src/images/cpb-evita/Parque",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Prevencion de incendios 2022": require.context(
    "../src/images/cpb-evita/Prevencion",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Primavera Adultos Mayores 2022": require.context(
    "../src/images/cpb-evita/Primavera",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Pro Huerta 2023": require.context(
    "../src/images/cpb-evita/Huerta",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Reunion con Familias 2022": require.context(
    "../src/images/cpb-evita/Reunion",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Taller de Mosaiquismo 2022": require.context(
    "../src/images/cpb-evita/Mosaiquismo2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Taller Productos Navideños": require.context(
    "../src/images/cpb-evita/productosnavideños",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "30° Aniversario": require.context(
    "../src/images/cpb-smartin/30°Aniversario",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Act. Adultos Mayores 2022": require.context(
    "../src/images/cpb-smartin/adultosmayores2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Act. Dia de la Bandera 2022": require.context(
    "../src/images/cpb-smartin/bandera2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Actividades Pedagogicas 2022": require.context(
    "../src/images/cpb-smartin/pedagogica2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Boletin Buen Comer 2022": require.context(
    "../src/images/cpb-smartin/buencomer",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Desayuno Compartido 2022": require.context(
    "../src/images/cpb-smartin/desayunocompartido",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Dia Tradicion 2022": require.context(
    "../src/images/cpb-smartin/tradicion",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Maestras Jardineras 2022": require.context(
    "../src/images/cpb-smartin/jardineras",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Dia Mundial del Agua 2022": require.context(
    "../src/images/cpb-smartin/agua",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Dia Mundial del Medio Ambiente 2022": require.context(
    "../src/images/cpb-smartin/ambiente",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Ecobotellas 2022": require.context(
    "../src/images/cpb-smartin/Ecobotellas2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Encuentro Crecimiento Personal 2022": require.context(
    "../src/images/cpb-smartin/crecimiento",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Festejo 25 de Mayo 2022": require.context(
    "../src/images/cpb-smartin/25smartin",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Previa dia de la Primavera 2022": require.context(
    "../src/images/cpb-smartin/primavera",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Semana de la Amistad 2022": require.context(
    "../src/images/cpb-smartin/amistad",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Taller 2022": require.context(
    "../src/images/cpb-smartin/Taller2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Verano Adultos Mayores 2022": require.context(
    "../src/images/cpb-smartin/veranoam",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Verano Adultos Mayores2": require.context(
    "../src/images/cpb-smartin/adultosmayores2",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Festejo dia de las Infancias 2022": require.context(
    "../src/images/cpb-los-grillitos/festejoinfancias",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "24° Aniversario": require.context(
    "../src/images/cpb-max-abasolo/24°Aniversario",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Abuelas Cuenta Cuentos 2022": require.context(
    "../src/images/cpb-max-abasolo/Abuelas",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Act. Receso Invernal 2022": require.context(
    "../src/images/cpb-max-abasolo/recesoinvernal2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Actividades junio 2022": require.context(
    "../src/images/cpb-max-abasolo/actividadesjunio2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Armado de Bijouterie": require.context(
    "../src/images/cpb-max-abasolo/Bijouterie",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Capacitacion": require.context(
    "../src/images/cpb-max-abasolo/Capacitacion",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Cierre de Juegotecas 2022": require.context(
    "../src/images/cpb-max-abasolo/cierrejuegoteca2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Cierre de Talleres 2022": require.context(
    "../src/images/cpb-max-abasolo/cierretalleres2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Cierre Taller de Arte 2022": require.context(
    "../src/images/cpb-max-abasolo/cierretallerarte2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Desfile Patrio 2022": require.context(
    "../src/images/cpb-max-abasolo/desfile2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Dia Infancias 2022": require.context(
    "../src/images/cpb-max-abasolo/infanciasabasolo",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Jornada Entre Equipos 2022": require.context(
    "../src/images/cpb-max-abasolo/equipos2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Kermesse Barrial 2022": require.context(
    "../src/images/cpb-max-abasolo/kermesse2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Programa Nacional Jugar 2022": require.context(
    "../src/images/cpb-max-abasolo/jugar2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Propuesta de Verano": require.context(
    "../src/images/cpb-max-abasolo/propuestaverano2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Taller de Literatura 2022": require.context(
    "../src/images/cpb-max-abasolo/literatura2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Taller Recreativo 2022": require.context(
    "../src/images/cpb-max-abasolo/tallerrecreativo2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Te Bingo 2022": require.context(
    "../src/images/cpb-max-abasolo/tebingo2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "25 Mayo 2022": require.context(
    "../src/images/cpb-iquiroga/25Mayo2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "25° Aniversario": require.context(
    "../src/images/cpb-iquiroga/25°Aniversario",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Act. Intergeneracional 2022": require.context(
    "../src/images/cpb-iquiroga/Intergeneracional",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Dia de la Bandera 2022": require.context(
    "../src/images/cpb-iquiroga/DiaBandera2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Dia de las Infancias 2022": require.context(
    "../src/images/cpb-iquiroga/diainfancias",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Dia de los Jardines2022": require.context(
    "../src/images/cpb-iquiroga/diadelosjardines",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Jardin Maternal": require.context(
    "../src/images/cpb-iquiroga/jmaternal",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "J.Maternal": require.context(
    "../src/images/cpb-iquiroga/maternal",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Jornada Recreativa 2023": require.context(
    "../src/images/cpb-iquiroga/jrecreativa2023",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Armado de Barriletes 2022": require.context(
    "../src/images/cpb-palazzo/Barriletes2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Campaña Vacunacion 2022": require.context(
    "../src/images/cpb-palazzo/Vacunacion2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Cierre de Act.2022": require.context(
    "../src/images/cpb-palazzo/act2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Actividad 2022": require.context(
    "../src/images/cpb-palazzo/2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Infancias P.Palazzo 2022": require.context(
    "../src/images/cpb-palazzo/niño",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Jornada Ludica 2022": require.context(
    "../src/images/cpb-palazzo/ludica2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Jornada Personal Salud": require.context(
    "../src/images/cpb-palazzo/salud",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Programa Girajuegos 2022": require.context(
    "../src/images/cpb-palazzo/girajuegos2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Cierre de Actividades2022": require.context(
    "../src/images/cpb-diadema/Actividades2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Cierre mes de la Independencia 2022": require.context(
    "../src/images/cpb-diadema/Independencia2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Fortalecimiento Familiar": require.context(
    "../src/images/cpb-diadema/Fortalecimiento",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Jardin Maternal2023": require.context(
    "../src/images/cpb-diadema/jardinmaternal2023",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Manitos Huerteras": require.context(
    "../src/images/cpb-diadema/Huerteros",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Medio Ambiente J.maternal2023": require.context(
    "../src/images/cpb-diadema/medioambiente",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Perspectiva de Genero 2022": require.context(
    "../src/images/cpb-diadema/Perspectiva",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Presentacion Libro": require.context(
    "../src/images/cpb-diadema/Libro",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Proyecto 2023": require.context(
    "../src/images/cpb-diadema/Proyecto2023",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "RCP-Primeros Auxilios": require.context(
    "../src/images/cpb-diadema/RCP",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Visita Personal de Salud 2022": require.context(
    "../src/images/cpb-diadema/Visita",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Apoyo Escolar 2022": require.context(
    "../src/images/cpb-portiz/Escolar2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Cierre de Actividades": require.context(
    "../src/images/cpb-portiz/Cerrando",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "independencia2022": require.context(
    "../src/images/cpb-portiz/independencia2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Elaboracion de Galletas": require.context(
    "../src/images/cpb-portiz/galletas",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Encuentro Interg.2022": require.context(
    "../src/images/cpb-portiz/intergeneracional2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Feria del Libro 2022": require.context(
    "../src/images/cpb-portiz/feriadellibro2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Fortalecimiento R.E": require.context(
    "../src/images/cpb-portiz/fre",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Jardines 2022": require.context(
    "../src/images/cpb-portiz/j2022",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Jornada de Act. km5": require.context(
    "../src/images/cpb-portiz/km5",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Karmesse Familias 2022": require.context(
    "../src/images/cpb-portiz/karmfamilias",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Mural": require.context(
    "../src/images/cpb-portiz/Mural",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Semana de la Familia 2022": require.context(
    "../src/images/cpb-portiz/semanafamiliar",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Taller Familiar 2022": require.context(
    "../src/images/cpb-portiz/tallerfamilia",
    false,
    /\.(png|jpe?g|svg)$/
  ),

};

function App() {
  const [subButtons, setSubButtons] = useState([]);
  const [selectedImages
    , setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showTitle = (name, folders) => {
    setSubButtons(folders);
    setSelectedImages([]);
  };
  function importAll(r) {
    return r.keys().map(r);
  }
  const showImages = (folderName) => {
    const folder = subButtons.find(
      (subButton) => subButton.name === folderName
    );
    if (folder) {
      const imageContext = imageFolders[folderName];
      const images = importAll(imageContext);
      setSelectedImages(images);
      setCurrentIndex(0);
    }
  };

  const handlePrevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentIndex < selectedImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (

    <div className="container">

    { selectedImages.length > 0 ? <button onClick={() => setSelectedImages([])} className="volver" >Volver</button> : 

     <div className="menu">
     
     <h2>Galería de Imágenes</h2>

     <h3>Secretaría de Desarrollo Humano y Familia</h3>

     <h4>Dirección de C.P.B</h4>

     <div className="mainButtonsContainer">

        {nameButtons.map((button) => (
          <button className="boton" key={button.id} onClick={() => showTitle(button.name, button.folders)}>
            {button.name}
          </button>

        ))}
      </div>
      
      <br></br>

      <div className="subButtonsContainer">

        {subButtons.map((subButton) => (

          <button className = "subButton" key = {subButton.id} onClick = {() => showImages(subButton.name)}>

            {subButton.name}

          </button>
        ))}
      </div>
     </div>
      }
      <br></br>
      <div style={{ marginRight: "20px" }} className="imageContainer">
        {selectedImages.length > 0 && (
          <img
            width="600px"
            src={`${process.env.PUBLIC_URL}${selectedImages[currentIndex]}`}
            alt={`Imagen ${currentIndex + 1}`}
            className="image"
          />
        )}

      </div>

      <br></br>

      {selectedImages.length > 0 ? (

        <div className="imageNavigation">
          
          <button className = "anterior" onClick = {handlePrevImage} disabled = {currentIndex === 0}>

            Anterior

          </button>

          
          <button  className = "siguiente" onClick = {handleNextImage} disabled = {currentIndex === selectedImages.length - 1}>

            Siguiente

          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;

