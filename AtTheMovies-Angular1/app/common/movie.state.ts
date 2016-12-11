import * as I from "./movie.interfaces";




export const AppState: I.IAppState = {
    BestSellingMovie: undefined,
    SelectedMovie: undefined,
    Movies: [
        {
            id: 1,
            title:"Doctor Strange",
            image:"../../images/doctorstrange.jpg",
            stars: 4,
            sold: 10,
            reviews: [
                {
                    summary:"awesome, must see",
                    stars:4,
                    reviewer:"Stan Lee"
                }
            ],
            brief:"After his career is destroyed, a brilliant but arrogant surgeon gets a new lease on life when a sorcerer takes him under his wing and trains him to defend the world against evil.",
            summary: "After a car accident leaves him with nerve damage that ends his career as a New York neurosurgeon, Stephen Strange (Benedict Cumberbatch) travels to Kathmandu in the hope of finding an otherworldly cure for his injuries. There, a powerful mystic known as the Ancient One (Tilda Swinton) accepts him as her pupil and trains him in the art of sorcery. Eventually, Strange must use his new powers to stop a rival (Mads Mikkelsen) from causing chaos by accessing the Dark Dimension. Rachel McAdams, Chiwetel Ejiofor, and Benedict Wong co-star in this entry in the Marvel Cinematic Universe. Directed by Scott Derrickson (Sinister). ~ Jack Rodgers, Rovi " 

        },
        {
            id: 2,
            title:"Arrival",
            image:"../../images/Arrival_Rated_Payoff_1-Sht_.jpg",
            stars: 3,
            sold: 11,
            reviews: [
                {
                    summary:"cool, trippy, everything I love in a UFO movie",
                    stars:4,
                    reviewer:"Kevin Spacey"
                }
            ],
            brief:"A linguist leads a team of investigators to try and communicate with extraterrestrial visitors.",
            summary: "Denis Villeneuve directed this science-fiction suspense film about Earth's response to a possible alien invasion. After extraterrestrial spacecraft plant themselves at various locations around the globe, a linguist (Amy Adams) and a theoretical physicist (Jeremy Renner) must find a way to communicate with the mysterious visitors in order to learn what they want and whether they pose a threat to humanity. Forest Whitaker and Michael Stuhlbarg co-star. ~ Violet LeVoit, Rovi" 

        },
        {
            id: 3,
            title:"Bleed For This",
            image:"../../images/BleedForThis_OneSheet.jpg",
            stars: 2,
            sold: 9,
            reviews: [
                {
                    summary:"liked the fight scenes, but not much else",
                    stars:2,
                    reviewer:"Bernie Smith"
                },
                                {
                    summary:"couldn't see the main character as a boxer",
                    stars:2,
                    reviewer:"Harry Johansen"
                }

            ],
            brief:"Miles Teller stars as Vinny Pazienza, a world champ boxer who tragically breaks his neck in a car crash. Against all odds, trainer Kevin Rooney (Aaron Eckhart) helps him return to the ring in one of the most unlikely comebacks in sports history.",
            summary: "This sports drama tells the true comeback story of world-champion boxer Vinny, the Pazmanian Devil, Pazienza (Miles Teller). After a horrific car accident, Pazienza is told by his doctors that he might never walk again. Defying their orders, he continues to train as a boxer, returning to the ring and fighting to reclaim his belt only a year later. Aaron Eckhart, Katey Sagal, Christine Evangelista, and Ciarán Hinds co-star. Written and directed by Ben Younger. ~ Jack Rodgers, Rovi " 

        },
        {
            id: 4,
            title:"Moana",
            image:"../../images/Moana57d7ae7e1548f.jpg",
            stars: 3,
            sold: 6,
            reviews: [
                {
                    summary:"loved it, funny",
                    stars:3,
                    reviewer:"Eric Sloan"
                }
            ],
            brief:"A once-mighty demigod and a spirited teenager embark on an epic adventure across the ocean.",
            summary: "Young navigator Moana (voice of Auli'i Cravalho), the daughter of a Polynesian tribal chief, is chosen to find a precious artifact that could save her people. She teams with demigod Maui (Dwayne Johnson) to locate a legendary island, and together the pair explore fantastical lands and encounter incredible sea creatures in this animated adventure from Disney. The film's soundtrack includes contributions from Lin-Manuel Miranda, the Tony and Grammy-winning creator of the popular stage musical Hamilton. Directed by Ron Clements and John Musker. ~ Daniel Gelb, Rovi" 

        },
        {
            id: 5,
            title:"The Accountant",
            image:"../../images/THE-ACCOUNTANT_Poster.jpg",
            stars: 4,
            sold: 11,
            reviews: [
                {
                    summary:"Awesome, Jason Bourne with a calculator",
                    stars:4,
                    reviewer:"Matt Hernandez"
                }
            ],
            brief:"Christian Wolff (Ben Affleck) is a math savant with more affinity for numbers than people. Behind the cover of a small-town CPA office, he works as a freelance accountant for some of the world’s most dangerous criminal organizations.",
            summary: "Christian Wolff (Ben Affleck) is a mathematical genius who works as a financial consultant for criminal organizations eager to hide their dirty money. While being investigated by the Treasury Department, Wolff agrees to help an accounting clerk at a robotics firm (Anna Kendrick) look into fraud at her company, but the assignment will prove far more dangerous than he could have ever anticipated. J.K. Simmons, Jon Bernthal, Jeffrey Tambor, and John Lithgow co-star in this thriller directed by Gavin O'Connor (Warrior, Pride and Glory). ~ Jack Rodgers, Rovi" 

        },

        {
            id: 6,
            title:"Bad Santa 2",
            image:"../../images/BS2-Poster.jpg",
            stars: 4,
            sold: 8,
            reviews: [
                {
                    summary:"Just as good as the first one, love the characters",
                    stars:4,
                    reviewer:"Donald Trump"
                }
            ],
            brief:"Fueled by cheap whiskey, greed and hatred, Willie teams up once again with his angry little sidekick, Marcus, to knock off a Chicago charity on Christmas Eve.",
            summary: "In this sequel to the 2003 cult hit Bad Santa, professional thief and Santa impersonator Willie Soke (Billy Bob Thornton) teams up with his dwarf sidekick (Tony Cox) and hell-raising mother (Kathy Bates) for his latest heist: robbing a Chicago charity during Christmas Eve. However, he begins to have second thoughts about the caper when he falls for the charity's director (Christina Hendricks). Directed by Mark Waters (Mean Girls). ~ Jack Rodgers, Rovi " 

        },
        {
            id: 7,
            title:"Trolls",
            image:"../../images/trolls_poster.jpg",
            stars: 3,
            sold: 5,
            reviews: [
                {   
                    reviewer: "Joey Gomez",
                    summary:"my kids liked it ",
                    stars: 3
                },
                { 
                    reviewer:"Terry Howell",
                    summary:"pretty good characters, nice animation",
                    stars: 3
                }

            ], 
            brief:"From the creators of Shrek comes the most smart, funny and irreverent animated comedy of the year, DreamWorks' Trolls",
            summary: "After a forest tribe of cotton-candy-colored, shock-headed trolls discover that they're the new favorite gourmet treat for King Gristle (Christopher Mintz-Plasse), the unlikely duo of bubbly Poppy (Anna Kendrick) and worrywart Branch (Justin Timberlake) must rescue their friends from the royals' chef (Christine Baranski). Zooey Deschanel, John Cleese, and Jeffrey Tambor also lend their voices to this animated fantasy inspired by Danish woodcutter Thomas Dam's collectible dolls. ~ Violet LeVoit, Rovi " 

        },
        {
            id: 8,
            title:"Allied",
            image:"../../images/Allied_Online_Payoff_1-Sht-.jpg",
            stars: 2,
            sold: 8,
            reviews: [
                {   
                    reviewer: "Gary Smith",
                    summary:"ok, if you have nothing to do ",
                    stars: 2
                },
                { 
                    reviewer:"Ben Lowell",
                    summary:"starts good, ends bad",
                    stars: 2
                }
            ], 
            brief:"In 1942, an intelligence officer in North Africa encounters a female French Resistance fighter on a deadly mission behind enemy lines. When they reunite in London, their relationship is tested by the pressures of war.",
            summary: "In this WWII spy thriller, Canadian airman Max Vatan (Brad Pitt) and French Resistance operative Marianne Beauséjour (Marion Cotillard) pose as a married couple for a dangerous mission in Casablanca. Their cover story soon leads to an actual love affair and their starting a family together, but Max's happiness is shattered when he's told that he must take part in an investigation to determine whether Marianne is really a double agent working for the Nazis. Jared Harris, Lizzy Caplan, and Matthew Goode co-star. Directed by Robert Zemeckis (Forrest Gump, Cast Away). ~ Jack Rodgers, Rovi" 

        },

    ]

};

