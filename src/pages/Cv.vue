<template>
    <div :class="this.opacity_transition? 'load_smoothing transparent' : 'load_smoothing'">
        <header :class="this.opacity_transition? 'smoothing' : ''">
            <h1>{{this.title}}</h1>
            <h2>{{this.name}}</h2>
            <p>{{this.catchphrase}}</p>
            <ul class="contact">
                <li>-> <a :href="this.github">GitHub</a></li>
                <li>-> <a :href="this.linkedin">LinkedIn</a></li>
                <li>{{this.tel}}</li>
                <li>-> <a :href="`mailto:${this.mail}`">{{this.mail}}</a></li>
            </ul>
        </header>
        <main>
            <section class="goche" :class="this.opacity_transition? 'smoothing' : ''">
                <h3>Compétences</h3>
                <ul>
                    <li v-for="s in this.skills" :key="s.id"><p><b>{{s}}</b></p></li>
                </ul>
                <h3>Expériences</h3>
                <ul>
                    <li v-for="e in this.experiences" :key="e.id">
                        <p><b>{{e.title}}</b></p>
                        <p>{{e.description}}</p>
                        <p>{{e.date}}</p>
                    </li>
                </ul>
                <h3>Formations</h3>
                <ul>
                    <li v-for="t in this.training" :key="t.id">
                        <p><b>{{t.title}}</b></p>
                        <p>{{t.description}}</p>
                        <p>{{t.date}}</p>
                    </li>
                </ul>
            </section>
            
            <section class="droate" :class="this.opacity_transition? 'smoothing' : ''">
                <h4>Atouts</h4>
                <ul>
                    <li v-for="s in this.soft_skills" :key="s.id">
                        <p><b>{{s.title}}</b></p>
                        <p>{{s.description}}</p>
                    </li>
                </ul>
                <h4>Langues</h4>
                <ul>
                    <li v-for="l in this.languages" :key="l.id">
                        <p><b>{{l.title}}</b> - {{l.level}}</p>
                    </li>
                </ul>
                <h4>Loisirs</h4>
                <ul>
                    <li v-for="h in this.hobbies" :key="h.id">
                        <p><b>{{h.title}}</b></p>
                        <p>{{h.description}}</p>
                    </li>
                </ul>
            </section>
        </main>
    </div>
</template>

<script>

    export default {
        name: 'CvComponent',
        data:()=>({
            opacity_transition: true,
            title: "Développeur front-end",
            name: "Alexandre Demontier : CV",
            catchphrase: "À la recherche de défis, je souhaite mettre mes compétences à l'épreuve",
            tel: "06 03 59 93 46",
            mail: "Alexandre_Demontier@hotmail.fr",
            linkedin: "https://www.linkedin.com/in/alexandre-demontier-778468167/",
            github: "https://github.com/Kirjal",
            skills: [
                "Intégration responsive et accessible en HTML, CSS, JS",
                "Travail avec les frameworks et bibliothèques : React, Vue.js, Angular, Tailwind",
                "Gestion de formulaires et requêtes vers API",
                "Gestion d'état d'une SPA avec Redux",
                "Maquettage, mise en page, dessin avec la suite Adobe et Figma",
                "Mise en place d'un CRUD basique avec Node.js, Express, et Sequelize"
            ],
            experiences: [
                {
                    title: "Développeur front-end - Incubateur 1Formation-1Job Euratechnologies",
                    description: "Travail de groupe sur un site de covoiturage en méthode agile, avec React, Redux, Tailwind en front-end, Node.js en back-end",
                    date: "2023"
                },
                {
                    title: "Design et intégration d'un site personnel",
                    description: "C'est le site sur lequel vous naviguez actuellement, fait avec Vue.js",
                    date: "2022"
                },
                {
                    title: "Organisation d'un job-dating - Clockwork Lille",
                    description: "Conception de logo, design graphique dans le cadre de Ré-actifs",
                    date: "2022"
                },
                {
                    title: "Stage en Webdesign - Association Building Seniors",
                    description: "Refonte visuelle d'un site internet avec Symfony et Bootstrap : charte graphique, maquettage, corrections de bugs, travail du responsive, intégration des maquettes",
                    date: "2021"
                }
            ],
            training: [
                {
                    title: "POEC Développement front-end - Dawan Lille",
                    description: "Travail intensif des technologies du web front, projet de groupe",
                    date: "2022"
                },
                {
                    title: "Programme Ré-actifs - Clockwork Lille",
                    description: "Développement du réseau professionnel, organisation de job-dating",
                    date: "2022"
                },
                {
                    title: "Titre professionnel niveau Bac+2 en Webdesign - AFPA Roubaix",
                    description: "Formation intensive à l'intégration web, design web, et graphisme",
                    date: "2021"
                },
                {
                    title: "Arts plastiques et appliqués - CAPV Lille, ESAAT Roubaix, ESAD Valenciennes",
                    description: "Multiples projets d'art, méthodes de création et design, organisation d'un défilé de mode, participation à un fanzine",
                    date: "2011 - 2017"
                }
            ],
            soft_skills: [
                {
                    title: "Créativité",
                    description: /*"Idées originales et goût esthétique travaillé"*/""
                },
                {
                    title: "Sens du contact",
                    description: /*"Bonne humeur et bonne entente, empathie"*/""
                },
                {
                    title: "Curiosité",
                    description: /*"Recherche de méthodes et idées, veille métier"*/""
                },
                {
                    title: "Travail d'équipe",
                    description: /*"Communication, répartition des tâches, prise de recul"*/""
                },
                {
                    title: "Adaptabilité",
                    description: /*"Dépasser les contraintes pour trouver des solutions"*/""
                }
            ],
            languages: [
                {
                    title: "Anglais",
                    level: "C2"
                },
                {
                    title: "Allemand",
                    level: "A2"
                }
            ],
            hobbies: [
                {
                    title: "Jeux vidéo",
                    description: "Travail d'équipe en raid à 12 joueurs sur Elder Scrolls Online, théorie et optimisation sur Path of Exile et Wakfu"
                },
                {
                    title: "Dessin, peinture",
                    description: "Principalement des travaux au feutre fin noir, avec plusieurs exemples dans la section \"Dessins\" de ce site"
                },
                {
                    title: "Roller",
                    description: ""
                }
            ]
        }),
        mounted(){
            scrollTo(0, 0);
            setTimeout(()=>{this.opacity_transition = false}, 100);
        }
    }
