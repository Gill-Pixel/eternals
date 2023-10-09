const eternals = [
    {
        name: "Ikaris",
        attributes: ["flight", "super strength", "immortality"],
        skills: ["energy projection", "combat"]
    },
    {
        name: "Sersi",
        attributes: ["transmutation", "telepathy"],
        skills: ["matter manipulation", "telekinesis"]
    },
    {
        name: "Thena",
        attributes: ["super agility", "immortality"],
        skills: ["combat", "weapon mastery"]
    },
    {
        name: "Sprite",
        attributes: ["illusion", "immortality"],
        skills: ["reality manipulation", "illusion casting"]
    },
    {
        name: "Druig",
        attributes: ["mind control", "telepathy"],
        skills: ["psychic powers", "combat"]
    },
    {
        name: "Makkari",
        attributes: ["super speed", "sonar perception"], 
        skills: ["enhanced speed", "enhanced eyesight"]
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
        listItem.textContent = `${character.name} - Attributes: ${character.attributes.join(", ")}`;
        characterList.appendChild(listItem);
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