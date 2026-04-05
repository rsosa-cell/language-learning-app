import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { challengesEnum } from "@/db/schema";
import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql, { schema });

type ChallengeType = (typeof challengesEnum.enumValues)[number];

type Option = {
  text: string;
  correct: boolean;
  imageSrc?: string;
  audioSrc?: string;
};

type Challenge = {
  order: number;
  type: ChallengeType;
  question: string;
  options: Option[];
};

type Lesson = {
  title: string;
  order: number;
  challenges: Challenge[];
};

type Unit = {
  title: string;
  description: string;
  order: number;
  lessons: Lesson[];
};

type Course = {
  title: string;
  slug: string;
  imageSrc: string;
  units: Unit[];
};

const content: Course[] = [
  {
  title: "Spanish",
  slug: "spanish",
  imageSrc: "/es.svg",
  units: [
    {
      title: "Unit 1",
      description: "Learn the basics of Spanish",
      order: 1,
      lessons: [
        {
          title: "Nouns 1",
          order: 1,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the man"?',
              options: [
                { text: "el hombre", correct: true, imageSrc: "/man.svg", audioSrc: "/es_man.mp3" },
                { text: "la mujer", correct: false, imageSrc: "/woman.svg", audioSrc: "/es_woman.mp3" },
                { text: "el robot", correct: false, imageSrc: "/robot.svg", audioSrc: "/es_robot.mp3" },
              ],
            },
            {
              order: 2,
              type: "ASSIST",
              question: '"the man"',
              options: [
                { text: "el hombre", correct: true, audioSrc: "/es_man.mp3" },
                { text: "la mujer", correct: false, audioSrc: "/es_woman.mp3" },
                { text: "el robot", correct: false, audioSrc: "/es_robot.mp3" },
              ],
            },
            {
              order: 3,
              type: "SELECT",
              question: 'Which one is "the woman"?',
              options: [
                { text: "la mujer", correct: true, imageSrc: "/woman.svg", audioSrc: "/es_woman.mp3" },
                { text: "el hombre", correct: false, imageSrc: "/man.svg", audioSrc: "/es_man.mp3" },
                { text: "el robot", correct: false, imageSrc: "/robot.svg", audioSrc: "/es_robot.mp3" },
              ],
            },
            {
              order: 4,
              type: "ASSIST",
              question: '"the woman"',
              options: [
                { text: "la mujer", correct: true, audioSrc: "/es_woman.mp3" },
                { text: "el hombre", correct: false, audioSrc: "/es_man.mp3" },
                { text: "el robot", correct: false, audioSrc: "/es_robot.mp3" },
              ],
            },
          ],
        },
        {
          title: "Nouns 2",
          order: 2,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the boy"?',
              options: [
                { text: "el niño", correct: true, imageSrc: "/boy.svg", audioSrc: "/es_boy.mp3" },
                { text: "el hombre", correct: false, imageSrc: "/man.svg", audioSrc: "/es_man.mp3" },
                { text: "la mujer", correct: false, imageSrc: "/woman.svg", audioSrc: "/es_woman.mp3" },
              ],
            },
            {
              order: 2,
              type: "ASSIST",
              question: '"the boy"',
              options: [
                { text: "el niño", correct: true, audioSrc: "/es_boy.mp3" },
                { text: "el hombre", correct: false, audioSrc: "/es_man.mp3" },
                { text: "la mujer", correct: false, audioSrc: "/es_woman.mp3" },
              ],
            },
            {
              order: 3,
              type: "SELECT",
              question: 'Which one is "the robot"?',
              options: [
                { text: "el robot", correct: true, imageSrc: "/robot.svg", audioSrc: "/es_robot.mp3" },
                { text: "el niño", correct: false, imageSrc: "/boy.svg", audioSrc: "/es_boy.mp3" },
                { text: "la mujer", correct: false, imageSrc: "/woman.svg", audioSrc: "/es_woman.mp3" },
              ],
            },
            {
              order: 4,
              type: "SELECT",
              question: 'Which one is "the zombie"?',
              options: [
                { text: "el zombi", correct: true, imageSrc: "/zombie.svg", audioSrc: "/es_zombie.mp3" },
                { text: "el robot", correct: false, imageSrc: "/robot.svg", audioSrc: "/es_robot.mp3" },
                { text: "el hombre", correct: false, imageSrc: "/man.svg", audioSrc: "/es_man.mp3" },
              ],
            },
          ],
        },
        {
          title: "Review",
          order: 3,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the man"?',
              options: [
                { text: "el hombre", correct: true, imageSrc: "/man.svg", audioSrc: "/es_man.mp3" },
                { text: "el zombi", correct: false, imageSrc: "/zombie.svg", audioSrc: "/es_zombie.mp3" },
                { text: "el niño", correct: false, imageSrc: "/boy.svg", audioSrc: "/es_boy.mp3" },
              ],
            },
            {
              order: 2,
              type: "ASSIST",
              question: '"the woman"',
              options: [
                { text: "la mujer", correct: true, audioSrc: "/es_woman.mp3" },
                { text: "el hombre", correct: false, audioSrc: "/es_man.mp3" },
                { text: "el robot", correct: false, audioSrc: "/es_robot.mp3" },
              ],
            },
          ],
        },
        {
          title: "Phrases",
          order: 4,
          challenges: [
            {
              order: 1,
              type: "ASSIST",
              question: '"hello"',
              options: [
                { text: "hola", correct: true, audioSrc: "/es_hola.mp3" },
                { text: "adiós", correct: false, audioSrc: "/es_adios.mp3" },
                { text: "gracias", correct: false, audioSrc: "/es_gracias.mp3" },
              ],
            },
            {
              order: 2,
              type: "ASSIST",
              question: '"thank you"',
              options: [
                { text: "hola", correct: false, audioSrc: "/es_hola.mp3" },
                { text: "adiós", correct: false, audioSrc: "/es_adios.mp3" },
                { text: "gracias", correct: true, audioSrc: "/es_gracias.mp3" },
              ],
            },
            {
              order: 3,
              type: "ASSIST",
              question: '"goodbye"',
              options: [
                { text: "adiós", correct: true, audioSrc: "/es_adios.mp3" },
                { text: "hola", correct: false, audioSrc: "/es_hola.mp3" },
                { text: "gracias", correct: false, audioSrc: "/es_gracias.mp3" },
              ],
            },
          ],
        },
        {
          title: "Final Review",
          order: 5,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the robot"?',
              options: [
                { text: "el robot", correct: true, imageSrc: "/robot.svg", audioSrc: "/es_robot.mp3" },
                { text: "la mujer", correct: false, imageSrc: "/woman.svg", audioSrc: "/es_woman.mp3" },
                { text: "el niño", correct: false, imageSrc: "/boy.svg", audioSrc: "/es_boy.mp3" },
              ],
            },
            {
              order: 2,
              type: "ASSIST",
              question: '"hello"',
              options: [
                { text: "hola", correct: true, audioSrc: "/es_hola.mp3" },
                { text: "adiós", correct: false, audioSrc: "/es_adios.mp3" },
                { text: "el hombre", correct: false, audioSrc: "/es_man.mp3" },
              ],
            },
          ],
        },
      ],
    },
    { title: "Unit 2",
      description: "Animals and simple actions",
      order: 2,
      lessons: [
        { title: "Animals 1", order: 1,
          challenges: [
            { order: 1,
              type: "SELECT",
              question: 'Which one is "the dog"?',
              options: [
                { text: "el perro", correct: true, imageSrc: "/dog.png", audioSrc: "/es_perro.mp3" },
                { text: "el gato", correct: false, imageSrc: "/cat.png", audioSrc: "/es_gato.mp3" },
              ],
            },
          ],
        },
        { title: "Animals 2", order: 2,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the cat"?',
              options: [
                { text: "el gato", correct: true, imageSrc: "/cat.png", audioSrc: "/es_gato.mp3" },
                { text: "el perro", correct: false, imageSrc: "/dog.png", audioSrc: "/es_perro.mp3" },
              ],
            },
          ],
        },
        { title: "Actions", order: 3,
          challenges: [
            {
              order: 1,
              type: "ASSIST",
              question: '"to run"',
              options: [
                { text: "correr", correct: true, audioSrc: "/es_correr.mp3" },
                { text: "comer", correct: false, audioSrc: "/es_comer.mp3" },
              ],
            },
          ],
        },
        { title: "Phrases 2", order: 4,
          challenges: [
            {
              order: 1,
              type: "ASSIST",
              question: '"good morning"',
              options: [
                { text: "buenos días", correct: true, audioSrc: "/es_buenos_dias.mp3" },
                { text: "buenas noches", correct: false, audioSrc: "/es_buenas_noches.mp3" },
              ],
            },
          ],
        },
        { title: "Final Review 2", order: 5,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the dog"?',
              options: [
                { text: "el perro", correct: true, imageSrc: "/dog.png", audioSrc: "/es_perro.mp3" },
                { text: "el gato", correct: false, imageSrc: "/cat.png", audioSrc: "/es_gato.mp3" },
              ],
            },
          ],
        },
      ],
    },
  ],
},
{
  title: "Italian",
  slug: "italian",
  imageSrc: "/it.svg",
  units: [
    {
      title: "Unit 1",
      description: "Learn the basics of Italian",
      order: 1,
      lessons: [
        {
          title: "Nouns 1",
          order: 1,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the man"?',
              options: [
                { text: "l'uomo", correct: true, imageSrc: "/man.svg", audioSrc: "/it_man.mp3" },
                { text: "la donna", correct: false, imageSrc: "/woman.svg", audioSrc: "/it_woman.mp3" },
                { text: "il robot", correct: false, imageSrc: "/robot.svg", audioSrc: "/it_robot.mp3" },
              ],
            },
            {
              order: 2,
              type: "ASSIST",
              question: '"the man"',
              options: [
                { text: "l'uomo", correct: true, audioSrc: "/it_man.mp3" },
                { text: "la donna", correct: false, audioSrc: "/it_woman.mp3" },
                { text: "il robot", correct: false, audioSrc: "/it_robot.mp3" },
              ],
            },
            {
              order: 3,
              type: "SELECT",
              question: 'Which one is "the woman"?',
              options: [
                { text: "la donna", correct: true, imageSrc: "/woman.svg", audioSrc: "/it_woman.mp3" },
                { text: "l'uomo", correct: false, imageSrc: "/man.svg", audioSrc: "/it_man.mp3" },
                { text: "il robot", correct: false, imageSrc: "/robot.svg", audioSrc: "/it_robot.mp3" },
              ],
            },
            {
              order: 4,
              type: "ASSIST",
              question: '"the woman"',
              options: [
                { text: "la donna", correct: true, audioSrc: "/it_woman.mp3" },
                { text: "l'uomo", correct: false, audioSrc: "/it_man.mp3" },
                { text: "il robot", correct: false, audioSrc: "/it_robot.mp3" },
              ],
            },
          ],
        },
        {
          title: "Nouns 2",
          order: 2,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the boy"?',
              options: [
                { text: "il ragazzo", correct: true, imageSrc: "/boy.svg", audioSrc: "/it_boy.mp3" },
                { text: "l'uomo", correct: false, imageSrc: "/man.svg", audioSrc: "/it_man.mp3" },
                { text: "la donna", correct: false, imageSrc: "/woman.svg", audioSrc: "/it_woman.mp3" },
              ],
            },
            {
              order: 2,
              type: "ASSIST",
              question: '"the boy"',
              options: [
                { text: "il ragazzo", correct: true, audioSrc: "/it_boy.mp3" },
                { text: "l'uomo", correct: false, audioSrc: "/it_man.mp3" },
                { text: "la donna", correct: false, audioSrc: "/it_woman.mp3" },
              ],
            },
            {
              order: 3,
              type: "SELECT",
              question: 'Which one is "the robot"?',
              options: [
                { text: "il robot", correct: true, imageSrc: "/robot.svg", audioSrc: "/it_robot.mp3" },
                { text: "il ragazzo", correct: false, imageSrc: "/boy.svg", audioSrc: "/it_boy.mp3" },
                { text: "la donna", correct: false, imageSrc: "/woman.svg", audioSrc: "/it_woman.mp3" },
              ],
            },
            {
              order: 4,
              type: "SELECT",
              question: 'Which one is "the zombie"?',
              options: [
                { text: "lo zombie", correct: true, imageSrc: "/zombie.svg", audioSrc: "/it_zombie.mp3" },
                { text: "il robot", correct: false, imageSrc: "/robot.svg", audioSrc: "/it_robot.mp3" },
                { text: "l'uomo", correct: false, imageSrc: "/man.svg", audioSrc: "/it_man.mp3" },
              ],
            },
          ],
        },
        {
          title: "Review",
          order: 3,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the man"?',
              options: [
                { text: "l'uomo", correct: true, imageSrc: "/man.svg", audioSrc: "/it_man.mp3" },
                { text: "lo zombie", correct: false, imageSrc: "/zombie.svg", audioSrc: "/it_zombie.mp3" },
                { text: "il ragazzo", correct: false, imageSrc: "/boy.svg", audioSrc: "/it_boy.mp3" },
              ],
            },
            {
              order: 2,
              type: "ASSIST",
              question: '"the woman"',
              options: [
                { text: "la donna", correct: true, audioSrc: "/it_woman.mp3" },
                { text: "l'uomo", correct: false, audioSrc: "/it_man.mp3" },
                { text: "il robot", correct: false, audioSrc: "/it_robot.mp3" },
              ],
            },
          ],
        },
        {
          title: "Phrases",
          order: 4,
          challenges: [
            {
              order: 1,
              type: "ASSIST",
              question: '"hello"',
              options: [
                { text: "ciao", correct: true, audioSrc: "/it_hello.mp3" },
                { text: "arrivederci", correct: false, audioSrc: "/it_bye.mp3" },
                { text: "grazie", correct: false, audioSrc: "/it_thanks.mp3" },
              ],
            },
            {
              order: 2,
              type: "ASSIST",
              question: '"goodbye"',
              options: [
                { text: "arrivederci", correct: true, audioSrc: "/it_bye.mp3" },
                { text: "ciao", correct: false, audioSrc: "/it_hello.mp3" },
                { text: "grazie", correct: false, audioSrc: "/it_thanks.mp3" },
              ],
            },
          ],
        },
        {
          title: "Final Review",
          order: 5,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the robot"?',
              options: [
                { text: "il robot", correct: true, imageSrc: "/robot.svg", audioSrc: "/it_robot.mp3" },
                { text: "la donna", correct: false, imageSrc: "/woman.svg", audioSrc: "/it_woman.mp3" },
                { text: "il ragazzo", correct: false, imageSrc: "/boy.svg", audioSrc: "/it_boy.mp3" },
              ],
            },
            {
              order: 2,
              type: "ASSIST",
              question: '"hello"',
              options: [
                { text: "ciao", correct: true, audioSrc: "/it_hello.mp3" },
                { text: "arrivederci", correct: false, audioSrc: "/it_bye.mp3" },
                { text: "l'uomo", correct: false, audioSrc: "/it_man.mp3" },
              ],
            },
          ],
        },
      ],
    },

    {
      title: "Unit 2",
      description: "Animals and simple actions",
      order: 2,
      lessons: [
        {
          title: "Animals 1",
          order: 1,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the dog"?',
              options: [
                { text: "il cane", correct: true, imageSrc: "/dog.png", audioSrc: "/it_dog.mp3" },
                { text: "il gatto", correct: false, imageSrc: "/cat.png", audioSrc: "/it_cat.mp3" },
              ],
            },
          ],
        },
        {
          title: "Animals 2",
          order: 2,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the cat"?',
              options: [
                { text: "il gatto", correct: true, imageSrc: "/cat.png", audioSrc: "/it_cat.mp3" },
                { text: "il cane", correct: false, imageSrc: "/dog.png", audioSrc: "/it_dog.mp3" },
              ],
            },
          ],
        },
        {
          title: "Actions",
          order: 3,
          challenges: [
            {
              order: 1,
              type: "ASSIST",
              question: '"to run"',
              options: [
                { text: "correre", correct: true, audioSrc: "/it_correre.mp3" },
                { text: "mangiare", correct: false, audioSrc: "/it_mangiare.mp3" },
              ],
            },
          ],
        },
        {
          title: "Phrases 2",
          order: 4,
          challenges: [
            {
              order: 1,
              type: "ASSIST",
              question: '"good morning"',
              options: [
                { text: "buongiorno", correct: true, audioSrc: "/it_buongiorno.mp3" },
                { text: "buonanotte", correct: false, audioSrc: "/it_buonanotte.mp3" },
              ],
            },
          ],
        },
        {
          title: "Final Review 2",
          order: 5,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the dog"?',
              options: [
                { text: "il cane", correct: true, imageSrc: "/dog.png", audioSrc: "/it_dog.mp3" },
                { text: "il gatto", correct: false, imageSrc: "/cat.png", audioSrc: "/it_cat.mp3" },
              ],
            },
          ],
        },
      ],
    },
  ],
},
{
  title: "Japanese",
  slug: "japanese",
  imageSrc: "/jp.svg",
  units: [
    {
      title: "Unit 1",
      description: "Learn the basics of Japanese",
      order: 1,
      lessons: [
        {
          title: "Nouns 1",
          order: 1,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the man"?',
              options: [
                { text: "おとこ (otoko)", correct: true, imageSrc: "/man.svg", audioSrc: "/jp_man.mp3" },
                { text: "おんな (onna)", correct: false, imageSrc: "/woman.svg", audioSrc: "/jp_woman.mp3" },
                { text: "ロボット (robotto)", correct: false, imageSrc: "/robot.svg", audioSrc: "/jp_robot.mp3" },
              ],
            },
          ],
        },

        {
          title: "Nouns 2",
          order: 2,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the boy"?',
              options: [
                { text: "おとこのこ (otokonoko)", correct: true, imageSrc: "/boy.svg", audioSrc: "/jp_boy.mp3" },
                { text: "おとこ (otoko)", correct: false, imageSrc: "/man.svg", audioSrc: "/jp_man.mp3" },
              ],
            },
          ],
        },

        {
          title: "Review",
          order: 3,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the man"?',
              options: [
                { text: "おとこ (otoko)", correct: true, imageSrc: "/man.svg", audioSrc: "/jp_man.mp3" },
                { text: "おとこのこ (otokonoko)", correct: false, imageSrc: "/boy.svg", audioSrc: "/jp_boy.mp3" },
              ],
            },
          ],
        },

        {
          title: "Phrases",
          order: 4,
          challenges: [
            {
              order: 1,
              type: "ASSIST",
              question: '"hello"',
              options: [
                { text: "こんにちは (konnichiwa)", correct: true, audioSrc: "/jp_hello.mp3" },
                { text: "さようなら (sayounara)", correct: false, audioSrc: "/jp_bye.mp3" },
              ],
            },
          ],
        },

        {
          title: "Final Review",
          order: 5,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the robot"?',
              options: [
                { text: "ロボット (robotto)", correct: true, imageSrc: "/robot.svg", audioSrc: "/jp_robot.mp3" },
                { text: "おんな (onna)", correct: false, imageSrc: "/woman.svg", audioSrc: "/jp_woman.mp3" },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Unit 2",
      description: "Animals and simple actions",
      order: 2,
      lessons: [
        {
          title: "Animals 1",
          order: 1,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the dog"?',
              options: [
                { text: "いぬ (inu)", correct: true, imageSrc: "/dog.png", audioSrc: "/jp_dog.mp3" },
                { text: "ねこ (neko)", correct: false, imageSrc: "/cat.png", audioSrc: "/jp_cat.mp3" },
              ],
            },
          ],
        },

        {
          title: "Animals 2",
          order: 2,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the cat"?',
              options: [
                { text: "ねこ (neko)", correct: true, imageSrc: "/cat.png", audioSrc: "/jp_cat.mp3" },
                { text: "いぬ (inu)", correct: false, imageSrc: "/dog.png", audioSrc: "/jp_dog.mp3" },
              ],
            },
          ],
        },

        {
          title: "Actions",
          order: 3,
          challenges: [
            {
              order: 1,
              type: "ASSIST",
              question: '"to run"',
              options: [
                { text: "はしる (hashiru)", correct: true, audioSrc: "/jp_run.mp3" },
                { text: "たべる (taberu)", correct: false, audioSrc: "/jp_eat.mp3" },
              ],
            },
          ],
        },

        {
          title: "Phrases 2",
          order: 4,
          challenges: [
            {
              order: 1,
              type: "ASSIST",
              question: '"thank you"',
              options: [
                { text: "ありがとう (arigatou)", correct: true, audioSrc: "/jp_thanks.mp3" },
                { text: "こんにちは (konnichiwa)", correct: false, audioSrc: "/jp_hello.mp3" },
              ],
            },
          ],
        },

        {
          title: "Final Review 2",
          order: 5,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the dog"?',
              options: [
                { text: "いぬ (inu)", correct: true, imageSrc: "/dog.png", audioSrc: "/jp_dog.mp3" },
                { text: "ねこ (neko)", correct: false, imageSrc: "/cat.png", audioSrc: "/jp_cat.mp3" },
              ],
            },
          ],
        },
      ],
    },
  ],
},
 {
  title: "French",
  slug: "french",
  imageSrc: "/fr.svg",
  units: [
    {
      title: "Unit 1",
      description: "Learn the basics of French",
      order: 1,
      lessons: [
        {
          title: "Nouns 1",
          order: 1,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the man"?',
              options: [
                { text: "l'homme", correct: true, imageSrc: "/man.svg", audioSrc: "/fr_man.mp3" },
                { text: "la femme", correct: false, imageSrc: "/woman.svg", audioSrc: "/fr_woman.mp3" },
                { text: "le robot", correct: false, imageSrc: "/robot.svg", audioSrc: "/fr_robot.mp3" },
              ],
            },
            {
              order: 2,
              type: "ASSIST",
              question: '"the man"',
              options: [
                { text: "l'homme", correct: true, audioSrc: "/fr_man.mp3" },
                { text: "la femme", correct: false, audioSrc: "/fr_woman.mp3" },
                { text: "le robot", correct: false, audioSrc: "/fr_robot.mp3" },
              ],
            },
            {
              order: 3,
              type: "SELECT",
              question: 'Which one is "the woman"?',
              options: [
                { text: "la femme", correct: true, imageSrc: "/woman.svg", audioSrc: "/fr_woman.mp3" },
                { text: "l'homme", correct: false, imageSrc: "/man.svg", audioSrc: "/fr_man.mp3" },
                { text: "le robot", correct: false, imageSrc: "/robot.svg", audioSrc: "/fr_robot.mp3" },
              ],
            },
            {
              order: 4,
              type: "ASSIST",
              question: '"the woman"',
              options: [
                { text: "la femme", correct: true, audioSrc: "/fr_woman.mp3" },
                { text: "l'homme", correct: false, audioSrc: "/fr_man.mp3" },
                { text: "le robot", correct: false, audioSrc: "/fr_robot.mp3" },
              ],
            },
          ],
        },
        {
          title: "Nouns 2",
          order: 2,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the boy"?',
              options: [
                { text: "le garçon", correct: true, imageSrc: "/boy.svg", audioSrc: "/fr_boy.mp3" },
                { text: "l'homme", correct: false, imageSrc: "/man.svg", audioSrc: "/fr_man.mp3" },
                { text: "la femme", correct: false, imageSrc: "/woman.svg", audioSrc: "/fr_woman.mp3" },
              ],
            },
            {
              order: 2,
              type: "ASSIST",
              question: '"the boy"',
              options: [
                { text: "le garçon", correct: true, audioSrc: "/fr_boy.mp3" },
                { text: "l'homme", correct: false, audioSrc: "/fr_man.mp3" },
                { text: "la femme", correct: false, audioSrc: "/fr_woman.mp3" },
              ],
            },
            {
              order: 3,
              type: "SELECT",
              question: 'Which one is "the robot"?',
              options: [
                { text: "le robot", correct: true, imageSrc: "/robot.svg", audioSrc: "/fr_robot.mp3" },
                { text: "le garçon", correct: false, imageSrc: "/boy.svg", audioSrc: "/fr_boy.mp3" },
                { text: "la femme", correct: false, imageSrc: "/woman.svg", audioSrc: "/fr_woman.mp3" },
              ],
            },
            {
              order: 4,
              type: "SELECT",
              question: 'Which one is "the zombie"?',
              options: [
                { text: "le zombie", correct: true, imageSrc: "/zombie.svg", audioSrc: "/fr_zombie.mp3" },
                { text: "le robot", correct: false, imageSrc: "/robot.svg", audioSrc: "/fr_robot.mp3" },
                { text: "l'homme", correct: false, imageSrc: "/man.svg", audioSrc: "/fr_man.mp3" },
              ],
            },
          ],
        },
        {
          title: "Review",
          order: 3,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the man"?',
              options: [
                { text: "l'homme", correct: true, imageSrc: "/man.svg", audioSrc: "/fr_man.mp3" },
                { text: "le zombie", correct: false, imageSrc: "/zombie.svg", audioSrc: "/fr_zombie.mp3" },
                { text: "le garçon", correct: false, imageSrc: "/boy.svg", audioSrc: "/fr_boy.mp3" },
              ],
            },
            {
              order: 2,
              type: "ASSIST",
              question: '"the woman"',
              options: [
                { text: "la femme", correct: true, audioSrc: "/fr_woman.mp3" },
                { text: "l'homme", correct: false, audioSrc: "/fr_man.mp3" },
                { text: "le robot", correct: false, audioSrc: "/fr_robot.mp3" },
              ],
            },
          ],
        },
        {
          title: "Phrases",
          order: 4,
          challenges: [
            {
              order: 1,
              type: "ASSIST",
              question: '"hello"',
              options: [
                { text: "bonjour", correct: true, audioSrc: "/fr_hello.mp3" },
                { text: "au revoir", correct: false, audioSrc: "/fr_bye.mp3" },
                { text: "merci", correct: false, audioSrc: "/fr_thanks.mp3" },
              ],
            },
            {
              order: 2,
              type: "ASSIST",
              question: '"goodbye"',
              options: [
                { text: "au revoir", correct: true, audioSrc: "/fr_bye.mp3" },
                { text: "bonjour", correct: false, audioSrc: "/fr_hello.mp3" },
                { text: "merci", correct: false, audioSrc: "/fr_thanks.mp3" },
              ],
            },
          ],
        },
        {
          title: "Final Review",
          order: 5,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the robot"?',
              options: [
                { text: "le robot", correct: true, imageSrc: "/robot.svg", audioSrc: "/fr_robot.mp3" },
                { text: "la femme", correct: false, imageSrc: "/woman.svg", audioSrc: "/fr_woman.mp3" },
                { text: "le garçon", correct: false, imageSrc: "/boy.svg", audioSrc: "/fr_boy.mp3" },
              ],
            },
            {
              order: 2,
              type: "ASSIST",
              question: '"hello"',
              options: [
                { text: "bonjour", correct: true, audioSrc: "/fr_hello.mp3" },
                { text: "au revoir", correct: false, audioSrc: "/fr_bye.mp3" },
                { text: "l'homme", correct: false, audioSrc: "/fr_man.mp3" },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Unit 2",
      description: "Animals and simple actions",
      order: 2,
      lessons: [
        {
          title: "Animals 1",
          order: 1,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the dog"?',
              options: [
                { text: "le chien", correct: true, imageSrc: "/dog.png", audioSrc: "/fr_dog.mp3" },
                { text: "le chat", correct: false, imageSrc: "/cat.png", audioSrc: "/fr_cat.mp3" },
              ],
            },
          ],
        },
        {
          title: "Animals 2",
          order: 2,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the cat"?',
              options: [
                { text: "le chat", correct: true, imageSrc: "/cat.png", audioSrc: "/fr_cat.mp3" },
                { text: "le chien", correct: false, imageSrc: "/dog.png", audioSrc: "/fr_dog.mp3" },
              ],
            },
          ],
        },
        {
          title: "Actions",
          order: 3,
          challenges: [
            {
              order: 1,
              type: "ASSIST",
              question: '"to run"',
              options: [
                { text: "courir", correct: true, audioSrc: "/fr_run.mp3" },
                { text: "manger", correct: false, audioSrc: "/fr_eat.mp3" },
              ],
            },
          ],
        },
        {
          title: "Phrases 2",
          order: 4,
          challenges: [
            {
              order: 1,
              type: "ASSIST",
              question: '"good morning"',
              options: [
                { text: "bonjour", correct: true, audioSrc: "/fr_hello.mp3" },
                { text: "bonne nuit", correct: false, audioSrc: "/fr_night.mp3" },
              ],
            },
          ],
        },
        {
          title: "Final Review 2",
          order: 5,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the dog"?',
              options: [
                { text: "le chien", correct: true, imageSrc: "/dog.png", audioSrc: "/fr_dog.mp3" },
                { text: "le chat", correct: false, imageSrc: "/cat.png", audioSrc: "/fr_cat.mp3" },
              ],
            },
          ],
        },
      ],
    },
  ],
},
{
  title: "German",
  slug: "german",
  imageSrc: "/german.svg",
  units: [
    {
      title: "Unit 1",
      description: "Learn the basics of German",
      order: 1,
      lessons: [
        {
          title: "Nouns 1",
          order: 1,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the man"?',
              options: [
                { text: "der Mann", correct: true, imageSrc: "/man.svg", audioSrc: "/german_man.mp3" },
                { text: "die Frau", correct: false, imageSrc: "/woman.svg", audioSrc: "/german_woman.mp3" },
                { text: "der Roboter", correct: false, imageSrc: "/robot.svg", audioSrc: "/german_robot.mp3" },
              ],
            },
            {
              order: 2,
              type: "ASSIST",
              question: '"the man"',
              options: [
                { text: "der Mann", correct: true, audioSrc: "/german_man.mp3" },
                { text: "die Frau", correct: false, audioSrc: "/german_woman.mp3" },
                { text: "der Roboter", correct: false, audioSrc: "/german_robot.mp3" },
              ],
            },
          ],
        },
        {
          title: "Animals",
          order: 2,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the dog"?',
              options: [
                { text: "der Hund", correct: true, imageSrc: "/dog.png", audioSrc: "/german_dog.mp3" },
                { text: "die Katze", correct: false, imageSrc: "/cat.png", audioSrc: "/german_cat.mp3" },
                { text: "der Mann", correct: false, imageSrc: "/man.svg", audioSrc: "/german_man.mp3" },
              ],
            },
            {
              order: 2,
              type: "ASSIST",
              question: '"the dog"',
              options: [
                { text: "der Hund", correct: true, audioSrc: "/german_dog.mp3" },
                { text: "die Katze", correct: false, audioSrc: "/german_cat.mp3" },
              ],
            },
            {
              order: 3,
              type: "SELECT",
              question: 'Which one is "the cat"?',
              options: [
                { text: "die Katze", correct: true, imageSrc: "/cat.png", audioSrc: "/german_cat.mp3" },
                { text: "der Hund", correct: false, imageSrc: "/dog.png", audioSrc: "/german_dog.mp3" },
                { text: "der Roboter", correct: false, imageSrc: "/robot.svg", audioSrc: "/german_robot.mp3" },
              ],
            },
            {
              order: 4,
              type: "ASSIST",
              question: '"the cat"',
              options: [
                { text: "die Katze", correct: true, audioSrc: "/german_cat.mp3" },
                { text: "der Hund", correct: false, audioSrc: "/german_dog.mp3" },
              ],
            },
          ],
        },
        {
          title: "Review",
          order: 3,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the dog"?',
              options: [
                { text: "der Hund", correct: true, imageSrc: "/dog.png", audioSrc: "/german_dog.mp3" },
                { text: "die Frau", correct: false, imageSrc: "/woman.svg", audioSrc: "/german_woman.mp3" },
                { text: "der Mann", correct: false, imageSrc: "/man.svg", audioSrc: "/german_man.mp3" },
              ],
            },
            {
              order: 2,
              type: "ASSIST",
              question: '"the cat"',
              options: [
                { text: "die Katze", correct: true, audioSrc: "/german_cat.mp3" },
                { text: "der Hund", correct: false, audioSrc: "/german_dog.mp3" },
              ],
            },
          ],
        },
        {
          title: "Phrases",
          order: 4,
          challenges: [
            {
              order: 1,
              type: "ASSIST",
              question: '"hello"',
              options: [
                { text: "hallo", correct: true, audioSrc: "/german_hello.mp3" },
                { text: "auf wiedersehen", correct: false, audioSrc: "/german_goodbye.mp3" },
              ],
            },
          ],
        },
        {
          title: "Final Review",
          order: 5,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the cat"?',
              options: [
                { text: "die Katze", correct: true, imageSrc: "/cat.png", audioSrc: "/german_cat.mp3" },
                { text: "der Hund", correct: false, imageSrc: "/dog.png", audioSrc: "/german_dog.mp3" },
              ],
            },
            {
              order: 2,
              type: "ASSIST",
              question: '"hello"',
              options: [
                { text: "hallo", correct: true, audioSrc: "/german_hello.mp3" },
                { text: "auf wiedersehen", correct: false, audioSrc: "/german_goodbye.mp3" },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Unit 2",
      description: "Animals and simple actions",
      order: 2,
      lessons: [
        {
          title: "Animals 1",
          order: 1,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the dog"?',
              options: [
                { text: "der Hund", correct: true, imageSrc: "/dog.png", audioSrc: "/german_dog.mp3" },
                { text: "die Katze", correct: false, imageSrc: "/cat.png", audioSrc: "/german_cat.mp3" },
              ],
            },
          ],
        },
        {
          title: "Animals 2",
          order: 2,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the cat"?',
              options: [
                { text: "die Katze", correct: true, imageSrc: "/cat.png", audioSrc: "/german_cat.mp3" },
                { text: "der Hund", correct: false, imageSrc: "/dog.png", audioSrc: "/german_dog.mp3" },
              ],
            },
          ],
        },
        {
          title: "Actions",
          order: 3,
          challenges: [
            {
              order: 1,
              type: "ASSIST",
              question: '"to run"',
              options: [
                { text: "laufen", correct: true, audioSrc: "/german_run.mp3" },
                { text: "essen", correct: false, audioSrc: "/german_eat.mp3" },
              ],
            },
          ],
        },
        {
          title: "Phrases 2",
          order: 4,
          challenges: [
            {
              order: 1,
              type: "ASSIST",
              question: '"good morning"',
              options: [
                { text: "guten morgen", correct: true, audioSrc: "/german_morning.mp3" },
                { text: "gute nacht", correct: false, audioSrc: "/german_night.mp3" },
              ],
            },
          ],
        },
        {
          title: "Final Review 2",
          order: 5,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the dog"?',
              options: [
                { text: "der Hund", correct: true, imageSrc: "/dog.png", audioSrc: "/german_dog.mp3" },
                { text: "die Katze", correct: false, imageSrc: "/cat.png", audioSrc: "/german_cat.mp3" },
              ],
            },
          ],
        },
      ],
    },
  ],
},
{
  title: "Mandarin",
  slug: "mandarin",
  imageSrc: "/mandarin.svg",
  units: [
    {
      title: "Unit 1",
      description: "Learn the basics of Mandarin",
      order: 1,
      lessons: [
        {
          title: "Nouns 1",
          order: 1,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the man"?',
              options: [
                { text: "男人 (nánrén)", correct: true, imageSrc: "/man.svg", audioSrc: "/zh_man.mp3" },
                { text: "女人 (nǚrén)", correct: false, imageSrc: "/woman.svg", audioSrc: "/zh_woman.mp3" },
                { text: "机器人 (jīqìrén)", correct: false, imageSrc: "/robot.svg", audioSrc: "/zh_robot.mp3" },
              ],
            },
            {
              order: 2,
              type: "ASSIST",
              question: '"the man"',
              options: [
                { text: "男人", correct: true, audioSrc: "/zh_man.mp3" },
                { text: "女人", correct: false, audioSrc: "/zh_woman.mp3" },
                { text: "机器人", correct: false, audioSrc: "/zh_robot.mp3" },
              ],
            },
          ],
        },

        {
          title: "Nouns 2",
          order: 2,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the boy"?',
              options: [
                { text: "男孩 (nánhái)", correct: true, imageSrc: "/boy.svg", audioSrc: "/zh_boy.mp3" },
                { text: "男人 (nánrén)", correct: false, imageSrc: "/man.svg", audioSrc: "/zh_man.mp3" },
                { text: "女人 (nǚrén)", correct: false, imageSrc: "/woman.svg", audioSrc: "/zh_woman.mp3" },
              ],
            },
          ],
        },

        {
          title: "Review",
          order: 3,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the man"?',
              options: [
                { text: "男人 (nánrén)", correct: true, imageSrc: "/man.svg", audioSrc: "/zh_man.mp3" },
                { text: "男孩 (nánhái)", correct: false, imageSrc: "/boy.svg", audioSrc: "/zh_boy.mp3" },
              ],
            },
          ],
        },

        {
          title: "Phrases",
          order: 4,
          challenges: [
            {
              order: 1,
              type: "ASSIST",
              question: '"hello"',
              options: [
                { text: "你好 (nǐ hǎo)", correct: true, audioSrc: "/zh_hello.mp3" },
                { text: "再见 (zài jiàn)", correct: false, audioSrc: "/zh_bye.mp3" },
              ],
            },
          ],
        },

        {
          title: "Final Review",
          order: 5,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the robot"?',
              options: [
                { text: "机器人 (jīqìrén)", correct: true, imageSrc: "/robot.svg", audioSrc: "/zh_robot.mp3" },
                { text: "女人 (nǚrén)", correct: false, imageSrc: "/woman.svg", audioSrc: "/zh_woman.mp3" },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Unit 2",
      description: "Animals and simple actions",
      order: 2,
      lessons: [
        {
          title: "Animals 1",
          order: 1,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the dog"?',
              options: [
                { text: "狗 (gǒu)", correct: true, imageSrc: "/dog.png", audioSrc: "/zh_dog.mp3" },
                { text: "猫 (māo)", correct: false, imageSrc: "/cat.png", audioSrc: "/zh_cat.mp3" },
              ],
            },
          ],
        },

        {
          title: "Animals 2",
          order: 2,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the cat"?',
              options: [
                { text: "猫 (māo)", correct: true, imageSrc: "/cat.png", audioSrc: "/zh_cat.mp3" },
                { text: "狗 (gǒu)", correct: false, imageSrc: "/dog.png", audioSrc: "/zh_dog.mp3" },
              ],
            },
          ],
        },

        {
          title: "Actions",
          order: 3,
          challenges: [
            {
              order: 1,
              type: "ASSIST",
              question: '"to run"',
              options: [
                { text: "跑 (pǎo)", correct: true, audioSrc: "/zh_run.mp3" },
                { text: "吃 (chī)", correct: false, audioSrc: "/zh_eat.mp3" },
              ],
            },
          ],
        },

        {
          title: "Phrases 2",
          order: 4,
          challenges: [
            {
              order: 1,
              type: "ASSIST",
              question: '"thank you"',
              options: [
                { text: "谢谢 (xiè xiè)", correct: true, audioSrc: "/zh_thanks.mp3" },
                { text: "你好 (nǐ hǎo)", correct: false, audioSrc: "/zh_hello.mp3" },
              ],
            },
          ],
        },

        {
          title: "Final Review 2",
          order: 5,
          challenges: [
            {
              order: 1,
              type: "SELECT",
              question: 'Which one is "the dog"?',
              options: [
                { text: "狗 (gǒu)", correct: true, imageSrc: "/dog.png", audioSrc: "/zh_dog.mp3" },
                { text: "猫 (māo)", correct: false, imageSrc: "/cat.png", audioSrc: "/zh_cat.mp3" },
              ],
            },
          ],
        },
      ],
    },
  ],
},
]