</script>

<style scoped>

    header{
        display: flex;
        gap: 10px;
        flex-flow: column wrap;
        box-shadow: 0 15px 10px -10px #0008;
        margin-bottom: 10px;
        padding-bottom: 20px;
        max-width: 1300px;
        margin: auto;
        transition: all 0.5s;
    }

    section{
        display: flex;
        gap: 5px;
        flex-flow: column wrap;
        padding-left: 20px;
        padding-right: 20px;
        transition: all 0.5s;
    }

    main{
        display: flex;
        flex-flow: column wrap;
        padding-bottom: 100px;
        max-width: 1300px;
        margin: auto;
    }

    h1{
        text-align: center;
        margin: auto;
        order: 2;
        font-size: 2.5rem;
    }

    h2{
        order: 1;
        font-weight: normal;
        color: var(--title-color);
        background-color: var(--title-bg);
        margin-bottom: 10px;
        padding: 3px 0 5px 7px;
        width: 100%;
    }

    h3, h4{
        width: 300px;
        padding: 3px 50px 5px;
        border-radius: 50px;
        color: var(--title-color);
        background-color: var(--title-bg);
        transition: all 0.5s;
    }

    h3{
        width: 300px;
        font-size: 1.8rem;
        margin: 15px auto 0 -40px;
        text-align: left;
    }

    .goche ul b, .droate ul b{
        display: inline-block;
    }

    .goche ul b, .droate ul b{
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 5px 25px;
        box-shadow: 0 15px 10px -10px #0008;
    }

    .droate ul li{
        margin: 10px 0;
    }

    h4{
        width: 250px;
        font-size: 1.6rem;
        margin: /*15px -40px 0 auto*/15px auto 0 -40px;
        text-align: left;
    }

    .droate ul{
        margin-right: 20px;
    }

    b{
        font-size: 1.1rem;
    }

    header p{
        order: 3;
        text-align: left;
        font-style: italic;
        padding: 20px 10px 0 10px;
        width: 300px;
    }

    .contact{
        order: 4;
        text-align: right;
        font-size: 0.95rem;
        padding: 0 10px 10px 0;
    }

    .contact a{
        color: var(--main-text-color);
        background-color: transparent;
        font-weight: normal;
        padding:0;
    }

    .contact a:hover{
        text-decoration: underline;
    }

    main li{
        display: flex;
        flex-flow: column wrap;
        gap: 5px;
    }

    .goche li p:not(:first-child){
        margin-left: 20px;
    }
    
    main ul{
        display: flex;
        flex-flow: column;
        gap: 10px;
        padding: 10px 0
    }

    .droate ul{
        text-align: left;
    }

    @media (max-width: 450px){
        h1{
            width: 280px;
        }
    }

    @media (min-width: 600px){
        header{
            flex-flow: row wrap;
            gap: 0;
            justify-content: space-between;
        }
        header p{
            padding: 0 0 0 20px;
            align-self: center;
            max-width: 50%;
            width: auto;
        }
        .contact{
            padding: 0 20px 0 0;
            align-self: center;
        }
        h1{
            width: 100%;
            margin: 10px auto 20px;
        }
        h2{
            width: 100%;
        }
        .goche ul b, .droate ul b{
            padding: 5px 30px;
        }
    }

    @media (min-width: 830px){
        h1{
            margin: 10px auto 20px 30px;
            text-align: left;
        }
    }

    @media (min-width: 1024px){
        main{
            flex-flow: row;
            justify-content: space-between;
        }
        .goche{
            max-width:60%;
        }
        .droate{
            margin-left: 30px;
        }
        h3, h4{
            text-align: center;
        }
        h4{
            margin: 15px -40px 0 auto;
        }
        .droate ul{
            text-align: right;
        }
        .goche h3, .goche ul{
            max-width: 55vw;
        }
        .droate h4, .droate ul{
            max-width: 40vw;
        }
        header.smoothing{
            transform: translateY(-60px);
        }
        .goche.smoothing{
            transform: translateX(-50px);
        }
        .droate.smoothing{
            transform: translateX(50px);
        }
        .goche.smoothing h3{
            transform: translateX(-50px);
        }
        .droate.smoothing h4{
            transform: translateX(50px);
        }
    }
</style>