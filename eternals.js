const eternals = [
    {
        name: "Ikaris",
        attributes: ["flight", "super strength", "immortality"],
        skills: ["energy projection", "combat"],
        img: "images\\Ikaris.jpg"
    },
    {
        name: "Sersi",
        attributes: ["transmutation", "telepathy"],
        skills: ["matter manipulation", "telekinesis"],
        img: "images\\Sersi.png"

    },
    {
        name: "Thena",
        attributes: ["super agility", "immortality"],
        skills: ["combat", "weapon mastery"],
        img: "images\\Thena.png"
    },
    {
        name: "Sprite",
        attributes: ["illusion", "immortality"],
        skills: ["reality manipulation", "illusion casting"],
        img: "images\\Sprite.png"
    },
    {
        name: "Druig",
        attributes: ["mind control", "telepathy"],
        skills: ["psychic powers", "combat"],
        img: "images\\Druig.png"
    },
    {
        name: "Makkari",
        attributes: ["super speed", "sonar perception"], 
        skills: ["enhanced speed", "enhanced eyesight"],
        img: "images\\Makkari.png"
    }
];

    // Get DOM elements
    const searchInput = document.getElementById("searchInput");
    const characterList = document.getElementById("characterList");

    // Function to display the list of characters
    function displayCharacterList(characters) {
      characterList.innerHTML = ""; // Clear the current list


      characters.forEach(character => {
        const listItem = document.createElement("li");   
        
        // Create an image element and set its attributes
        const characterImg = document.createElement("img");
        characterImg.src = character.img;
        characterImg.alt = character.name;
        characterImg.className = "character-img";

        const characterInfo = document.createElement("span");
        characterInfo.textContent = `${character.name} - Attributes: ${character.attributes.join(", ")}`;

        listItem.appendChild(characterImg); // Append the image
        listItem.appendChild(characterInfo); // Append the text
        characterList.appendChild(listItem); // Append the list item

      });
    }

    // Function to search for characters by attribute
    function searchCharacters() {
      const searchText = searchInput.value.toLowerCase();

      // Filter characters based on the entered attribute using the find method
      const filteredCharacters = eternals.filter(character =>
        character.attributes.find(attribute => attribute.toLowerCase().includes(searchText))
      );

      displayCharacterList(filteredCharacters);
    }

    // Initial display of all characters
    displayCharacterList(eternals);