const main = async () => {
  try {
    console.log("Seeding database...");

    await db.delete(schema.challengeProgress);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challenges);
    await db.delete(schema.lessons);
    await db.delete(schema.units);
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.userSubscription);

    for (const courseData of content) {
      const [course] = await db
        .insert(schema.courses)
        .values({
          title: courseData.title,
          imageSrc: courseData.imageSrc,
        })
        .returning();

      for (const unitData of courseData.units) {
        const [unit] = await db
          .insert(schema.units)
          .values({
            title: unitData.title,
            description: unitData.description,
            order: unitData.order,
            courseId: course.id,
          })
          .returning();

        for (const lessonData of unitData.lessons) {
          const [lesson] = await db
            .insert(schema.lessons)
            .values({
              title: lessonData.title,
              order: lessonData.order,
              unitId: unit.id,
            })
            .returning();

          for (const challengeData of lessonData.challenges) {
            const [challenge] = await db
              .insert(schema.challenges)
              .values({
                type: challengeData.type,
                question: challengeData.question,
                order: challengeData.order,
                lessonId: lesson.id,
              })
              .returning();

            await db.insert(schema.challengeOptions).values(
              challengeData.options.map((opt) => ({
                challengeId: challenge.id,
                text: opt.text,
                correct: opt.correct,
                imageSrc: opt.imageSrc ?? null,
                audioSrc: opt.audioSrc ?? null,
              }))
            );
          }
        }
      }
    }

    console.log("✅ Database seeded successfully");
  } catch (error) {
    console.error(error);
    throw new Error("❌ Failed to seed database");
  }
};

main();