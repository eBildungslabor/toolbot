/* Anhand dieses Beispielsdialogs siehst Du, wie der Textbot funktioniert. Ersetze ihn durch Deinen Text.
 */

const chat = {
    1: {
        text: 'Hi. Ich bin ein Toolbot und unterstütze Dich bei der Auswahl eines Werkzeugs zur OER-Erstellung.',
        options: [
            {
                text: 'Cool, lass uns starten!',
                next: 2
            }
        ]
    },
    2: {
        text: 'Was für ein Tool suchst Du denn?',
        next: 3
    },
    3: {
        text: 'Lieber einfach oder lieber spannend 😀',
        options: [
            {
                text: "Lieber erst einmal einfach!",
                next: 4
            },
            {
                text: "Was wären denn spannende Tools?.",
                next: 11
            }
        ]
    },
    4: {
        text: 'Okay, Also am einfachsten ist es, wenn Du die Tools nutzt, die Du für gewöhnlich auf Deinem Rechner nutzt, z.B. Dein Schreibprogramm oder eine Präsentations-Software',
      options: [
            {
                text: 'Und daraus wird dann ein OER?',
                next: 5
            }
        ]
    },
  
   5: {
        text: 'Du musst eine offene Lizenz dazu schreiben.',
        next: '6'
    },
    
    6: {
        text: 'Und nicht hilfreich ist z.B. ein Textdokument als pdf. Das geht ja nur schwer zu bearbeiten!',
        next: 7
    },
    7: {
        text: 'Aber vielleicht bist Du eher an "richtigen" OER-Tools interessiert?',
        options: [
            {
                text: "Ja, genau. Hast Du einen Vorschlag?",
                next: 8
            }
        ]
},

 8: {
        text: 'Schau Dir vielleicht mal Tutory an.',
        next: 9
    },
    9: {
        text: 'Damit kannst Du ganz einfach Arbeitsblätter erstellen und auch offline nutzen.',
        options: [
            {
                text: "Das will ich mir ansehen!",
                next: 10
            },
           {
                text: "Was gibt es denn noch?",
                next: 11
            }
        ]
    },
  
  10: {
        text: 'Alles klar, ich bin gespannt, wie es Dir gefällt.',
       options: [
            {
                text: "Los geht es mit tutory",
                url: "https://tutory.de"
            },
          ]
    },
  
  11: {
        text: 'Eines meiner Lieblingstools ist H5P',
        options: [
            {
                text: "Erzähle mir mehr davon!",
                next: 12
            },
            {
                text: "Was kennst Du denn noch für Tool.",
                next: 16
            }
        ]
    },
  
   12: {
        text: 'Mit H5P kannst Du interaktive Online-Bildungsmaterialien erstellen, teilen und remixen.',
        next: '13'
    },
    
    13: {
        text: 'Zum Beispiel eine Präsentation, ein Quiz, ein Lückentext oder sogar ein Video mit Einblendungen',
        next: 14
    },
    14: {
        text: 'Die Inhalte können überall eingebettet werden.',
       options: [
            {
                text: "Das will ich mir ansehen.",
                next: 15
            },
            {
                text: "Hast Du noch ein Tool?",
                next: 16
            }
        ]
    },
  
   15: {
        text: 'Gute Wahl. Viel Erfolg!.',
       options: [
            {
                text: "Los geht es mit H5P",
                url: "https://h5p.glitch.me"
            },
          ]
    },
  
   16: {
        text: 'Es gibt einige kollaborative Tools und super sind auch Coding-Plattformen - selbst wenn Du nicht coden kannst',
        options: [
            {
                text: "Kollaboration klingt gut",
                next: 17
            },
            {
                text: "Coding-Plattform für nicht-codende Menschen klingt gut.",
                next: 26
            }
        ]
    },
  
  17: {
        text: 'Am einfachsten nutzt Du ein Etherpad.',
        next: '18'
    },
    
    18: {
        text: 'Das ist eine Website, an der alle mitschreiben können, die den Link dazu haben.',
        next: 19
    },
    19: {
        text: 'Und über den Link kannst Du das Ergebnis dann auch veröffentlichen.',
       options: [
            {
                text: "Das will ich mir ansehen.",
                next: 20
            },
            {
                text: "Zeige mir erst einmal noch ein anderes Kollaborationstool.",
                next: 21
            }
        ]
    },
  
   20: {
        text: 'Gut zu nutzen ist z.B. die Etherpad Installation der ZUM - das ZUMPAD.',
       options: [
            {
                text: "Okay, ich gehe zum Zumpad",
                url: "https://zumpad.zum.de"
            },
          ]
    },
  
  21: {
        text: 'CodiMD ist ein erweitertertes Etherpad.',
        next: '22'
    },
    
    22: {
        text: 'Du schreibst in Markdown. Es gibt einen Ansichtsmodus und einen zur Präsentation.',
        next: 23
    },
    23: {
        text: 'Und wieder wird einfach über einen Link geteilt.',
       options: [
            {
                text: "Das will ich mir ansehen.",
                next: 24
            },
            {
                text: "Ich verstehe nur Bahnhof.",
                next: 25
            },
          {
                text: "Zeige mir erst nochmal weitere Tools.",
                next: 26
            }
        ]
    },
  
   24: {
        text: 'Gut zu nutzen ist z.B. die CodiMD Installation der Open Knowledge Foundation.',
       options: [
            {
                text: "Okay, ich richte mir dort ein Hackpad ein.",
                url: "https://hackmd.okfn.de"
            },
          ]
    },
  
  25: {
        text: 'Keine Sorge, das ist nicht so kompliziert, wie es klingt. Es gibt dazu bei der Werkstatt auch ein Coaching Angebot.',
       options: [
            {
                text: "Okay, dann mache erst mal weiter.",
                next: 26
            },
          ]
    },
  
  26: {
        text: 'Ich mag sehr gerne Glitch.',
        next: '27'
    },
    
    27: {
        text: 'Das ist eine Plattform, auf der man Web-Anwendungen veröffentlichen und vor allem auch remixen kann.',
        next: 28
    },
    28: {
        text: 'Damit können sie auch Menschen gut nutzen, die eigentlich gar nicht coden können.',
       options: [
            {
                text: "Das klingt spannend. Erzähle mir mehr davon.",
                next: 29
            },
            {
                text: "Hmmm, ich denke das ist eher nichts für mich.",
                next: 34
            }
        ]
    },
  
  29: {
        text: 'Bei der Werkstatt im Lisum haben einige mit Glitch eine Website gestaltet.',
        next: '30'
    },
    
    30: {
        text: 'Mit eingebettetem Youtube.Video, Text-Bildern und interaktiven Übungen.',
        next: 31
    },
    31: {
        text: 'Aber Du kannst z.B. auch so einen Bot wie mich erstellen',
       options: [
            {
                text: "Das will ich mir ansehen.",
                next: 32
            },
            {
                text: "Gibt es dazu Coaching?",
                next: 33
            },
          {
                text: "Zeige mir erst nochmal weitere Tools.",
                next: 34
            }
        ]
    },
  
   32: {
        text: 'In diesem Blogbeitrag ist Glitch gut erklärt.',
       options: [
            {
                text: "Okay, lese ich.",
                url: "https://ebildungslabor.de/blog/glitch/"
            },
          ]
    },
   33: {
        text: 'Ja, gibt es!',
        next: '34'
    },
  
   34: {
        text: 'Weitere Tools zur OER Erstellung sind für speziellere Herausforderungen.',
        next: '35'
    },
    
    35: {
        text: 'Mit Twine kannst Du zum Beispiel interaktive Geschichten und Tutorials erstellen.',
        next: 36
    },
    36: {
        text: 'Oder mit Learningsacks einen interaktiven Chat wie diesen hier.',
       options: [
            {
                text: "Zeige mir mal mehr zu Twine",
                next: 37
            },
            {
                text: "Zeige mir mehr zu Learningsnacks",
                next: 40
            },
          {
                text: "Hast Du noch andere Tipps?",
                next: 43
            }
        ]
    },
  
  
   37: {
        text: 'Twine ist eine Open Source Software, die ein bißchen wie ein Wiki funktioniert.',
        next: 38
    },
    38: {
        text: 'Du kannst Texte erstellen und beliebig miteinander verknüpfen.',
       options: [
            {
                text: "Das will ich mir ansehen.",
                next: 39
            },
            {
                text: "Schaue ich mir vielleicht später an. Erst mal weiter mit LearningSnacks, bitte!",
                next: 40
            },
          {
                text: "Gibt es noch andere Tools?",
                next: 43
            }
          
        ]
    },
  
   39: {
        text: 'Hier gibt es ein Tutorial zu Twine - als Twine erstellt.',
       options: [
            {
                text: "Super, danke!",
                url: "https://ebildungslabor.github.io/twinetutorial/"
            },
          ]
    },
  
  40: {
        text: 'Learningsnacks ist sehr intuitiv zu nutzen.',
        next: 41
    },
    41: {
        text: 'Du erstellst Textchats und teilst sie dann von der Plattform aus. Das Tool ist aber nicht Open Source.',
       options: [
            {
                text: "Will ich trotzdem mal ausprobieren.",
                next: 42
            },
            {
                text: "Schaue ich mir vielleicht später an. Erst mal noch etwas zu Twine, bitte!",
                next: 37
            },
          {
                text: "Gibt es noch andere Tools?",
                next: 43
            }
          
        ]
    },
  
   42: {
        text: 'Alles klar. Viel Erfolg wünsche ich.',
       options: [
            {
                text: "Zu Learningsnacks.de",
                url: "https://learningsnacks.de"
            },
          ]
    },
  
   43: {
        text: 'Ja, jede Menge. Das sind dann meist "Helfer-Tools" z.B. zur Bildbearbeitung.',
        next: 44
    },
    44: {
        text: 'Oder zur Meme-Erstellung oder zur Audioaufnahme und vieles mehr.',
       options: [
            {
                text: "Das klingt gut. Kann ich gebrauchen.",
                next: 45
            },
            
          {
                text: "Das reicht mir erst einmal an Infos. Danke!",
                next: 46
            }
          
        ]
    },
  
  45: {
        text: 'Viel Spaß beim Erkunden!',
       options: [
            {
                text: "Hier geht es zur Liste",
                url: "https://hackmd.okfn.de/flQ74CNRSCWPD0wuTkKXYg#"
            },
          ]
    },
  
  46: {
        text: 'Ich wünsche Dir viel Spaß bei der OERcamp Werkstatt. Da gibt es ja noch viel mehr Tools zum Entdecken.',
        options: [
            {
                text: 'Danke und Ciao',
                next: 47
            }
        ]
    },
  
  47: {
        text: 'Ciao.',
},
}
  

